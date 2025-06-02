export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Clara Wilson',
    position: 'Project Manager',
    company: 'TechVision',
    content: 'Vince delivered our project with exceptional attention to detail. His ability to translate complex requirements into elegant solutions made our collaboration seamless. Highly recommended for anyone seeking a skilled and reliable developer!',
    avatar: '/images/testimonials/avatar-1.jpg',
    rating: 5
  },
  {
    id: 'testimonial-2',
    name: 'Alex Rodriguez',
    position: 'CTO',
    company: 'InnovateX',
    content: 'Working with Vince was a game-changer for our startup. He not only built a beautiful website but also provided valuable insights that improved our overall digital strategy. His technical expertise combined with business understanding is rare to find.',
    avatar: '/images/testimonials/avatar-2.jpg',
    rating: 5
  },
  {
    id: 'testimonial-3',
    name: 'Michelle Park',
    position: 'Creative Director',
    company: 'DesignHub',
    content: 'Vince\'s work surpassed our expectations. He understood our creative vision and translated it into a functional website that captures our brand perfectly. The animations and attention to user experience really set his work apart.',
    avatar: '/images/testimonials/avatar-3.jpg',
    rating: 5
  }
]
