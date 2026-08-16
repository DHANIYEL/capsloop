export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  features: string[];
  status: 'Active' | 'Beta' | 'New';
}

export const products: Product[] = [
  {
    id: "zetap",
    name: "ZeTap",
    tagline: "Professional Digital Business Cards",
    description: "ZeTap is a premium contactless digital business card platform that allows professionals to share their contact information, social links, portfolio, and payment details instantly with a single tap.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", // placeholder dark abstract image
    url: "https://zetap.capsloop.com",
    tags: ["NFC Tech", "Digital Identity", "Networking"],
    features: [
      "Instant NFC & QR Sharing",
      "Custom Profile Designer",
      "Real-time Analytics & Views",
      "CRM & Contact Integrations"
    ],
    status: "Active"
  },
  {
    id: "capsflow",
    name: "CapsFlow",
    tagline: "Seamless Workflow Automation for Creators",
    description: "CapsFlow is a modern workspace automation tool that connects your designs, repositories, and feedback loops into one centralized, visual pipeline designed for high-performance development and design teams.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // dashboard/analytics image
    url: "#products", // stays on the page or anchor link
    tags: ["DevOps", "Automation", "Collaboration"],
    features: [
      "Git & Figma Webhooks Sync",
      "Automated Client Review Gates",
      "AI-driven Project Estimations",
      "Multi-channel Slack & Email Alerts"
    ],
    status: "Beta"
  }
];
