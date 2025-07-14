import { siReact, siNextdotjs, siTailwindcss, siGreensock, siExpo, siFlutter, siGooglemarketingplatform, siFigma, siTestinglibrary, siCanva, siStorybook, siSketch, siJest, siCypress, siSelenium, siMocha, siVitest } from "simple-icons/icons";
import WebDev from "@/components/animation/WebDev";
import AppDev from "@/components/animation/AppDev";
import DigitalMarketing from "@/components/animation/DigitalMarketing";
import Designer from "@/components/animation/Designer";
import Testing from "@/components/animation/Testing";


export const iconSlugMap: Record<string, any> = {
  React: siReact,
  "Tailwind CSS": siTailwindcss,
  Gsap: siGreensock,
  "Next.js": siNextdotjs,
  "React Native": siReact,
  "Nativewind CSS": siTailwindcss,
  Expo: siExpo,
  Flutter: siFlutter,
  "Google Marketing Platform": siGooglemarketingplatform,
  Figma: siFigma,
  "Testing Library": siTestinglibrary,
  Canva: siCanva,
  Storybook: siStorybook,
  Sketch: siSketch,
  Jest: siJest,
  Cypress: siCypress,
  Selenium: siSelenium,
  Mocha: siMocha,
  Vitest: siVitest,
};

export const animationMap: Record<string, React.FC> = {
  "web-development": WebDev,
  "app-development": AppDev,
  "marketing": DigitalMarketing,
  "design": Designer,
  "qa-and-devops": Testing,
};

export const projectCategories = [
  {
    slug: "web-development",
    name: "Web Development",
    description: "All about modern web development, frameworks, and stacks.",
    projects: [
      {
        title: "ReactJs Development",
        summary: "Building scalable web apps with React.",
        image: "/assests/images.jpeg",
      },
      {
        title: "NodeJs Development",
        summary: "Backend APIs and services with Node.js.",
        image: "/assests/images2.jpeg",
      },
    ],
    techStack: [
        {
            title: "React",
            description: "JavaScript library for building user interfaces."
        },
        {
            title: "Tailwind CSS",
            description: "Utility-first CSS framework for rapid UI development."
        },
        {
            title: "Gsap",
            description: "High-performance JavaScript animation library."
        },
        {
            title: "Next.js",
            description: "React framework for server-side rendering and static site generation."
        },
    ],
  },
  {
    slug: "app-development",
    name: "App Development",
    description: "Mobile and cross-platform app solutions.",
    projects: [
      {
        title: "React Native App",
        summary: "Cross-platform mobile apps with React Native.",
        image: "/assests/images3.jpeg",
      },
      {
        title: "Flutter App",
        summary: "Beautiful apps with Flutter.",
        image: "/assests/images4.jpeg",
      },
    ],
    techStack: [
        {
            title: "React Native",
            description: "JavaScript library for building user interfaces."
        },
        {
            title: "Nativewind CSS",
            description: "Utility-first CSS framework for rapid UI development."
        },
        {
            title: "Expo",
            description: "High-performance JavaScript animation library."
        },
        {
            title: "Flutter",
            description: "UI toolkit for building natively compiled applications."
        },
    ],
  },
  {
    slug: "marketing",
    name: "Digital Marketing",
    description: "SEO, SEM, and online marketing strategies.",
    projects: [
      {
        title: "Google Ads Campaign",
        summary: "Maximize reach with Google Ads.",
        image: "/assests/images3.jpeg",
      },
      {
        title: "Social Media Marketing",
        summary: "Engage audiences on social platforms.",
        image: "/assests/images4.jpeg",
      },
    ],
    techStack: [
        {
            title: "Google Marketing Platform",
            description: "Comprehensive marketing and analytics tools."
        },
    ],
  },
  {
    slug: "design",
    name: "Design",
    description: "UI/UX, graphic, and product design solutions.",
    projects: [
      {
        title: "Adobe XD Project",
        summary: "Prototyping and design with Adobe XD.",
        image: "/assests/images3.jpeg",
      },
      {
        title: "Figma Design",
        summary: "Collaborative interface design with Figma.",
        image: "/assests/images4.jpeg",
      },
    ],
    techStack: [
        {
            title: "Figma",
            description: "Collaborative interface design tool."
        },
        {
            title: "Canva",
            description: "Online design tool for quick graphics and social media assets."
        },
        {
            title: "Storybook",
            description: "UI component development and documentation."
        },
        {
            title: "Sketch",
            description: "Popular vector design tool for UI/UX (macOS only)."
        },
    ],
  },
  {
    slug: "qa-and-devops",
    name: "Testing",
    description: "Quality assurance and automated testing.",
    projects: [
      {
        title: "Unit Testing",
        summary: "Automated unit tests for reliability.",
        image: "/assests/images3.jpeg",
      },
      {
        title: "Integration Testing",
        summary: "End-to-end testing for robust systems.",
        image: "/assests/images4.jpeg",
      },
    ],
    techStack: [
        {
            title: "Testing Library",
            description: "Popular library for React testing."
        },
        {
            title: "Jest",
            description: "Delightful JavaScript testing framework."
        },
        {
            title: "Cypress",
            description: "Fast, easy and reliable testing for anything that runs in a browser."
        },
        {
            title: "Selenium",
            description: "Browser automation for testing web applications."
        },
        {
            title: "Mocha",
            description: "Feature-rich JavaScript test framework running on Node.js."
        },
        {
            title: "Vitest",
            description: "Blazing fast unit test framework powered by Vite."
        },
    ],
  },
];
