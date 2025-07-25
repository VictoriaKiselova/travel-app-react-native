import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import AuthRequiredModal from "../AuthRequiredModal/AuthRequiredModal";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthContext();
  const [modalVisible, setModalVisible] = useState(false);

  if (!isLoggedIn) {
    return (
      <AuthRequiredModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
