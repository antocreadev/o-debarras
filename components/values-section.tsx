import { Clock, Zap, Shield, Heart } from "lucide-react"

const values = [
  {
    icon: Clock,
    title: "Ponctualité",
    description: "Nous respectons scrupuleusement les horaires convenus et intervenons dans les délais annoncés.",
  },
  {
    icon: Zap,
    title: "Rapidité",
    description: "Nos équipes sont formées pour intervenir efficacement tout en maintenant un haut niveau de qualité.",
  },
  {
    icon: Shield,
    title: "Discrétion",
    description: "Nous garantissons une confidentialité absolue et un respect total de votre vie privée.",
  },
  {
    icon: Heart,
    title: "Respect",
    description: "Nous traitons chaque situation avec empathie et professionnalisme, sans jugement.",
  },
]

const commitments = [
  "Tri et recyclage systématique des déchets",
  "Discrétion et respect de la confidentialité",
  "Équipe professionnelle et formée",
  "Devis gratuit et sans engagement",
  "Intervention rapide dans toute la Corse",
  "Tarifs transparents et compétitifs",
]

export function ValuesSection() {
  return (
    <section id="values" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Nos Valeurs
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">Des engagements forts pour un service de qualité</p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Commitments */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Nos Engagements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <span className="text-foreground">{commitment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
