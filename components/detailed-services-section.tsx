import { Card } from "@/components/ui/card"

const itemsWeHandle = [
  "Mobiliers et bibelots",
  "Épaves de voitures, camions, bateaux, engins…",
  "Électroménager",
  "Matériel informatique",
  "Livres",
  "Destruction Archives et sécurisation des déchets",
  "Linge",
  "Syndrome de Diogène & Syllogomanie",
  "Gravats / Déchets verts",
]

const mainServices = [
  {
    title: "Débarras pour les particuliers",
    description:
      "Nous intervenons pour tous types de débarras : maisons, appartements, caves, greniers, garages. Service complet de A à Z.",
  },
  {
    title: "Syndrome de Diogène & Syllogomanie",
    description:
      "Accompagnement spécialisé avec discrétion et respect. Notre équipe est formée pour gérer ces situations délicates.",
  },
  {
    title: "Débarras pour les professionnels",
    description:
      "Solutions adaptées aux entreprises : locaux commerciaux, bureaux, entrepôts. Intervention rapide et efficace.",
  },
]

export function DetailedServicesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* What We Handle */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
                Que débarrassons-nous ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Notre mission est de débarrasser tous types de logements et locaux en Corse, en prenant en charge une
                variété d'objets, du mobilier encombrant aux biens personnels, avec professionnalisme, efficacité et
                discrétion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {itemsWeHandle.map((item, index) => (
                <Card key={index} className="p-6 border-border hover:border-primary transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Services Detail */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center text-balance">
              Nos Principaux Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <Card key={index} className="p-8 border-border bg-muted/30">
                  <div className="text-5xl font-serif font-bold text-primary/20 mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
