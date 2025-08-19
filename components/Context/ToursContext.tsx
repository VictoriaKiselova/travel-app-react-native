import { ITour } from "@/types/tours";
import { createContext, useContext, useState } from "react";
import { Filters } from "@/types/filters";
interface IToursContext {
  allTours: ITour[];
  setAllTours: React.Dispatch<React.SetStateAction<ITour[]>>;
  tours: ITour[];
  setTours: React.Dispatch<React.SetStateAction<ITour[]>>;
  category: string;
  setCategory: (value: string) => void;
  tourDetails: ITour | null;
  setTourDetails: (value: ITour | null) => void;
  isloading: boolean;
  setIsLoading: (value: boolean) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  isFavorites: ITour[];
  setIsFavorites: React.Dispatch<React.SetStateAction<ITour[]>>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  isFilterApplied: boolean;
  setIsFilterApplied: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenFilters: boolean;
  setIsOpenFilters: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [allTours, setAllTours] = useState<ITour[]>([]);
  const [tours, setTours] = useState<ITour[]>([]);
  const [category, setCategory] = useState<string>("all");
  const [tourDetails, setTourDetails] = useState<ITour | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFavorites, setIsFavorites] = useState<ITour[]>([]);
  const [filters, setFilters] = useState<Filters>({
    country: null,
    nutrition: null,
    peopleCount: null,
    childrenCount: null,
    nights: null,
    transport: null,
  });
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);

  return (
    <ToursContext.Provider
      value={{
        allTours,
        setAllTours,
        tours,
        setTours,
        category,
        setCategory,
        tourDetails,
        setTourDetails,
        isloading,
        setIsLoading,
        searchQuery,
        setSearchQuery,
        isFavorites,
        setIsFavorites,
        filters,
        setFilters,
        isFilterApplied,
        setIsFilterApplied,
        isOpenFilters,
        setIsOpenFilters,
      }}>
      {children}
    </ToursContext.Provider>
  );
};
export default ToursProvider;
