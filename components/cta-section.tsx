import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Besoin d'un débarras ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
            Contactez-nous dès maintenant pour un devis gratuit et sans
            engagement. Intervention rapide dans toute la Corse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+33784717301">
                <Phone className="w-5 h-5 mr-2" />
                Appelez-nous
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="mailto:odebarras2b@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Envoyez un email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
