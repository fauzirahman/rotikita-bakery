import type {
  Category,
  Feature,
  FooterColumn,
  NavLink,
  Product,
  Testimonial,
} from "@/types/home";

export const siteInfo = {
  name: "RotiKita Bakery",
  hours: "Setiap hari, 07.00–21.00 WIB",
  hoursShort: "Setiap hari · 07.00–21.00 WIB",
  whatsappDisplay: "0812-3456-7890",
  whatsappUrl: "https://wa.me/6281234567890",
  email: "halo@rotikita.id",
  // TODO: replace with the real social profile URLs.
  instagramUrl: "#",
  facebookUrl: "#",
  // Fixed on purpose: reading the current date in a server component is not
  // allowed to be prerendered when `cacheComponents` is enabled.
  copyrightYear: 2026,
} as const;

export const navLinks: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Semua Roti", href: "/products" },
  { label: "Kategori", href: "/categories" },
  { label: "Promo", href: "/promo" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Kontak", href: "/contact" },
];

export const categories: Category[] = [
  { id: "roti-manis", name: "Roti Manis", image: "/images/categories/roti-manis.png" },
  { id: "roti-tawar", name: "Roti Tawar", image: "/images/categories/roti-tawar.png" },
  { id: "croissant", name: "Croissant", image: "/images/categories/croissant.png" },
  { id: "donat", name: "Donat", image: "/images/categories/donat.png" },
  { id: "cake", name: "Cake", image: "/images/categories/cake.png" },
  { id: "cookies", name: "Cookies", image: "/images/categories/cookies.png" },
];

export const bestSellers: Product[] = [
  {
    id: "roti-cokelat",
    name: "Roti Cokelat",
    price: 12000,
    rating: 4.9,
    reviewCount: 128,
    image: "/images/products/roti-cokelat.png",
    badge: "Terlaris",
  },
  {
    id: "croissant-butter",
    name: "Croissant Butter",
    price: 18000,
    rating: 4.9,
    reviewCount: 96,
    image: "/images/products/croissant-butter.png",
    badge: "Favorit",
  },
  {
    id: "roti-keju",
    name: "Roti Keju",
    price: 15000,
    rating: 4.8,
    reviewCount: 84,
    image: "/images/products/roti-keju.png",
  },
  {
    id: "donat-cokelat",
    name: "Donat Cokelat",
    price: 10000,
    rating: 4.9,
    reviewCount: 112,
    image: "/images/products/donat-cokelat.png",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    price: 20000,
    rating: 4.9,
    reviewCount: 76,
    image: "/images/products/cinnamon-roll.png",
  },
  {
    id: "roti-sobek",
    name: "Roti Sobek",
    price: 25000,
    rating: 4.8,
    reviewCount: 64,
    image: "/images/products/roti-sobek.png",
  },
];

export const features: Feature[] = [
  {
    id: "fresh",
    title: "Selalu Fresh Setiap Hari",
    description: "Dipanggang setiap pagi agar selalu hangat, lembut, dan nikmat.",
    icon: "/icons/feature-fresh.svg",
  },
  {
    id: "quality",
    title: "Bahan Berkualitas Premium",
    description: "Bahan pilihan terbaik, tanpa kompromi untuk setiap gigitan.",
    icon: "/icons/feature-quality.svg",
  },
  {
    id: "price",
    title: "Harga Bersahabat",
    description: "Rasa istimewa dengan harga yang ramah untuk semua.",
    icon: "/icons/feature-price.svg",
  },
  {
    id: "delivery",
    title: "Pengiriman Cepat",
    description: "Dikirim dengan hati-hati, tiba segar di depan pintu Anda.",
    icon: "/icons/feature-delivery.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "dinda-putri",
    quote:
      "Rotinya lembut banget dan cokelatnya melimpah! Sekarang jadi sarapan favorit sekeluarga. Selalu pesan lagi.",
    name: "Dinda Putri",
    city: "Jakarta",
    avatar: "/images/testimonials/dinda-putri.png",
  },
  {
    id: "rizky-pratama",
    quote:
      "Croissant-nya renyah di luar, lembut di dalam. Rasanya seperti di bakery premium, tapi harganya tetap bersahabat.",
    name: "Rizky Pratama",
    city: "Bandung",
    avatar: "/images/testimonials/rizky-pratama.png",
  },
  {
    id: "sarah-wijaya",
    quote:
      "Pesan untuk acara kantor, semuanya suka! Pengirimannya cepat dan rotinya sampai dalam kondisi fresh. Recommended!",
    name: "Sarah Wijaya",
    city: "Tangerang",
    avatar: "/images/testimonials/sarah-wijaya.png",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Jelajahi",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Semua Roti", href: "/products" },
      { label: "Kategori", href: "/categories" },
      { label: "Promo", href: "/promo" },
      { label: "Tentang Kami", href: "/about" },
      { label: "Kontak", href: "/contact" },
    ],
  },
  {
    title: "Layanan Pelanggan",
    links: [
      { label: "Cara Pemesanan", href: "/products" },
      { label: "Pengiriman", href: "/contact" },
      { label: "FAQ", href: "/contact#faq" },
      { label: "Kebijakan Privasi", href: "/contact#faq" },
      { label: "Syarat & Ketentuan", href: "/promo#syarat" },
    ],
  },
];
