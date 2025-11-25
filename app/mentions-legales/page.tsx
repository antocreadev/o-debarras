import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Mentions Légales | Ò Debarras",
  description:
    "Mentions légales du site Ò Debarras, entreprise spécialisée dans le débarras en Corse. Informations légales sur l'éditeur, l'hébergeur et les droits de propriété intellectuelle.",
  openGraph: {
    title: "Mentions Légales | Ò Debarras",
    description:
      "Informations légales du site Ò Debarras, spécialiste du débarras en Corse.",
    url: "https://www.odebarras.com/mentions-legales",
    siteName: "Ò Debarras",
    locale: "fr_FR",
    type: "website",
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                1. Éditeur du site
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site <strong>www.odebarras.com</strong> est édité par :
              </p>
              <ul className="list-none text-muted-foreground leading-relaxed ml-0 space-y-2">
                <li>
                  <strong>Raison sociale :</strong> Ò Debarras (CAPURAN KEVIN)
                </li>
                <li>
                  <strong>Forme juridique :</strong> Entrepreneur individuel
                </li>
                <li>
                  <strong>SIREN :</strong> 892 485 087
                </li>
                <li>
                  <strong>SIRET (siège) :</strong> 892 485 087 00019
                </li>
                <li>
                  <strong>Numéro de TVA :</strong> FR66892485087
                </li>
                <li>
                  <strong>Code NAF/APE :</strong> 38.32Z (Récupération de
                  déchets triés)
                </li>
                <li>
                  <strong>RCS :</strong> 892 485 087 R.C.S. Bastia
                </li>
                <li>
                  <strong>Adresse :</strong> Les Jadins de Ville, Ville-di-Pietrabugno, 20200 Bastia, France
                </li>
                <li>
                  <strong>Email :</strong>{" "}
                  <a
                    href="mailto:odebarras2b@gmail.com"
                    className="text-primary hover:underline"
                  >
                    odebarras2b@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a
                    href="tel:+33784717301"
                    className="text-primary hover:underline"
                  >
                    +33 7 84 71 73 01
                  </a>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Directeur de la publication :</strong> CAPURAN Kevin,
                dirigeant de Ò Debarras
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Activité principale :</strong> Débarras d'encombrants et
                recyclage (vide maison, etc.)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                2. Hébergement du site
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site <strong>www.odebarras.com</strong> est hébergé par :
              </p>
              <ul className="list-none text-muted-foreground leading-relaxed ml-0 space-y-2">
                <li>
                  <strong>Hébergeur :</strong> Vercel Inc.
                </li>
                <li>
                  <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina,
                  CA 91723, États-Unis
                </li>
                <li>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.vercel.com
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                3. Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                L'ensemble du contenu du site <strong>www.odebarras.com</strong>{" "}
                (structure, textes, logos, images, vidéos, etc.) est la
                propriété exclusive de Ò Debarras, sauf mentions particulières.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toute reproduction, distribution, modification, adaptation,
                retransmission ou publication, même partielle, de ces différents
                éléments est strictement interdite sans l'accord exprès par
                écrit de Ò Debarras. Cette représentation ou reproduction, par
                quelque procédé que ce soit, constitue une contrefaçon
                sanctionnée par les articles L.335-2 et suivants du Code de la
                propriété intellectuelle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le non-respect de cette interdiction constitue une contrefaçon
                pouvant engager la responsabilité civile et pénale du
                contrefacteur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                4. Protection des données personnelles
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi "Informatique et Libertés" du 6 janvier 1978
                modifiée, vous disposez d'un droit d'accès, de rectification, de
                suppression et d'opposition aux données personnelles vous
                concernant.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Les informations recueillies via les formulaires du site sont
                destinées exclusivement à Ò Debarras pour le traitement de vos
                demandes de contact, de devis ou d'information. Vos données ne
                sont en aucun cas transmises à des tiers sans votre
                consentement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour exercer vos droits, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
                <li>
                  Par email :{" "}
                  <a
                    href="mailto:odebarras2b@gmail.com"
                    className="text-primary hover:underline"
                  >
                    odebarras2b@gmail.com
                  </a>
                </li>
                <li>
                  Par téléphone :{" "}
                  <a
                    href="tel:+33784717301"
                    className="text-primary hover:underline"
                  >
                    +33 7 84 71 73 01
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">5. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site <strong>www.odebarras.com</strong> peut utiliser des
                cookies pour améliorer l'expérience utilisateur et réaliser des
                statistiques de visite. Les cookies sont de petits fichiers
                textes stockés sur votre appareil lors de votre navigation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez à tout moment désactiver les cookies dans les
                paramètres de votre navigateur. Cependant, cela peut affecter
                certaines fonctionnalités du site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour plus d'informations sur les cookies et leur gestion,
                consultez le site de la CNIL :{" "}
                <a
                  href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.cnil.fr
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                6. Responsabilité
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ò Debarras s'efforce d'assurer l'exactitude et la mise à jour
                des informations diffusées sur ce site, dont elle se réserve le
                droit de corriger, à tout moment et sans préavis, le contenu.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toutefois, Ò Debarras ne peut garantir l'exactitude,
                l'exhaustivité ou l'actualité des informations mises à
                disposition sur ce site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En conséquence, Ò Debarras décline toute responsabilité pour
                toute imprécision, inexactitude ou omission portant sur des
                informations disponibles sur le site, ainsi que pour tout
                dommage résultant d'une intrusion frauduleuse d'un tiers ayant
                entraîné une modification des informations mises à disposition
                sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                7. Liens hypertextes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site <strong>www.odebarras.com</strong> peut contenir des
                liens vers d'autres sites internet. Ò Debarras n'exerce aucun
                contrôle sur ces sites et décline toute responsabilité quant à
                leur contenu ou à leur politique de confidentialité.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La création de liens hypertextes vers le site{" "}
                <strong>www.odebarras.com</strong> nécessite l'autorisation
                préalable de Ò Debarras. Pour toute demande, veuillez nous
                contacter à l'adresse{" "}
                <a
                  href="mailto:odebarras2b@gmail.com"
                  className="text-primary hover:underline"
                >
                  odebarras2b@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                8. Droit applicable et juridiction compétente
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige et à défaut d'accord amiable, le
                litige sera porté devant les tribunaux français selon les règles
                de compétence en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                9. Crédits et réalisation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site <strong>www.odebarras.com</strong> a été conçu et
                développé par{" "}
                <a
                  href="https://antocrea.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Antò Creative Developer - Anthony Menghi - antocreadev - antocrea.dev
                </a>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Technologies utilisées : Next.js, React, TypeScript, Tailwind
                CSS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant les mentions légales ou le site
                en général, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
                <li>
                  Par email :{" "}
                  <a
                    href="mailto:odebarras2b@gmail.com"
                    className="text-primary hover:underline"
                  >
                    odebarras2b@gmail.com
                  </a>
                </li>
                <li>
                  Par téléphone :{" "}
                  <a
                    href="tel:+33784717301"
                    className="text-primary hover:underline"
                  >
                    +33 7 84 71 73 01
                  </a>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <em>Dernière mise à jour : 24 novembre 2025</em>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
