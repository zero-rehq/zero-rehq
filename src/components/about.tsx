
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2
          ref={ref}
          className={`font-display text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="gradient-text">Perfil Profesional</span>
        </h2>

        <Card
          className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 card-glow transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg leading-relaxed text-card-foreground">
            Desarrollador Full Stack especializado en{" "}
            <span className="text-primary font-semibold">arquitecturas distribuidas</span>, comunicación en tiempo real
            e integración de sistemas IoT. Experiencia diseñando microservicios con{" "}
            <span className="text-primary font-semibold">Node.js, TypeScript, Kafka y gRPC</span>, además de soluciones
            en tiempo real con MQTT y Socket.IO. Enfocado en la escalabilidad, el rendimiento y la automatización
            mediante <span className="text-primary font-semibold">Docker, CI/CD</span> y principios de arquitectura
            hexagonal.
          </p>
        </Card>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-display text-lg text-muted-foreground italic">"Code. Create. Collapse. Rebuild."</p>
        </div>
      </div>
    </section>
  )
}
