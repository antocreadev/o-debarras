import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Ò Débarras Corse | Devis Gratuit 07 84 71 73 01",
  description:
    "Contactez Ò Débarras pour un devis gratuit. Tél: 07 84 71 73 01 - Email: odebarras2b@gmail.com. Intervention rapide Corse. Lun-Sam 8h-19h.",
  keywords: [
    "contact débarras Corse",
    "devis gratuit débarras",
    "téléphone débarras Corse",
    "07 84 71 73 01",
    "email débarras Corse",
    "intervention rapide Corse",
    "contact débarras Ajaccio",
    "contact débarras Bastia",
    "urgence débarras Corse",
  ],
  authors: [{ name: "Ò Débarras" }],
  creator: "Ò Débarras",
  publisher: "Ò Débarras",
  openGraph: {
    title: "Contact Ò Débarras Corse | Devis Gratuit",
    description:
      "Contactez-nous pour un devis gratuit. Disponible 6j/7. Intervention rapide dans toute la Corse.",
    url: "https://www.odebarras-corse.fr/contact",
    siteName: "Ò Débarras",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo-2.png",
        width: 1200,
        height: 630,
        alt: "Ò Débarras - Contact débarras en Corse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ò Débarras Corse | Devis Gratuit",
    description:
      "Contactez-nous pour un devis gratuit. Intervention rapide dans toute la Corse.",
    images: ["/logo-2.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Contact</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Contactez-Nous
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Besoin d'un devis gratuit ou d'informations ? Contactez-nous par
              téléphone, email ou sur les réseaux sociaux.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Informations de Contact</CardTitle>
                  <CardDescription>
                    Plusieurs moyens de nous joindre
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a
                        href="tel:+33784717301"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        +33 7 84 71 73 01
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:odebarras2b@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        odebarras2b@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Zone d'intervention</p>
                      <p className="text-sm text-muted-foreground">
                        Toute la Corse
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Horaires</p>
                      <p className="text-sm text-muted-foreground">
                        Lun-Sam : 8h-19h
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Dim : Sur rendez-vous
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Button asChild className="w-full mb-3" size="lg">
                      <a href="tel:+33784717301">
                        <Phone className="w-4 h-4 mr-2" />
                        Appeler Maintenant
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full"
                      size="lg"
                    >
                      <a href="mailto:odebarras2b@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Envoyer un Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media Section */}
            <div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Suivez-nous sur les Réseaux Sociaux</CardTitle>
                    <CardDescription>
                      Restez informé de nos actualités et réalisations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start h-auto py-4"
                      size="lg"
                    >
                      <Link
                        href="https://www.facebook.com/people/%C3%B2-d%C3%A9barras/61580426932164/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="w-6 h-6 mr-3 text-[#1877F2]" />
                        <div className="text-left">
                          <p className="font-semibold">Facebook</p>
                          <p className="text-xs text-muted-foreground">
                            Suivez nos interventions et actualités
                          </p>
                        </div>
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start h-auto py-4"
                      size="lg"
                    >
                      <Link
                        href="https://www.instagram.com/odebarras/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-6 h-6 mr-3 text-[#E4405F]" />
                        <div className="text-left">
                          <p className="font-semibold">Instagram</p>
                          <p className="text-xs text-muted-foreground">
                            Découvrez nos réalisations en images
                          </p>
                        </div>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Intervention Rapide
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Besoin d'une intervention urgente ? Nous pouvons
                      intervenir sous 48h dans toute la Corse.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Devis gratuit et sans engagement
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Intervention rapide
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Service professionnel
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
