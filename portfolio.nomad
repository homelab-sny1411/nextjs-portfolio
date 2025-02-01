variable "image" {
  type    = string
}

job "portfolio" {
  datacenters = ["homelab"]
  type = "service"

  group "web" {
    count = 1

    network {
      port "app" {
        to = 3000
      }
    }

    service {
      name = "portfolio"
      port = "app"

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.portfolio.rule=Host(`matteo-humez.fr`)",
        "traefik.http.services.portfolio.loadbalancer.server.port=3000"
      ]
    }

    task "portfolio" {
      driver = "docker"

      config {
        image = var.image
        ports = ["app"]
      }

      resources {
        cpu    = 1000
        memory = 512
      }
    }
  }
}