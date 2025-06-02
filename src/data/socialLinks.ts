import { FaGithub, FaLinkedinIn, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
    label: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/vinceclave',
    icon: FaGithub,
    label: 'Follow me on GitHub'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vince-datanagan-725a44365/',
    icon: FaLinkedinIn,
    label: 'Connect with me on LinkedIn'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/vince.clave.94',
    icon: FaFacebookF,
    label: 'Follow me on Facebook'
  },
  {
    name: 'Contact',
    url: 'mailto:contact@beansdev.com',
    icon: FaEnvelope,
    label: 'Email me'
  }
]



