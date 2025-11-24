export const corsicaRegions = [
  {
    slug: "castagniccia-casinca",
    name: "Castagniccia-Casinca",
    corseName: "Castagniccia Mare e Monti",
    description:
      "La Castagniccia et la Casinca, terres de châtaigniers et de traditions",
    cities: [
      { slug: "vescovato", name: "Vescovato", corseName: "Vescuvatu" },
      {
        slug: "penta-di-casinca",
        name: "Penta-di-Casinca",
        corseName: "A Penta di Casinca",
      },
    ],
  },
  {
    slug: "calvi-balagne",
    name: "Calvi-Balagne",
    corseName: "A Balagna",
    description: "La Balagne, jardin de la Corse entre mer et montagne",
    cities: [
      { slug: "calvi", name: "Calvi", corseName: "Calvi" },
      { slug: "ile-rousse", name: "L'Île-Rousse", corseName: "Isula Rossa" },
    ],
  },
  {
    slug: "centre-corse",
    name: "Centre Corse",
    corseName: "Centru di Corsica",
    description: "Corte et le centre de la Corse, cœur historique de l'île",
    cities: [{ slug: "corte", name: "Corte", corseName: "Corti" }],
  },
  {
    slug: "ouest-corse",
    name: "Ouest Corse",
    corseName: "Spelunca Liamone",
    description:
      "L'ouest corsica, entre calanques de Piana et vallées sauvages",
    cities: [
      { slug: "piana", name: "Piana", corseName: "Piana" },
      { slug: "peri", name: "Peri", corseName: "Peri" },
    ],
  },
  {
    slug: "fiumorbu-castellu",
    name: "Fium'Orbu Castellu",
    corseName: "Fium'Orbu Castellu",
    description: "La Corse Orientale, entre mer et montagne",
    cities: [
      { slug: "ghisonaccia", name: "Ghisonaccia", corseName: "Ghisunaccia" },
      {
        slug: "prunelli-di-fiumorbo",
        name: "Prunelli-di-Fiumorbo",
        corseName: "Prunelli di Fiumorbu",
      },
    ],
  },
  {
    slug: "pays-ajaccien",
    name: "Pays Ajaccien",
    corseName: "Pays d'Aiacciu",
    description: "Ajaccio et sa région, cité impériale et capitale de la Corse",
    cities: [
      { slug: "ajaccio", name: "Ajaccio", corseName: "Aiacciu" },
      {
        slug: "bastelicaccia",
        name: "Bastelicaccia",
        corseName: "Bastilichja",
      },
      { slug: "alata", name: "Alata", corseName: "Alata" },
      { slug: "afa", name: "Afa", corseName: "Afa" },
      { slug: "pietrosella", name: "Pietrosella", corseName: "Petrusedda" },
      {
        slug: "coti-chiavari",
        name: "Coti-Chiavari",
        corseName: "Coti è Chjavari",
      },
    ],
  },
  {
    slug: "pays-bastiais",
    name: "Pays Bastiais",
    corseName: "Pays di Bastia",
    description: "Autour de Bastia, capitale économique de la Haute-Corse",
    cities: [
      { slug: "bastia", name: "Bastia", corseName: "Bastia" },
      { slug: "borgo", name: "Borgo", corseName: "Borgu" },
      { slug: "biguglia", name: "Biguglia", corseName: "Biguglia" },
      { slug: "lucciana", name: "Lucciana", corseName: "Lucciana" },
      { slug: "furiani", name: "Furiani", corseName: "Furiani" },
      {
        slug: "ville-di-pietrabugno",
        name: "Ville-di-Pietrabugno",
        corseName: "Ville di Petrabugnu",
      },
      {
        slug: "olmeta-di-capocorso",
        name: "Olmeta-di-Capocorso",
        corseName: "Olmeta di Capicorsu",
      },
    ],
  },
  {
    slug: "sartenais-valinco",
    name: "Sartenais-Valinco",
    corseName: "Sartinesi Valincu Taravu",
    description: "Le Sartenais Valinco Taravo, terre de caractère au sud-ouest",
    cities: [
      { slug: "sartene", name: "Sartène", corseName: "Sartè" },
      { slug: "propriano", name: "Propriano", corseName: "Prupià" },
      {
        slug: "serra-di-ferro",
        name: "Serra-di-Ferro",
        corseName: "Serra di Ferru",
      },
      {
        slug: "petreto-bicchisano",
        name: "Petreto-Bicchisano",
        corseName: "Pitretu è Bicchisgià",
      },
    ],
  },
  {
    slug: "sud-corse",
    name: "Sud Corse",
    corseName: "Alta Rocca",
    description:
      "Sud Corse - Alta Rocca et côte des nacres, entre aiguilles de Bavella et plages paradisiaques",
    cities: [
      {
        slug: "porto-vecchio",
        name: "Porto-Vecchio",
        corseName: "Portivechju",
      },
      { slug: "bonifacio", name: "Bonifacio", corseName: "Bunifaziu" },
      { slug: "lecci", name: "Lecci", corseName: "Liccè" },
      { slug: "zonza", name: "Zonza", corseName: "Zonza" },
    ],
  },
];

export const allCities = corsicaRegions.flatMap((region) =>
  region.cities.map((city) => ({
    ...city,
    region: region.name,
    regionSlug: region.slug,
    regionCorseName: region.corseName,
  }))
);
