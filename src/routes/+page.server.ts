import type { PortfolioItem } from "$lib/models/PortfolioItem";
const freelancing_experience = [
  {
    title: "Login and Registration",
    url: "https://login-registration-plum.vercel.app/login",
    description: "A login and registration page implemented in React, Remix, TailwindUI, Firebase Auth, and Firestore, using Vercel as hosting",
    image_src: "signup.png",
    timeline: "< 24 hours"
  },
  {
    title: "LapInv",
    description: "A laptop inventory management system for Wetzel County School district, managing hundreds of student records daily.",
    image_src: "lapinv.png",
    timeline: "2 months"
  },
  {
    title: "Firebase CMS",
    description: "Developed from start to finish in less than a month, a fully featured CMS hosted in Firebase.",
    image_src: "fbcms.png",
    timeline: "3 weeks"
  },
] as Array<PortfolioItem>;

const open_source_experience = [
  {
    title: "CardPlace",
    description: "A NextJS, TailwindUI, and Prisma online shop utilizing Stripe.",
    image_src: "cardplace.png",
    url: "https://github.com/SpBills/cardplace",
  },
  {
    title: "Radical",
    description: "An open source Rust-based headless content management system.",
    image_src: "https://avatars.githubusercontent.com/u/77416525",
    url: "https://github.com/Rust-CMS",
  },
  {
    title: "Creative Solutions Group",
    description: "A team of eight software developers for Cedarville University- of which I am the team lead and tech lead.",
    image_src: "https://github.com/CreativeSolutionsGroup/.github/raw/main/csg-social-logo.jpg",
    url: "https://github.com/CreativeSolutionsGroup",
  },
  {
    title: "Rapit",
    description: "A journey in self education and compiler theory.",
    url: "https://github.com/SpBills/Rapit",
  },
  {
    title: "Personal Website",
    description: "A SvelteKit website with heavy use of TailwindCSS, animations, and other cool technologies.",
    image_src: "this.png",
    url: "https://github.com/SpBills/personal-portfolio",
  },
] as Array<PortfolioItem>;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    freelancing_experience,
    open_source_experience
  };
}