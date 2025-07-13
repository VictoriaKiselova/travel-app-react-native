import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { useEffect, useRef } from "react";
import {
  Modal,
  ScrollView,
  Image,
  Pressable,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ModalImgProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
  listImagesHotel: string[];
};

export default function ModalImg({
  modalVisible,
  setModalVisible,
  selectedImage,
  setSelectedImage,
  listImagesHotel,
}: ModalImgProps) {

  const scrollRef = useRef<ScrollView>(null);
  const screenWidth = Dimensions.get("window").width;
  const handleModalClose = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };
  const selectedIndex = selectedImage
    ? listImagesHotel.indexOf(selectedImage)
    : 0;

  useEffect(() => {
    if (modalVisible && scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({
          x: selectedIndex * screenWidth,
          animated: false,
        });
      }, 100);
    }
  }, [modalVisible]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleModalClose}>
        <View
          style={{
            backgroundColor: "rgba(20, 20, 20, 0.7)",
          }}
          className="flex-1 justify-center items-center">
          <ScrollView
            horizontal
            pagingEnabled
            ref={scrollRef}
            showsHorizontalScrollIndicator={false}>
            {listImagesHotel.map((img, i) => (
              <View
                key={i}
                className="justify-center items-center"
                style={{ width: screenWidth }}>
                <Image
                  source={{ uri: img }}
                  style={{
                    width: screenWidth * 0.96,
                    height: 300,
                    borderRadius: 10,
                  }}
                />
              </View>
            ))}
          </ScrollView>
          <Pressable
            onPress={handleModalClose}
            className="absolute top-28 right-5 bg-black bg-black-400 rounded-full p-2 z-10">
            <MaterialCommunityIcons name="close" size={24} color="white" />
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
