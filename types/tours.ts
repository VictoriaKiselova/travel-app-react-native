export interface FoodOption {
  _id: string;
  type: string;
  description: string;
  extraPrice: number;
}
export interface Review {
  _id: string;
  user: string;
  rating: number;
  comment: string;
}

export interface Hotel {
  _id: string;
  name: string;
  stars: number;
  foodOptions: FoodOption[];
  images: string[];
  description: string;
  distanceToCenter: number;
  amenities: string[];
}

export interface Tour {
  _id: string;
  tourTitle: string;
  country: string;
  city: string;
  tourDescription: string;
  duration: number;
  offsetDays: number;
  startDate: string;
  endDate: string;
  price: number;
  childDiscount: number;
  transport: string;
  departureCity: string[];
  hotel: Hotel;
  reviews: Review[];
  bookingsCount: number;
  views: number;
  lastBookedAt: string;
  slug: string;
  tourCode: string;
  seoTitle: string;
  seoDescription: string;
  tourImages: string[];
  program: any[];
}

export type TourList = Tour[];
