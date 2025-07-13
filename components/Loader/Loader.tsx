import { ActivityIndicator, MD2Colors } from "react-native-paper";
import GradientLayout from "../GradientLayout/GradientLayout";

export default function Loader() {
  return (
    <GradientLayout>
      <ActivityIndicator
        animating={true}
        color={MD2Colors.blue800}
        className="p-3"
      />
    </GradientLayout>
  );
}
