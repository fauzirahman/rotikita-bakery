export type NavLink = {
  label: string;
  href: string;
};

export type Category = {
  id: string;
  name: string;
  image: string;
  description?: string;
  productCount?: number;
};

export type Product = {
  id: string;
  name: string;
  /** Price in Rupiah. */
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  description?: string;
  categoryId?: string;
  originalPrice?: number;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  city: string;
  avatar: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};
