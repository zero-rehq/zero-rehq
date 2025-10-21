
import { Card } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const education = [
  {
    institution: "4Geeks Academy",
    degree: "Bootcamp Full Stack Developer",
    year: "2023",
  },
  {
    institution: "Institut Provençana",
    degree: "FP Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    year: "2021 – 2023",
  },
]

export function Education() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2
          ref={ref}
          className={`font-display text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="gradient-text">Educación</span>
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:card-glow transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">{edu.institution}</h3>
                    <p className="text-card-foreground">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground ml-9 md:ml-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-mono">{edu.year}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
