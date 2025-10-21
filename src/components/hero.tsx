import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

export function Hero() {
  const parallaxOffset = useParallax(-0.5)

  const scrollProgress = Math.min(Math.abs(parallaxOffset) / 800, 1)
  const blurAmount = scrollProgress * 20
  const scaleAmount = 1 - scrollProgress * 0.3
  const opacityAmount = 1 - scrollProgress

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        transform: `scale(${scaleAmount})`,
        opacity: opacityAmount,
        filter: `blur(${blurAmount}px)`,
        transformOrigin: "center center",
      }}
    >
      <div className="absolute inset-0 overflow-hidden w-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              transform: `translateY(${parallaxOffset * (0.2 + Math.random() * 0.3)}px)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block">
            <span className="font-display text-sm md:text-base tracking-[0.3em] text-primary uppercase">zero-rehq</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="gradient-text glow">Bruno Murua</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">Full Stack Developer</p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Especializado en arquitecturas distribuidas, comunicación en tiempo real e integración de sistemas IoT
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-wide"
            >
              Contactar
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="https://github.com/zero-rehq" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="https://linkedin.com/in/brunomurua" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="mailto:b.muruacarreras@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  )
}
