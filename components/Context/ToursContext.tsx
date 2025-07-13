import { Tour } from "@/types/tours";
import { createContext, useContext, useState } from "react";

interface IToursContext {
  tours: Tour[] | null;
  setTours: React.Dispatch<React.SetStateAction<Tour[] | null>>;
  category: string;
  setCategory: (value: string) => void;
  tourDetails: Tour | null;
  setTourDetails: (value: Tour | null) => void;
  isloading: boolean;
  setIsLoading: (value: boolean) => void;
}

const ToursContext = createContext<IToursContext | null>(null);

export function useToursContext() {
  const context = useContext(ToursContext);
  if (!context) {
    throw new Error("Context error");
  }
  return context;
}

const ToursProvider = ({ children }: { children: React.ReactNode }) => {
  const [tours, setTours] = useState<Tour[] | null>([]);
  const [category, setCategory] = useState<string>("all");
  const [tourDetails, setTourDetails] = useState<Tour | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  return (
    <ToursContext.Provider
      value={{
        tours,
        setTours,
        category,
        setCategory,
        tourDetails,
        setTourDetails,
        isloading,
        setIsLoading,
      }}>
      {children}
    </ToursContext.Provider>
  );
};
export default ToursProvider;
