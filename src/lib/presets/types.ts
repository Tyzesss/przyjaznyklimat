export type GalleryItem = {
  image: string;
  alt: string;
  caption?: string;
};

export type ReviewItem = {
  name?: string;
  text: string;
  source?: "google";
  rating?: number;
  publishedAt?: string;
  relativeTime?: string;
  postedAt?: string;
};

export type SitePreset = {
  id: string;
  label: string;
  siteName: string;
  companyLegalName: string;
  siteCity: string;
  cityLocative: string;
  siteDefaultUrl: string;
  email: string;
  phoneDisplay: string;
  phoneE164: string;
  address: string;
  addressStreet: string;
  addressCity: string;
  addressPostal: string;
  mapsQuery: string;
  hours?: string;
  nip: string;
  regon: string;
  siteTitle: string;
  siteDescription?: string;
  siteKeywords: string;
  logoUrl?: string;
  heroImage?: string;
  ogImage: string;
  googleRating?: number;
  googleReviewCount?: number;
  googlePlaceId?: string;
  googleReviewsUrl?: string;
  googleWriteReviewUrl?: string;
  gallery: GalleryItem[];
  reviews: ReviewItem[];
};
