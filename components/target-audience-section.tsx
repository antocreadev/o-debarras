import { Users, Building, Briefcase, Scale, Landmark } from "lucide-react"

const audiences = [
  {
    icon: Users,
    title: "Particuliers",
    description: "Propriétaires, locataires, héritiers",
  },
  {
    icon: Building,
    title: "Agences immobilières",
    description: "Remise en état de biens",
  },
  {
    icon: Briefcase,
    title: "Entreprises",
    description: "Locaux commerciaux et bureaux",
  },
  {
    icon: Scale,
    title: "Mandataires judiciaires",
    description: "Accompagnement juridique",
  },
  {
    icon: Landmark,
    title: "Collectivités",
    description: "Administrations et services publics",
  },
]

export function TargetAudienceSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            À qui s'adressent nos services ?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Nous mettons notre expertise en débarras au service de divers secteurs, allant des particuliers aux
            entreprises, des collectivités aux administrations, pour offrir des solutions complètes et adaptées à chaque
            besoin en Corse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
