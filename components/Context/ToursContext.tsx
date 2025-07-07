import { Tour } from "@/types/tours";
import { createContext, useContext, useState} from "react";

interface IToursContext {
  tours: Tour[] | null;
  setTours: React.Dispatch<React.SetStateAction<Tour[] | null>>;
  category: string;
  setCategory: (value: string) => void;
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
  const [tours, setTours] = useState<Tour[] | null>(null);
  const [category, setCategory] = useState<string>("popular");

  return (
    <ToursContext.Provider value={{ tours, setTours, category, setCategory }}>
      {children}
    </ToursContext.Provider>
  );
};
export default ToursProvider;
