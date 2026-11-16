import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_avis_source" AS ENUM('google', 'pagesjaunes', 'facebook', 'autre');
  CREATE TABLE "chantiers_chiffres" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"valeur" varchar NOT NULL
  );
  
  CREATE TABLE "chantiers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"titre" varchar NOT NULL,
  	"lieu" varchar NOT NULL,
  	"texte" varchar,
  	"avant_id" integer NOT NULL,
  	"apres_id" integer NOT NULL,
  	"instagram" varchar,
  	"afficher" boolean DEFAULT true,
  	"ordre" numeric DEFAULT 10,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "avis" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"auteur" varchar NOT NULL,
  	"note" numeric DEFAULT 5 NOT NULL,
  	"texte" varchar NOT NULL,
  	"quand" varchar,
  	"source" "enum_avis_source" DEFAULT 'google',
  	"afficher" boolean DEFAULT true,
  	"ordre" numeric DEFAULT 10,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "services_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"texte" varchar NOT NULL
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"titre" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"avant_id" integer,
  	"apres_id" integer,
  	"lien" varchar,
  	"ordre" numeric DEFAULT 10,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "zones_communes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"nom" varchar NOT NULL,
  	"nom_corse" varchar,
  	"slug" varchar NOT NULL,
  	"lat" numeric,
  	"lon" numeric
  );
  
  CREATE TABLE "zones" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"nom" varchar NOT NULL,
  	"nom_corse" varchar,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "medias" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"_objectkey" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_vignette_url" varchar,
  	"sizes_vignette_width" numeric,
  	"sizes_vignette_height" numeric,
  	"sizes_vignette_mime_type" varchar,
  	"sizes_vignette_filesize" numeric,
  	"sizes_vignette_filename" varchar
  );
  
  CREATE TABLE "utilisateurs_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "utilisateurs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"nom" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"chantiers_id" integer,
  	"avis_id" integer,
  	"services_id" integer,
  	"zones_id" integer,
  	"medias_id" integer,
  	"utilisateurs_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"utilisateurs_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "infos_chiffres" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"valeur" varchar NOT NULL,
  	"libelle" varchar NOT NULL
  );
  
  CREATE TABLE "infos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"telephone" varchar DEFAULT '07 84 71 73 01' NOT NULL,
  	"email" varchar DEFAULT 'odebarras2b@gmail.com' NOT NULL,
  	"ville" varchar DEFAULT 'Bastia',
  	"accroche" varchar DEFAULT 'Intervention rapide, discrète et respectueuse dans toute la Corse.',
  	"instagram" varchar DEFAULT 'https://www.instagram.com/odebarras/',
  	"facebook" varchar,
  	"avis_google" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "chantiers_chiffres" ADD CONSTRAINT "chantiers_chiffres_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chantiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "chantiers" ADD CONSTRAINT "chantiers_avant_id_medias_id_fk" FOREIGN KEY ("avant_id") REFERENCES "public"."medias"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "chantiers" ADD CONSTRAINT "chantiers_apres_id_medias_id_fk" FOREIGN KEY ("apres_id") REFERENCES "public"."medias"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_points" ADD CONSTRAINT "services_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_avant_id_medias_id_fk" FOREIGN KEY ("avant_id") REFERENCES "public"."medias"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_apres_id_medias_id_fk" FOREIGN KEY ("apres_id") REFERENCES "public"."medias"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zones_communes" ADD CONSTRAINT "zones_communes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zones"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "utilisateurs_sessions" ADD CONSTRAINT "utilisateurs_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."utilisateurs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_chantiers_fk" FOREIGN KEY ("chantiers_id") REFERENCES "public"."chantiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_avis_fk" FOREIGN KEY ("avis_id") REFERENCES "public"."avis"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_zones_fk" FOREIGN KEY ("zones_id") REFERENCES "public"."zones"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_medias_fk" FOREIGN KEY ("medias_id") REFERENCES "public"."medias"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_utilisateurs_fk" FOREIGN KEY ("utilisateurs_id") REFERENCES "public"."utilisateurs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_utilisateurs_fk" FOREIGN KEY ("utilisateurs_id") REFERENCES "public"."utilisateurs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "infos_chiffres" ADD CONSTRAINT "infos_chiffres_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."infos"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "chantiers_chiffres_order_idx" ON "chantiers_chiffres" USING btree ("_order");
  CREATE INDEX "chantiers_chiffres_parent_id_idx" ON "chantiers_chiffres" USING btree ("_parent_id");
  CREATE INDEX "chantiers_avant_idx" ON "chantiers" USING btree ("avant_id");
  CREATE INDEX "chantiers_apres_idx" ON "chantiers" USING btree ("apres_id");
  CREATE INDEX "chantiers_updated_at_idx" ON "chantiers" USING btree ("updated_at");
  CREATE INDEX "chantiers_created_at_idx" ON "chantiers" USING btree ("created_at");
  CREATE INDEX "avis_updated_at_idx" ON "avis" USING btree ("updated_at");
  CREATE INDEX "avis_created_at_idx" ON "avis" USING btree ("created_at");
  CREATE INDEX "services_points_order_idx" ON "services_points" USING btree ("_order");
  CREATE INDEX "services_points_parent_id_idx" ON "services_points" USING btree ("_parent_id");
  CREATE INDEX "services_avant_idx" ON "services" USING btree ("avant_id");
  CREATE INDEX "services_apres_idx" ON "services" USING btree ("apres_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "zones_communes_order_idx" ON "zones_communes" USING btree ("_order");
  CREATE INDEX "zones_communes_parent_id_idx" ON "zones_communes" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "zones_slug_idx" ON "zones" USING btree ("slug");
  CREATE INDEX "zones_updated_at_idx" ON "zones" USING btree ("updated_at");
  CREATE INDEX "zones_created_at_idx" ON "zones" USING btree ("created_at");
  CREATE INDEX "medias_updated_at_idx" ON "medias" USING btree ("updated_at");
  CREATE INDEX "medias_created_at_idx" ON "medias" USING btree ("created_at");
  CREATE UNIQUE INDEX "medias_filename_idx" ON "medias" USING btree ("filename");
  CREATE INDEX "medias_sizes_vignette_sizes_vignette_filename_idx" ON "medias" USING btree ("sizes_vignette_filename");
  CREATE INDEX "utilisateurs_sessions_order_idx" ON "utilisateurs_sessions" USING btree ("_order");
  CREATE INDEX "utilisateurs_sessions_parent_id_idx" ON "utilisateurs_sessions" USING btree ("_parent_id");
  CREATE INDEX "utilisateurs_updated_at_idx" ON "utilisateurs" USING btree ("updated_at");
  CREATE INDEX "utilisateurs_created_at_idx" ON "utilisateurs" USING btree ("created_at");
  CREATE UNIQUE INDEX "utilisateurs_email_idx" ON "utilisateurs" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_chantiers_id_idx" ON "payload_locked_documents_rels" USING btree ("chantiers_id");
  CREATE INDEX "payload_locked_documents_rels_avis_id_idx" ON "payload_locked_documents_rels" USING btree ("avis_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_zones_id_idx" ON "payload_locked_documents_rels" USING btree ("zones_id");
  CREATE INDEX "payload_locked_documents_rels_medias_id_idx" ON "payload_locked_documents_rels" USING btree ("medias_id");
  CREATE INDEX "payload_locked_documents_rels_utilisateurs_id_idx" ON "payload_locked_documents_rels" USING btree ("utilisateurs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_utilisateurs_id_idx" ON "payload_preferences_rels" USING btree ("utilisateurs_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "infos_chiffres_order_idx" ON "infos_chiffres" USING btree ("_order");
  CREATE INDEX "infos_chiffres_parent_id_idx" ON "infos_chiffres" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "chantiers_chiffres" CASCADE;
  DROP TABLE "chantiers" CASCADE;
  DROP TABLE "avis" CASCADE;
  DROP TABLE "services_points" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "zones_communes" CASCADE;
  DROP TABLE "zones" CASCADE;
  DROP TABLE "medias" CASCADE;
  DROP TABLE "utilisateurs_sessions" CASCADE;
  DROP TABLE "utilisateurs" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "infos_chiffres" CASCADE;
  DROP TABLE "infos" CASCADE;
  DROP TYPE "public"."enum_avis_source";`)
}
