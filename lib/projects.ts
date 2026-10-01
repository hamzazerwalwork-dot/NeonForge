export type Project = {
  slug: string;
  title: string;
  description: string;
  /** Paths under /public — first image is used as the grid thumbnail. */
  images: string[];
  tags?: string[];
};

// Edit this list to add more projects: drop screenshots into
// /public/images/projects/ and reference them here.
export const projects: Project[] = [
  {
    slug: "barbershop",
    title: "Modern Barbershop — Rabat",
    description:
      "A multilingual (Arabic, English, French) website for a barbershop in Rabat, with an online booking flow where clients pick a date, time slot, and leave their details directly on the site.",
    images: [
      "/images/projects/barbershop-1.jpg",
      "/images/projects/barbershop-2.jpg",
      "/images/projects/barbershop-3.jpg",
    ],
    tags: ["Web Development", "UI/UX", "Booking system"],
  },
  {
    slug: "diamond-nest-decoration",
    title: "Diamond Nest Decoration",
    description:
      "A luxury interior-decoration studio site with an Arabic RTL layout, a project catalog organized by category, and an elegant dark gold visual identity. Client branding and contact details are blurred here for privacy.",
    images: [
      "/images/projects/diamondnest-1.jpg",
      "/images/projects/diamondnest-2.jpg",
      "/images/projects/diamondnest-3.jpg",
    ],
    tags: ["Web Development", "UI/UX", "RTL / Arabic"],
  },
];
