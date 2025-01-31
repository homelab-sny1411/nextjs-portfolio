variable "image" {
  type    = string
}

variable "docker_username" {
  type = string
}

variable "docker_password" {
  type = string
}

job "portfolio" {
  datacenters = ["homelab"]
  type = "service"

  group "web" {
    count = 1

    network {
      port "http" {
        to = 80
      }
    }

    service {
      name = "portfolio"
      port = "http"

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.portfolio.rule=Host(`matteo-humez.fr`)"
      ]
    }

    task "portfolio" {
      driver = "docker"

      config {
        image = var.image
        ports = ["http"]
        auth {
          username = var.docker_username
          password = var.docker_password
        }
      }

      resources {
        cpu    = 100
        memory = 128
      }
    }
  }
}