export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  features: string[];
  status: "Active" | "Beta" | "New";
}

export const products: Product[] = [
  {
    id: "zetap",
    name: "ZeTap",
    tagline: "Professional Digital Business Profiles",
    description:
      "ZeTap is a premium digital business profile platform that allows professionals and businesses to share their contact information, social links, portfolio, services, and payment details instantly through a single digital profile.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    url: "https://zetap.capsloop.com",
    tags: ["Digital Profile", "Business", "Networking"],
    features: [
      "Instant NFC & QR Sharing",
      "Custom Business Profile",
      "Portfolio & Social Links",
      "Contact & Payment Integration",
    ],
    status: "Active",
  },
  {
    id: "marriage-digital-card",
    name: "Marriage Digital Card",
    tagline: "Beautiful Digital Invitations for Your Special Day",
    description:
      "Create elegant and personalized digital wedding invitations that bring your celebration to life with beautiful designs, couple details, wedding events, RSVP options, and shareable experiences—all in one modern digital card.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    url: "#products",
    tags: ["Wedding", "Digital Invitation", "Events"],
    features: [
      "Personalized Couple & Wedding Details",
      "Beautiful Wedding Themes & Designs",
      "Event Schedule & Venue Information",
      "Digital RSVP & Guest Management",
    ],
    status: "Beta",
  },
];
