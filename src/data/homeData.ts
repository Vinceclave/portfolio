import { FaArrowRight } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface SkillCard {
  title: string;
  description: string;
}

export interface HeroSection {
  title: string;
  highlightedText: string;
  description: string;
  buttons: {
    primary: {
      text: string;
      url: string;
    };
    secondary: {
      text: string;
      url: string;
      icon: IconType;
    };
  };
}

export interface HomeData {
  hero: HeroSection;
  skills: SkillCard[];
}

export const homeData: HomeData = {
  hero: {
    title: "Crafting",
    highlightedText: "digital breakthroughs",
    description: "Where innovation meets pixel-perfect design ✨ Transforming your boldest ideas into digital realities that captivate, engage, and scale. Ready to disrupt the digital landscape together?",
    buttons: {
      primary: {
        text: "Explore Works",
        url: "/projects"
      },
      secondary: {
        text: "Let's Connect",
        url: "/contact",
        icon: FaArrowRight
      }
    }
  },  skills: [
    {
      title: "Digital Alchemy",
      description: "Turning complex code into elegant digital solutions with lightning-fast performance. Your vision, my blueprint — together we build the extraordinary."
    },
    {
      title: "Aesthetic Innovation",
      description: "Crafting interfaces that don't just look stunning but feel intuitive. Every pixel matters in creating the journey your users will fall in love with."
    },
    {
      title: "Cross-Platform Magic",
      description: "Seamlessly bridging the gap between devices and platforms. Your digital presence, everywhere your audience is — without compromise."
    }
  ]
}
