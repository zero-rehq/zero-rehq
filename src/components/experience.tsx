import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    company: "FarmaConnect",
    location: "Barcelona, España",
    role: "Full Stack Developer / Arquitectura de Microservicios e IoT",
    period: "2024 – Actualidad",
    achievements: [
      "Diseñé la arquitectura distribuida multi-tenant de la plataforma basada en Kafka, gRPC y Node.js",
      "Desarrollé un sistema de subidas y distribución de archivos mediante FTP con colas controladas por Kafka",
      "Implementé aplicaciones IoT con Capacitor, integrando comunicación en tiempo real vía MQTT",
      "Optimicé el rendimiento del frontend, reduciendo en un 70% el peso del bundle y los tiempos de compilación",
      "Migré a un sistema de comunicación híbrido HTTP API + Socket.IO",
      "Reemplacé AG Grid por una solución ligera con React Virtuoso",
      "Implementé colas de procesamiento con Redis y BullMQ, y monitoreo con Grafana y Kubernetes",
    ],
    tags: ["Kafka", "gRPC", "Node.js", "MQTT", "Socket.IO", "Docker", "Kubernetes", "Redis", "BullMQ"],
  },
  {
    company: "4Geeks Academy",
    location: "Remoto",
    role: "Teacher Assistant",
    period: "2024",
    achievements: [
      "Mentoría técnica en desarrollo Full Stack con React, Python/Flask y SQLAlchemy",
      "Asistencia en buenas prácticas, control de versiones y colaboración en proyectos grupales",
    ],
    tags: ["React", "Python", "Flask", "SQLAlchemy", "Mentoring"],
  },
]

export function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2
          ref={ref}
          className={`font-display text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="gradient-text">Experiencia Profesional</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} isParentVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  exp,
  index,
  isParentVisible,
}: {
  exp: (typeof experiences)[0]
  index: number
  isParentVisible: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const PREVIEW_COUNT = 3
  const hasMore = exp.achievements.length > PREVIEW_COUNT
  const displayedAchievements = isExpanded ? exp.achievements : exp.achievements.slice(0, PREVIEW_COUNT)

  return (
    <Card
      className={`p-5 md:p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:card-glow transition-all duration-1000 ${
        isParentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 200 + 200}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-2">
            <Briefcase className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{exp.company}</h3>
              <p className="text-muted-foreground text-sm">{exp.location}</p>
            </div>
          </div>
          <p className="text-base md:text-lg font-semibold text-primary ml-9">{exp.role}</p>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground ml-9 md:ml-0">
          <Calendar className="h-4 w-4" />
          <span className="text-sm font-mono">{exp.period}</span>
        </div>
      </div>

      <ul className="space-y-1.5 mb-4 ml-9">
        {displayedAchievements.map((achievement, i) => (
          <li key={i} className="text-card-foreground leading-relaxed flex gap-2 text-sm md:text-base">
            <span className="text-primary mt-1.5">▸</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-9 mb-4 flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Ver menos
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Ver más (+{exp.achievements.length - PREVIEW_COUNT})
            </>
          )}
        </button>
      )}

      <div className="flex flex-wrap gap-2 ml-9">
        {exp.tags.map((tag, i) => (
          <Badge key={i} variant="secondary" className="bg-secondary/20 text-secondary-foreground border-secondary/30 text-xs">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  )
}
