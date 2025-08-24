import { IUser } from "@/types/user";
import { createContext, useContext, useState } from "react";

interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  modalAuthVisible: boolean;
  setModalAuthVisible: (visible: boolean) => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context error");
  }
  return context;
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [modalAuthVisible, setModalAuthVisible] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        modalAuthVisible,
        setModalAuthVisible,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
