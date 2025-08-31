import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import GradientLayout from "@/components/GradientLayout/GradientLayout";
import { useToursContext } from "@/components/Context/ToursContext";
import GoBack from "@/components/GoBack/GoBack";
import FormBooking from "@/components/FormBooking/FormBooking";

export default function Booking() {
  const { tourDetails } = useToursContext();

  return (
    <GradientLayout>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView
          contentContainerStyle={{ padding: 1 }}
          keyboardShouldPersistTaps="handled">
          <View style={{ flex: 1, padding: 16 }}>
            <GoBack />
            <Text className="text-black-500 text-center font-semibold text-[16px] mb-1">
              {tourDetails?.tourTitle}
            </Text>
            <Text className="text-black-500 text-center font-[400] text-[12px] italic mb-2">
              {tourDetails?.tourDescription}
            </Text>

            <View className="flex-row items-start gap-3 bg-pink-100 py-3 px-2 rounded-2xl mb-5">
              <Image
                source={{ uri: tourDetails?.hotel.images[0] }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#DCDCDC",
                }}
              />
              <View>
                <Text className="text-white-100 text-left font-[500] text-[14px] mb-2">
                  {tourDetails?.country}, {tourDetails?.city}
                </Text>
                <Text className="text-white-100 text-left  font-[400] text-[12px]">
                  З {tourDetails?.startDate.slice(0, 10)} по{" "}
                  {tourDetails?.endDate.slice(0, 10)}
                </Text>
              </View>
            </View>

            <Text className="text-black-300 font-[400] text-[12px] leading-[1] text-center mb-1">
              Заповніть форму і ми зв&rsquo;яжемося з вами для уточнення деталей
            </Text>

            <FormBooking nameTour={tourDetails?.tourTitle} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientLayout>
  );
}
