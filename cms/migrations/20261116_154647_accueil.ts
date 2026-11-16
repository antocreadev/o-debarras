import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "accueil_etapes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"titre" varchar NOT NULL,
  	"texte" varchar NOT NULL
  );
  
  CREATE TABLE "accueil_publics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"titre" varchar NOT NULL,
  	"texte" varchar
  );
  
  CREATE TABLE "accueil" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_titre" varchar DEFAULT 'Ò Débarras' NOT NULL,
  	"hero_texte" varchar DEFAULT 'Intervention rapide, discrète et respectueuse dans toute la Corse.' NOT NULL,
  	"hero_photo_id" integer,
  	"bouton_devis" varchar DEFAULT 'Devis Gratuit',
  	"bouton_contact" varchar DEFAULT 'Nous Contacter',
  	"etapes_titre" varchar DEFAULT 'Comment ça marche ?',
  	"etapes_texte" varchar DEFAULT 'Un processus simple et transparent en 3 étapes pour votre tranquillité d''esprit',
  	"services_titre" varchar DEFAULT 'Des solutions pour tous',
  	"services_texte" varchar DEFAULT 'Que vous soyez particulier ou professionnel, nous avons la solution adaptée à votre besoin',
  	"realisations_titre" varchar DEFAULT 'Notre expertise en action',
  	"realisations_texte" varchar DEFAULT 'Découvrez nos interventions de débarras en Corse. Avant/après, chaque projet raconte une histoire.',
  	"realisations_encadre_titre" varchar DEFAULT 'Des projets réussis',
  	"realisations_encadre" varchar DEFAULT 'Particuliers, professionnels, syndrome de Diogène... Nous avons l''expérience pour gérer tous types de débarras avec professionnalisme et discrétion.',
  	"publics_titre" varchar DEFAULT 'À qui s''adressent nos services ?',
  	"publics_texte" varchar DEFAULT 'Nous mettons notre expertise en débarras au service de divers secteurs, allant des particuliers aux entreprises, des collectivités aux administrations, pour offrir des solutions complètes et adaptées à chaque besoin en Corse.',
  	"avis_titre" varchar DEFAULT 'Avis Google',
  	"avis_texte" varchar DEFAULT 'Découvrez les retours de nos clients sur Google',
  	"zones_titre" varchar DEFAULT 'Intervention dans toute la Corse',
  	"zones_texte" varchar DEFAULT 'De Bastia à Bonifacio, de Calvi à Porto-Vecchio, nous intervenons sur l''ensemble du territoire corse pour tous vos besoins de débarras.',
  	"cta_titre" varchar DEFAULT 'Besoin d''un débarras ?',
  	"cta_texte" varchar DEFAULT 'Contactez-nous dès maintenant pour un devis gratuit et sans engagement. Intervention rapide dans toute la Corse.',
  	"pied_texte" varchar DEFAULT 'Votre partenaire de confiance pour tous vos besoins de débarras en Corse depuis 2020.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "chantiers" ADD COLUMN "accueil" boolean DEFAULT false;
  ALTER TABLE "accueil_etapes" ADD CONSTRAINT "accueil_etapes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."accueil"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "accueil_publics" ADD CONSTRAINT "accueil_publics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."accueil"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "accueil" ADD CONSTRAINT "accueil_hero_photo_id_medias_id_fk" FOREIGN KEY ("hero_photo_id") REFERENCES "public"."medias"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "accueil_etapes_order_idx" ON "accueil_etapes" USING btree ("_order");
  CREATE INDEX "accueil_etapes_parent_id_idx" ON "accueil_etapes" USING btree ("_parent_id");
  CREATE INDEX "accueil_publics_order_idx" ON "accueil_publics" USING btree ("_order");
  CREATE INDEX "accueil_publics_parent_id_idx" ON "accueil_publics" USING btree ("_parent_id");
  CREATE INDEX "accueil_hero_photo_idx" ON "accueil" USING btree ("hero_photo_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "accueil_etapes" CASCADE;
  DROP TABLE "accueil_publics" CASCADE;
  DROP TABLE "accueil" CASCADE;
  ALTER TABLE "chantiers" DROP COLUMN "accueil";`)
}
