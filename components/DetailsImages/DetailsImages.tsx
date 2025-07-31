import { useState } from "react";
import { View, Image, ScrollView, Pressable } from "react-native";
import ModalImg from "@/components/ModalImg/ModalImg";

type HotelImagesProps = {
  listImagesHotel?: string[];
};

export default function DetailsImages({ listImagesHotel }: HotelImagesProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const firstImage = listImagesHotel?.[0];
  const otherImages = listImagesHotel?.slice(1);

  const handleModalOpen = (firstImage: string) => {
    setSelectedImage(firstImage);
    setModalVisible(true);
  };

  return (
    <View className="mb-3">
      {firstImage && (
        <Pressable onPress={() => handleModalOpen(firstImage)}>
          <Image
            source={{ uri: firstImage }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 12,
              marginBottom: 16,
              alignSelf: "center",
            }}
          />
        </Pressable>
      )}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {otherImages?.map((image, i) => (
          <Pressable key={i} onPress={() => handleModalOpen(image)}>
            <Image
              source={{ uri: image }}
              style={{
                width: 90,
                height: 80,
                borderRadius: 12,
                marginRight: 8,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>

      {modalVisible && (
        <ModalImg
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          listImagesHotel={listImagesHotel || []}
        />
      )}
    </View>
  );
}
