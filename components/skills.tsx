"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Server, Database, Wrench, Box, Globe } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillCategories = [
  {
    title: "Lenguajes y Frameworks",
    icon: Code2,
    skills: ["TypeScript", "Node.js", "Express", "React", "React Native", "Capacitor"],
  },
  {
    title: "Arquitectura y Backend",
    icon: Server,
    skills: ["Microservicios", "gRPC", "Kafka", "REST APIs", "Socket.IO", "MQTT"],
  },
  {
    title: "Infraestructura",
    icon: Box,
    skills: ["Docker", "GitHub Actions (CI/CD)", "Nginx", "PM2", "Kubernetes", "Grafana"],
  },
  {
    title: "Bases de Datos y Colas",
    icon: Database,
    skills: ["MySQL/MariaDB", "MongoDB", "Redis", "BullMQ"],
  },
  {
    title: "Principios",
    icon: Wrench,
    skills: ["Arquitectura Hexagonal", "Optimización de rendimiento", "Entornos reproducibles"],
  },
  {
    title: "Idiomas",
    icon: Globe,
    skills: ["Español (Nativo)", "Inglés (Intermedio técnico)"],
  },
]

export function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2
          ref={ref}
          className={`font-display text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="gradient-text">Habilidades Técnicas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:card-glow transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-background/50 text-foreground border-primary/30 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
