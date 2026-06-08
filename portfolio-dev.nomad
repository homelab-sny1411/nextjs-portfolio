variable "image" {
  description = "Docker image to deploy"
  type        = string
}

variable "registry_user" {
  description = "Docker registry username"
  type        = string
}

variable "registry_password" {
  description = "Docker registry password"
  type        = string
}

job "portfolio-dev" {
  datacenters = ["homelab"]
  type        = "service"

  update {
    max_parallel      = 1
    min_healthy_time  = "15s"
    healthy_deadline  = "3m"
    progress_deadline = "10m"
    auto_revert       = true
    canary            = 1
  }

  group "web" {
    count = 1

    constraint {
      attribute = "${attr.cpu.arch}"
      value     = "arm64"
    }

    network {
      port "app" {
        to = 3000
      }
    }

    service {
      name     = "portfolio-dev"
      port     = "app"
      provider = "consul"

      check {
        type     = "http"
        path     = "/"
        interval = "10s"
        timeout  = "3s"
      }

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.portfolio-dev.rule=Host(`portfolio-dev.matteo-humez.fr`)",
        "traefik.http.routers.portfolio-dev.entrypoints=websecure",
        "traefik.http.routers.portfolio-dev.tls=true",
        "traefik.http.routers.portfolio-dev.tls.certresolver=le",
        "traefik.http.services.portfolio-dev.loadbalancer.server.port=${NOMAD_HOST_PORT_app}",
        "traefik.http.services.portfolio-dev.loadbalancer.healthcheck.path=/",
        "traefik.http.services.portfolio-dev.loadbalancer.healthcheck.interval=10s",
      ]
    }

    task "portfolio-dev" {
      driver = "docker"

      config {
        image = var.image
        auth {
          username       = var.registry_user
          password       = var.registry_password
          server_address = "registry.matteo-humez.fr"
        }
        ports = ["app"]
      }

      env {
        NODE_ENV = "production"
        PORT     = "3000"
        HOSTNAME = "0.0.0.0"
      }

      resources {
        cpu    = 300
        memory = 256
      }
    }
  }
}
