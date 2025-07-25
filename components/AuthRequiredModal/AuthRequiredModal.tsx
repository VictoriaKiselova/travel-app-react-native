import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { Modal, Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  home: undefined;
  favorites: undefined;
  profile: undefined;
  signup: undefined;
  signin: undefined;
};
type AuthRequiredModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

export default function AuthRequiredModal({
  modalVisible,
  setModalVisible,
}: AuthRequiredModalProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleCheckoutToAuth = () => {
    navigation.navigate("signin");
    setModalVisible(false);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            backgroundColor: "rgba(20, 20, 20, 0.75)",
          }}
          className="flex-1 justify-center items-center px-2">
          <View className="w-full relative bg-gradient-200 rounded-2xl px-[32px] py-[32px]">
            <Text className="text-black-500 font-[400] text-[14px] text-center flex-shrink tracking-wide leading-tight mb-[20px]">
              Ця сторінка доступна лише зареєстрованим користувачам.{"\n"}
              Увійдіть або створіть акаунт, щоб продовжити.
            </Text>
            <Pressable
              onPress={handleCheckoutToAuth}
              className="w-full py-3 px-4 bg-blue-400 rounded-xl active:bg-blue-300">
              <Text className="font-[400] text-[14px] text-center flex-shrink tracking-wide leading-tight text-white-100">
                Увійти
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setModalVisible(false)}
              className="absolute top-1 right-1 p-2 z-10">
              <MaterialCommunityIcons name="close" size={24} color="black" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
