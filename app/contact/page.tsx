"use client";

import type React from "react";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    propertyType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    // Handle form submission
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Contact</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Demandez Votre Devis Gratuit
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et
              sans engagement. Notre équipe vous répond sous 24h.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informations de Contact</CardTitle>
                  <CardDescription>
                    Plusieurs moyens de nous joindre
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a
                        href="tel:+33495123456"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        +33 7 84 71 73 01
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
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
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Zone d'intervention</p>
                      <p className="text-sm text-muted-foreground">
                        Toute la Corse
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
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
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Intervention Rapide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Besoin d'une intervention urgente ? Nous pouvons intervenir
                    sous 48h dans toute la Corse.
                  </p>
                  <Button className="w-full" variant="default">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler Maintenant
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Formulaire de Contact</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire et nous vous recontacterons
                    rapidement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          placeholder="Jean Dupont"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="06 12 34 56 78"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jean.dupont@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">Type de service *</Label>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, serviceType: value })
                          }
                        >
                          <SelectTrigger id="serviceType">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="particulier">
                              Débarras Particulier
                            </SelectItem>
                            <SelectItem value="diogene">
                              Syndrome de Diogène
                            </SelectItem>
                            <SelectItem value="professionnel">
                              Débarras Professionnel
                            </SelectItem>
                            <SelectItem value="succession">
                              Succession
                            </SelectItem>
                            <SelectItem value="sinistre">Sinistre</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Type de bien</Label>
                        <Select
                          value={formData.propertyType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, propertyType: value })
                          }
                        >
                          <SelectTrigger id="propertyType">
                            <SelectValue placeholder="Sélectionnez un type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="appartement">
                              Appartement
                            </SelectItem>
                            <SelectItem value="maison">Maison</SelectItem>
                            <SelectItem value="cave">Cave/Grenier</SelectItem>
                            <SelectItem value="garage">Garage</SelectItem>
                            <SelectItem value="bureau">Bureau/Local</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Décrivez votre projet *</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez-nous votre besoin en débarras : surface, type d'objets, délais souhaités, etc."
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1"
                        required
                      />
                      <Label
                        htmlFor="consent"
                        className="text-sm text-muted-foreground font-normal"
                      >
                        J'accepte que mes données soient utilisées pour me
                        recontacter concernant ma demande. *
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Envoyer ma Demande
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Champs obligatoires. Nous nous engageons à répondre sous
                      24h.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
