import GoBack from "@/components/GoBack/GoBack";
import GradientLayout from "@/components/GradientLayout/GradientLayout";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { signinUser } from "../../api/authApi";
import { useAuthContext } from "@/components/Context/AuthContext";
import { RootStackParamList } from "../../../types/roots";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isErrorEmail, setIsErrorEmail] = useState<string>("");
  const [isErrorPassword, setIsErrorPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, setIsLoggedIn } = useAuthContext();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleAuth = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    const isValidPassword = /^.{7,}$/.test(trimmedPassword);

    if (!isValidEmail) {
      setIsErrorEmail("Введіть коректний email");
    } else {
      setIsErrorEmail("");
    }

    if (!isValidPassword) {
      setIsErrorPassword("Пароль має містити щонайменше 7 символів");
    } else {
      setIsErrorPassword("");
    }

    try {
      const response = await signinUser({
        email: trimmedEmail,
        password: trimmedPassword,
      });

      setUser(response.user);
      setIsLoggedIn(true);
      navigation.navigate("profile");
    } catch (error: any) {
      console.error("Помилка входу:", error);

      if (error?.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Сталася помилка. Спробуйте ще раз пізніше.");
      }
    }
  };

  return (
    <GradientLayout>
      <View className="p-3 pb-0">
        <GoBack />
        <Text className="text-black-500 font-[500] text-[16px] text-center flex-shrink tracking-wide leading-tight my-[24px]">
          Введіть свої дані для входу
        </Text>
        <View>
          <TextInput
            mode="outlined"
            label="Eмейл"
            placeholder="Введіть емейл"
            right={
              <TextInput.Affix
                text="/100"
                textStyle={{
                  color: "#8c95a3",
                  fontWeight: "normal",
                  fontSize: 12,
                }}
              />
            }
            style={{
              backgroundColor: "#eed5f7",
              marginBottom: 6,
              borderRadius: 12,
            }}
            textColor="black"
            theme={{ colors: { text: "black" } }}
            value={email}
            onChangeText={setEmail}
          />
          {isErrorEmail && (
            <Text className="text-red-100 font-[400] text-[10px] text-left flex-shrink tracking-wide leading-tight mb-1">
              {isErrorEmail}
            </Text>
          )}
        </View>

        <View>
          <TextInput
            mode="outlined"
            label="Пароль"
            placeholder="Введіть пароль"
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            style={{
              backgroundColor: "#eed5f7",
              marginBottom: 6,
              borderRadius: 12,
            }}
            textColor="black"
            theme={{ colors: { text: "black" } }}
            value={password}
            onChangeText={setPassword}
          />

          {isErrorPassword && (
            <Text className="text-red-100 font-[400] text-[10px] text-left flex-shrink tracking-wide leading-tight mb-1">
              {isErrorPassword}
            </Text>
          )}
        </View>

        <Pressable
          onPress={() => {
            handleAuth();
          }}
          className="w-full py-3 px-4 bg-blue-400 rounded-xl active:bg-blue-300 mt-[16px] mb-[24px]">
          <Text className="font-[400] text-[14px] text-center flex-shrink tracking-wide leading-tight text-white-100">
            Увійти
          </Text>
        </Pressable>
        <Text className="text-center font-[400] text-[12px] text-center flex-shrink tracking-wide leading-tight text-black-300">
          Ще не маєте акаунта?{" "}
          <Text
            onPress={() => navigation.navigate("signup")}
            className="font-[400] text-[12px] text-center flex-shrink tracking-wide leading-tight text-blue-500 underline">
            Зареєструйтесь
          </Text>
        </Text>
      </View>
    </GradientLayout>
  );
}
