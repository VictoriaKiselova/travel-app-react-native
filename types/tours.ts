export interface IFoodOption {
  _id: string;
  type: string;
  description: string;
  extraPrice: number;
}
export interface IReview {
  _id: string;
  user: string;
  rating: number;
  comment: string;
}

export interface IHotel {
  _id: string;
  name: string;
  stars: number;
  foodOptions: IFoodOption[];
  images: string[];
  description: string;
  distanceToCenter: number;
  amenities: string[];
}

export interface ITour {
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
  hotel: IHotel;
  reviews: IReview[];
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

export type TourList = ITour[];
