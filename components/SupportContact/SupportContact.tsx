import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { supportUser } from "../../app/api/authApi.js";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface SupportContactModalProps {
  isSupportModalVisible: boolean;
  setSupportModalVisible: (visible: boolean) => void;
}

export default function SupportContactModal({
  isSupportModalVisible,
  setSupportModalVisible,
}: SupportContactModalProps) {
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!message.trim()) {
      Alert.alert("Помилка", "Будь ласка, напишіть повідомлення.");
      return;
    }

    try {
      const response = await supportUser({ message });

      if (response.status === 200) {
        Alert.alert("Успіх", "Ваше повідомлення надіслано. Дякуємо!");
        setMessage("");
        setSupportModalVisible(false);
      } else {
        Alert.alert("Помилка", "Не вдалося надіслати повідомлення.");
      }
    } catch (error) {
      Alert.alert("Помилка", "Сталася помилка. Перевірте інтернет.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Modal
          visible={isSupportModalVisible}
          transparent
          animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 justify-center items-center bg-black/40">
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="w-full px-4">
                <View className="w-full bg-white rounded-xl p-5 relative">
                  <Pressable
                    onPress={() => setSupportModalVisible(false)}
                    className="absolute top-3 right-4 z-10">
                    <MaterialCommunityIcons
                      name="close"
                      size={24}
                      color="black"
                    />
                  </Pressable>

                  <Text className="text-black-400 font-[500] text-[14px] text-center mb-[24px]">
                    Опишіть вашу проблему
                  </Text>

                  <TextInput
                    multiline
                    value={message}
                    onChangeText={setMessage}
                    className="h-28 border border-gray-300 rounded-md p-3 mb-4 text-black-400"
                    textAlignVertical="top"
                  />

                  <Pressable
                    onPress={handleSend}
                    className="bg-blue-600 py-3 rounded-md items-center">
                    <Text className="text-white text-base font-medium">
                      Відправити
                    </Text>
                  </Pressable>
                </View>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
