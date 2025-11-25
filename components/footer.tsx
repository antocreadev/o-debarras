import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { corsicaRegions, allCities } from "@/lib/corsica-data";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="logo Ò Débarras - debarras en Corse- o debarras"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
                style={{ filter: "invert(1) brightness(2)" }}
              />
              <h3 className="text-2xl font-bold  relative right-6">
                Ò DÉBARRAS
              </h3>
            </div>
            <p className="text-background/80 text-sm leading-relaxed ">
              Votre partenaire de confiance pour tous vos besoins de débarras en
              Corse depuis 2020.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link
                  href="/services"
                  className="hover:text-background transition-colors"
                >
                  Tous nos Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services#particuliers"
                  className="hover:text-background transition-colors"
                >
                  Débarras Particuliers
                </Link>
              </li>
              <li>
                <Link
                  href="/services#diogene"
                  className="hover:text-background transition-colors"
                >
                  Syndrome de Diogène
                </Link>
              </li>
              <li>
                <Link
                  href="/services#professionnels"
                  className="hover:text-background transition-colors"
                >
                  Débarras Professionnels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link
                  href="/realisations"
                  className="hover:text-background transition-colors"
                >
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/valeurs"
                  className="hover:text-background transition-colors"
                >
                  Nos Valeurs
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="hover:text-background transition-colors"
                >
                  Notre Processus
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="hover:text-background transition-colors"
                >
                  Avis Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a
                  href="tel:+33495123456"
                  className="hover:text-background transition-colors"
                >
                  +33 7 84 71 73 01
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a
                  href="mailto:odebarras2b@gmail.com"
                  className="hover:text-background transition-colors"
                >
                  odebarras2b@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Toute la Corse</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/people/%C3%B2-d%C3%A9barras/61580426932164/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/odebarras/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 pb-8">
          <h4 className="font-bold mb-4 text-center">
            Nos Secteurs d'Intervention
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-background/80">
            <Link
              href="/secteurs/collectivites-administrations"
              className="hover:text-background transition-colors text-center"
            >
              Collectivités
            </Link>
            <Link
              href="/secteurs/sinistres-assurances"
              className="hover:text-background transition-colors text-center"
            >
              Assurances
            </Link>
            <Link
              href="/secteurs/successions-notaires"
              className="hover:text-background transition-colors text-center"
            >
              Notaires
            </Link>
            <Link
              href="/secteurs/agences-immobilieres"
              className="hover:text-background transition-colors text-center"
            >
              Agences Immo
            </Link>
            <Link
              href="/secteurs/mandataires-judiciaires"
              className="hover:text-background transition-colors text-center"
            >
              Mandataires
            </Link>
            <Link
              href="/secteurs/administrateurs-immeubles"
              className="hover:text-background transition-colors text-center"
            >
              Syndics
            </Link>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 pb-8">
          <h4 className="font-bold mb-6 text-center">
            Nos Zones d'Intervention en Corse
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-background/80 max-w-4xl mx-auto mb-8">
            {corsicaRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/zones/${region.slug}`}
                className="hover:text-background transition-colors text-center p-2 rounded hover:bg-background/10"
              >
                <div className="font-medium">{region.name}</div>
                <div className="text-xs text-background/60 italic">
                  {region.corseName}
                </div>
              </Link>
            ))}
          </div>

          <h4 className="font-bold mb-4 text-center mt-8">
            Nos Villes d'Intervention
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs text-background/70 max-w-6xl mx-auto">
            {allCities.map((city) => (
              <Link
                key={city.slug}
                href={`/zones/villes/${city.slug}`}
                className="hover:text-background transition-colors text-center p-1.5 rounded hover:bg-background/5"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} Ò Débarras. Tous droits réservés.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="/mentions-legales"
              className="hover:text-background transition-colors"
            >
              Mentions Légales
            </Link>
            <span>•</span>
            <Link
              href="/cgu"
              className="hover:text-background transition-colors"
            >
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
