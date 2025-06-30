variable "image" {
  description = "Docker image to deploy"
  type        = string
  default     = "ghcr.io/homelab-sny1411/nextjs-portfolio:latest"
}

job "portfolio" {
  datacenters = ["homelab"]
  type = "service"

  group "web" {
    count = 2

    network {
      port "app" {
        to = 3000
      }
    }

    service {
      name = "portfolio"
      port = "app"

      check {
        type     = "http"
        path     = "/"
        interval = "10s"
        timeout  = "2s"
      }

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.portfolio.service=portfolio",
        "traefik.http.routers.portfolio.rule=Host(`www.matteo-humez.fr`) || Host(`matteo-humez.fr`)",
        "traefik.http.routers.portfolio.entrypoints=websecure",
        "traefik.http.services.portfolio.loadbalancer.server.port=${NOMAD_HOST_PORT_app}",
        "traefik.http.routers.portfolio.tls=true",
        "traefik.http.routers.portfolio.tls.certresolver=leresolver"
      ]
    }

    task "portfolio" {
      driver = "docker"

      config {
        image = var.image
        ports = ["app"]

        logging {
          type = "json-file"
        }
      }

      env {
        NODE_ENV = "production"
        PORT     = "3000"
      }

      resources {
        cpu    = 1000
        memory = 512
      }
    }
  }
}
