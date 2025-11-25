import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Ò Debarras",
  description:
    "Consultez les conditions générales d'utilisation du site Ò Debarras, spécialiste du débarras en Corse. Informations sur l'utilisation de notre site web et de nos services.",
  openGraph: {
    title: "Conditions Générales d'Utilisation | Ò Debarras",
    description:
      "Conditions d'utilisation du site Ò Debarras, entreprise de débarras en Corse.",
    url: "https://www.odebarras-corse.fr/cgu",
    siteName: "Ò Debarras",
    locale: "fr_FR",
    type: "website",
  },
};

export default function CGUPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Conditions Générales d'Utilisation
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                1. Présentation du site
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site <strong>www.odebarras-corse.fr</strong> (ci-après "le
                Site") est édité par la société <strong>Ò Debarras</strong>,
                spécialisée dans les services de débarras en Corse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                L'accès et l'utilisation du Site sont soumis aux présentes
                Conditions Générales d'Utilisation (CGU). En naviguant sur ce
                site, vous acceptez sans réserve les présentes CGU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">2. Accès au site</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le Site est accessible gratuitement à tout utilisateur disposant
                d'un accès à Internet. Tous les frais supportés par
                l'utilisateur pour accéder au service (matériel informatique,
                logiciels, connexion Internet, etc.) sont à sa charge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ò Debarras met en œuvre tous les moyens raisonnables à sa
                disposition pour assurer un accès de qualité au Site, mais n'est
                tenu à aucune obligation d'y parvenir. Ò Debarras ne peut être
                tenu responsable de tout dysfonctionnement du réseau ou des
                serveurs ou de tout autre événement échappant au contrôle
                raisonnable qui empêcherait ou dégraderait l'accès au Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                3. Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La structure générale du Site, ainsi que les textes, graphiques,
                images, sons et vidéos le composant, sont la propriété exclusive
                de Ò Debarras ou de ses partenaires. Toute représentation et/ou
                reproduction et/ou exploitation partielle ou totale des contenus
                et services proposés par le Site, par quelque procédé que ce
                soit, sans l'autorisation préalable et par écrit de Ò Debarras
                est strictement interdite et serait susceptible de constituer
                une contrefaçon au sens des articles L. 335-2 et suivants du
                Code de la propriété intellectuelle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Les marques et logos figurant sur le Site sont des marques
                déposées de Ò Debarras ou de tiers ayant autorisé Ò Debarras à
                les utiliser. Toute reproduction totale ou partielle de ces
                marques ou de ces logos effectuée à partir des éléments du Site
                sans l'autorisation expresse de Ò Debarras est prohibée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                4. Données personnelles
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les informations recueillies via les formulaires présents sur le
                Site font l'objet d'un traitement informatique destiné à Ò
                Debarras pour la gestion des demandes de contact et de devis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Conformément à la loi "Informatique et Libertés" du 6 janvier
                1978 modifiée et au Règlement Général sur la Protection des
                Données (RGPD), vous disposez d'un droit d'accès, de
                rectification, de suppression et d'opposition aux données
                personnelles vous concernant. Vous pouvez exercer ces droits en
                nous contactant à l'adresse email :{" "}
                <strong>odebarras2b@gmail.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                5. Cookies et traceurs
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le Site peut être amené à vous demander l'acceptation de cookies
                à des fins statistiques et d'amélioration de l'expérience
                utilisateur. Un cookie ne permet pas de vous identifier
                personnellement. Il enregistre des informations relatives à la
                navigation de votre ordinateur sur le Site (les pages que vous
                avez consultées, la date et l'heure de la consultation, etc.)
                que nous pourrons lire lors de vos visites ultérieures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez refuser l'enregistrement de cookies en configurant
                votre navigateur selon les modalités détaillées sur le site de
                la CNIL :{" "}
                <a
                  href="https://www.cnil.fr"
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
                Les informations diffusées sur le Site sont présentées à titre
                indicatif et général sans valeur contractuelle. Malgré les mises
                à jour régulières, Ò Debarras ne peut être tenu responsable de
                la modification des dispositions administratives et juridiques
                survenant après la publication. De même, Ò Debarras ne peut être
                tenu responsable de l'utilisation et de l'interprétation de
                l'information contenue dans ce site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ò Debarras ne pourra être tenu responsable de dommages matériels
                liés à l'utilisation du Site. De plus, l'utilisateur du Site
                s'engage à accéder au Site en utilisant un matériel récent, ne
                contenant pas de virus et avec un navigateur de dernière
                génération mis à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                7. Liens hypertextes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le Site peut contenir des liens hypertextes vers d'autres sites
                présents sur le réseau Internet. Les liens vers ces autres
                ressources vous font quitter le Site. Il est possible de créer
                un lien vers la page de présentation de ce Site sans
                autorisation expresse de Ò Debarras. Aucune autorisation ou
                demande d'information préalable ne peut être exigée par Ò
                Debarras à l'égard d'un site qui souhaite établir un lien vers
                le Site. Il convient toutefois d'afficher ce Site dans une
                nouvelle fenêtre du navigateur.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cependant, Ò Debarras se réserve le droit de demander la
                suppression d'un lien s'il estime que le site source ne respecte
                pas les règles ainsi définies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                8. Droit applicable et juridiction compétente
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes CGU sont régies par le droit français. En cas de
                litige et à défaut d'accord amiable, le litige sera porté devant
                les tribunaux français conformément aux règles de compétence en
                vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">
                9. Modification des CGU
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ò Debarras se réserve le droit de modifier les présentes CGU à
                tout moment. L'utilisateur s'engage donc à les consulter
                régulièrement. Ces CGU ont été mises à jour le 24 novembre 2025.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 mt-8">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant les présentes CGU, vous pouvez
                nous contacter :
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
