import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Zap,
  Lock,
  Heart,
  Recycle,
  Shield,
  Award,
  Users,
} from "lucide-react";

export default function ValeursPage() {
  const coreValues = [
    {
      icon: Clock,
      title: "Ponctualité",
      description:
        "Le respect de vos horaires est notre priorité. Nous nous engageons à intervenir aux créneaux convenus et à respecter les délais annoncés. Votre temps est précieux, nous en sommes conscients.",
      commitment: "Intervention dans les 48h suivant votre demande",
    },
    {
      icon: Zap,
      title: "Rapidité",
      description:
        "Nos équipes sont formées pour travailler efficacement sans compromettre la qualité. Nous optimisons chaque intervention pour vous libérer rapidement de vos encombrants tout en assurant un travail soigné.",
      commitment: "Débarras complet en une seule intervention dans 95% des cas",
    },
    {
      icon: Lock,
      title: "Discrétion",
      description:
        "Nous comprenons que certaines situations sont délicates. Notre équipe fait preuve d'une discrétion absolue, que ce soit pour des débarras après décès, des situations de syndrome de Diogène ou simplement par respect de votre vie privée.",
      commitment: "Confidentialité totale garantie par contrat",
    },
    {
      icon: Heart,
      title: "Respect",
      description:
        "Le respect est au cœur de notre métier : respect des personnes, des biens, des lieux et de l'environnement. Nous traitons chaque intervention avec empathie et professionnalisme, quelle que soit la situation.",
      commitment:
        "Approche humaine et bienveillante dans toutes nos interventions",
    },
  ];

  const commitments = [
    {
      icon: Recycle,
      title: "Tri et Recyclage des Déchets",
      description:
        "Nous nous engageons à trier systématiquement tous les objets et matériaux collectés. Notre objectif : maximiser le recyclage et la valorisation, minimiser l'enfouissement.",
      details: [
        "Partenariats avec des centres de tri certifiés",
        "Don aux associations locales (Emmaüs, Secours Populaire)",
        "Recyclage des métaux, plastiques, bois et textiles",
        "Traitement spécialisé des déchets dangereux (amiante, produits chimiques)",
      ],
    },
    {
      icon: Shield,
      title: "Discrétion et Respect de la Confidentialité",
      description:
        "Votre vie privée est sacrée. Nous garantissons une confidentialité absolue sur toutes nos interventions, avec des protocoles stricts pour la gestion des documents et informations sensibles.",
      details: [
        "Destruction sécurisée des documents confidentiels",
        "Respect des normes RGPD pour les données personnelles",
        "Équipes formées au secret professionnel",
        "Certificats de destruction sur demande",
      ],
    },
    {
      icon: Award,
      title: "Professionnalisme et Qualité",
      description:
        "Nous investissons continuellement dans la formation de nos équipes et l'amélioration de nos processus pour vous offrir un service irréprochable.",
      details: [
        "Équipes formées et expérimentées",
        "Matériel professionnel adapté",
        "Assurance responsabilité civile professionnelle",
        "Suivi qualité après chaque intervention",
      ],
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description:
        "Chaque situation est unique. Nous prenons le temps d'écouter vos besoins spécifiques et d'adapter notre intervention en conséquence.",
      details: [
        "Écoute attentive de vos besoins",
        "Conseils personnalisés",
        "Flexibilité dans l'organisation",
        "Disponibilité et réactivité",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Nos Valeurs</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Les Valeurs qui Nous Guident
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Chez Ò Debarras, nos valeurs ne sont pas de simples mots. Elles
              sont le fondement de notre engagement quotidien envers nos clients
              et notre île, la Corse.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">
                        {value.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {value.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm font-medium">
                      <span className="text-primary">Notre engagement :</span>{" "}
                      {value.commitment}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strong Commitments */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Nos Engagements Forts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Au-delà de nos valeurs fondamentales, nous prenons des engagements
              concrets qui font la différence dans la qualité de nos services.
            </p>
          </div>

          <div className="space-y-8">
            {commitments.map((commitment, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <commitment.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">
                        {commitment.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {commitment.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {commitment.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <CTASection />
      <Footer />
    </main>
  );
}
