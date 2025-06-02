export interface NavigationLink {
  name: string;
  path: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    name: 'Home',
    path: '#home'
  },
  {
    name: 'About',
    path: '#about'
  },
  {
    name: 'Projects',
    path: '#projects'
  },
  {
    name: 'Contact',
    path: '#contact'
  }
]
