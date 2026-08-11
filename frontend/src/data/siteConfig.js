export const siteConfig = {
  name: 'The Wedding Bells',
  shortName: 'Wedding Bells',
  tagline: 'Crafting Your Forever Moments',
  description:
    "Your luxury partner for unforgettable weddings. From majestic venues to gourmet catering and exquisite decor, we bring your dream wedding to life.",
  phone: '+91 7039933565',
  // Digits only with country code — wa.me breaks on "+91 …" formatting
  whatsapp: '917039933565',
  email: 'hello@theweddingbellsbytimsis.co.in',
  address: 'Mumbai, India',
  hours: 'Mon – Sat: 10:00 AM – 7:30 PM',
  social: {
    instagram: 'https://www.instagram.com/weddingbells_tiimsii?igsh=MWkzZ2RzYXE1aWtxeg==',
    youtube: 'http://www.youtube.com/@Weddingbells_tiimsii',
    facebook: 'https://facebook.com',
  },
  stats: [
    { label: 'Happy Couples', value: '500+' },
    { label: 'Venues Partnered', value: '50+' },
    { label: 'Years of Experience', value: '10' },
    { label: 'Events Styled', value: '1,200+' },
  ],
}

/** Digits-only phone for wa.me (no +, spaces, or dashes). */
export function whatsappNumber(raw = siteConfig.whatsapp) {
  return String(raw).replace(/\D/g, '')
}

/** Build a wa.me link. Pass optional pre-filled message text. */
export function whatsappUrl(text) {
  const base = `https://wa.me/${whatsappNumber()}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
