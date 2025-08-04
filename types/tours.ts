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

export type TransferMethod = {
  [transportType: string]: {
    departureCity: string[];
    transportPrice: number;
  };
};

export type IHotel = {
  _id: string;
  name: string;
  stars: number;
  priceDay: number;
  hotelDescription: string;
  amenities: string[];
  distanceToCenter: number;
  foodOptions: IFoodOption[];
  images: string[];
};

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
  childDiscount: number;
  bookingsCount: number;
  lastBookedAt: string;
  views: number;
  seoTitle: string;
  seoDescription: string;
  slug: string;
  tourCode: string;
  transferType: TransferMethod[];
  hotel: IHotel;
  reviews: IReview[];
}

export type TourList = ITour[];
