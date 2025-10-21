"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2
          ref={ref}
          className={`font-display text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="gradient-text">Contacto</span>
        </h2>

        <Card
          className={`p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 card-glow transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="text-center mb-8">
            <p className="text-lg text-card-foreground mb-2">¿Interesado en trabajar juntos?</p>
            <p className="text-muted-foreground">No dudes en contactarme a través de cualquiera de estos medios</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:b.muruacarreras@gmail.com"
              className="flex items-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors border border-border/50"
            >
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-mono text-sm">b.muruacarreras@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+34604804995"
              className="flex items-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors border border-border/50"
            >
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <p className="text-foreground font-mono text-sm">+34 604 80 49 95</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border/50">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Ubicación</p>
                <p className="text-foreground">Barcelona, España</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border/50">
              <div className="h-5 w-5 flex items-center justify-center text-primary flex-shrink-0 font-display font-bold">
                ZR
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Brand</p>
                <p className="text-foreground font-display">zero-rehq</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display" asChild>
              <a href="mailto:b.muruacarreras@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Enviar Email
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 bg-transparent"
              asChild
            >
              <a href="https://github.com/brunomurua" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 bg-transparent"
              asChild
            >
              <a href="https://linkedin.com/in/brunomurua" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">© 2025 Bruno Murua • zero-rehq</p>
          <p className="text-muted-foreground text-xs mt-2 font-display italic">"The calm logic of rebellion"</p>
        </div>
      </div>
    </section>
  )
}
