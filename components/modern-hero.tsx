"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated background elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl gpu-accelerated"
          style={{ willChange: "transform" }}
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl gpu-accelerated"
          style={{ willChange: "transform" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="inline-block pt-4 md:pt-0"
            >
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold ">
                Plus de 5 ans d'expérience en Corse
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight text-balance"
            >
              Débarras{" "}
              <span className="text-primary relative">
                Professionnel
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.8,
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1.0],
                  }}
                  className="absolute bottom-2 left-0 h-3 bg-accent/30 -z-10"
                  style={{ willChange: "width" }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="text-xl md:text-2xl text-muted-foreground max-w-xl text-pretty leading-relaxed"
            >
              De la simple machine à laver au syndrome de Diogène. Intervention
              rapide, discrète et respectueuse dans toute la{" "}
              <span className="font-bold">Corse</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all group"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-primary/5 bg-transparent"
              >
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Nous Contacter
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="flex items-center gap-8 pt-4"
            ></motion.div>
          </motion.div>

          {/* Right content - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
            className="relative"
          >
            {/* Éléments décoratifs vert foncé - Sans rotation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="absolute -top-12 -right-12 w-48 h-48 border-4 border-emerald-800/30 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="absolute -bottom-16 -left-16 w-56 h-56 border-4 border-emerald-700/20 rounded-full"
            />

            {/* Carrés décoratifs - Sans mouvement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="absolute top-8 -left-8 w-28 h-28 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 rounded-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.0,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="absolute bottom-16 -right-10 w-32 h-32 bg-gradient-to-br from-emerald-800/30 to-emerald-700/10 rounded-3xl"
            />

            {/* Points décoratifs - Sans pulsation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{
                delay: 1.1,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="absolute top-1/4 -right-6 w-8 h-8 bg-emerald-700 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="absolute bottom-1/3 -left-4 w-6 h-6 bg-emerald-800 rounded-full"
            />

            {/* Image container avec effet de halo vert */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="relative z-10"
            >
              <img
                src="/image-1.png"
                alt="O Ò Débarras - débarras en Corse"
                className="w-full max-w-2xl mx-auto drop-shadow-2xl relative z-20"
              />
            </motion.div>

            {/* Halo vert foncé - Statique */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/10 blur-3xl rounded-full"
            />

            {/* Cercle secondaire - Statique */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-emerald-800/20 blur-2xl rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2 gpu-accelerated"
          style={{ willChange: "transform" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="w-1.5 h-3 bg-muted-foreground/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
