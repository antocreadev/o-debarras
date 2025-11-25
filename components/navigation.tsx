"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isSectorsDropdownOpen, setIsSectorsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectorsDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sectorsDropdownRef.current &&
        !sectorsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSectorsDropdownOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    {
      name: "Particuliers",
      href: "/services/particuliers",
      description: "Maisons, appartements, caves, greniers",
    },
    {
      name: "Syndrome de Diogène",
      href: "/services/diogene",
      description: "Intervention spécialisée et discrète",
    },
    {
      name: "Professionnels",
      href: "/services/professionnels",
      description: "Locaux commerciaux, bureaux, entrepôts",
    },
  ];

  const sectors = [
    {
      name: "Collectivités & Administrations",
      href: "/secteurs/collectivites-administrations",
    },
    { name: "Sinistres & Assurances", href: "/secteurs/sinistres-assurances" },
    { name: "Successions & Notaires", href: "/secteurs/successions-notaires" },
    { name: "Agences Immobilières", href: "/secteurs/agences-immobilieres" },
    {
      name: "Mandataires Judiciaires",
      href: "/secteurs/mandataires-judiciaires",
    },
    {
      name: "Administrateurs d'Immeubles",
      href: "/secteurs/administrateurs-immeubles",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-lg shadow-lg"
          : "bg-background/80 backdrop-blur-md"
      } border-b border-border/50 gpu-accelerated`}
      style={{ willChange: isScrolled ? "auto" : "transform" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Retour à l'accueil"
          >
            <Image
              src="/logo.svg"
              alt="O Ò Débarras - debarras en Corse"
              width={112}
              height={112}
              className="h-28 w-28 object-contain transition-transform group-hover:scale-110"
            />
            <div className="text-2xl font-bold text-foreground tracking-tight relative right-6">
              Ò DÉBARRAS
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative group"
            >
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>

            {/* Custom Dropdown for Services */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative group flex items-center gap-1"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[320px] rounded-lg shadow-xl border border-border overflow-hidden z-50"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="p-3">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="block rounded-lg p-3 hover:bg-primary/10 transition-colors"
                          style={{ color: "#000000" }}
                        >
                          <div
                            className="text-sm font-bold mb-1"
                            style={{ color: "#000000" }}
                          >
                            {service.name}
                          </div>
                          <div
                            className="text-xs opacity-70"
                            style={{ color: "#000000" }}
                          >
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Custom Dropdown for Secteurs */}
            <div className="relative" ref={sectorsDropdownRef}>
              <button
                onClick={() => setIsSectorsDropdownOpen(!isSectorsDropdownOpen)}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative group flex items-center gap-1"
              >
                Secteurs
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isSectorsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>

              <AnimatePresence>
                {isSectorsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[280px] rounded-lg shadow-xl border border-border overflow-hidden z-50"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="p-2">
                      {sectors.map((sector) => (
                        <Link
                          key={sector.href}
                          href={sector.href}
                          onClick={() => setIsSectorsDropdownOpen(false)}
                          className="block rounded-lg p-3 hover:bg-primary/10 transition-colors"
                          style={{ color: "#000000" }}
                        >
                          <div
                            className="text-sm font-medium leading-tight"
                            style={{ color: "#000000" }}
                          >
                            {sector.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/realisations"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative group"
            >
              Réalisations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>

            <Link
              href="/valeurs"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative group"
            >
              Nos Valeurs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Devis Gratuit
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="lg:hidden py-4 space-y-4 border-t border-border overflow-hidden"
            >
              <Link
                href="/"
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>

              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileServicesOpen(!isMobileServicesOpen);
                  }}
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-primary transition-colors"
                  aria-expanded={isMobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMobileServicesOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSectorsOpen(!isSectorsOpen);
                  }}
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-primary transition-colors"
                  aria-expanded={isSectorsOpen}
                >
                  Secteurs
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isSectorsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isSectorsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {sectors.map((sector) => (
                      <Link
                        key={sector.href}
                        href={sector.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsSectorsOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {sector.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/realisations"
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Réalisations
              </Link>

              <Link
                href="/valeurs"
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nos Valeurs
              </Link>
              <Link
                href="/contact"
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Phone className="w-4 h-4 mr-2" />
                  Devis Gratuit
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
