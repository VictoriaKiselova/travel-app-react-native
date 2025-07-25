import GoBack from "@/components/GoBack/GoBack";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  Text,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { signupUser } from "../../api/authApi";
import { useAuthContext } from "@/components/Context/AuthContext";
import GradientLayout from "@/components/GradientLayout/GradientLayout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  favorites: undefined;
  profile: undefined;
};

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isErrorEmail, setIsErrorEmail] = useState<string>("");
  const [isErrorPassword, setIsErrorPassword] = useState<string>("");
  const [isErrorRepeatPassword, setIsErrorRepeatPassword] =
    useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [nameSurnameError, setNameSurnameError] = useState<string>("");
  const { setUser, setIsLoggedIn } = useAuthContext();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleAuth = async () => {
    const trimmedName = name.trim();
    const trimmedSurname = surname.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedRepeatPassword = repeatPassword.trim();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    const isValidPassword = /^.{7,}$/.test(trimmedPassword);

    if (!trimmedName && !trimmedSurname) {
      setNameSurnameError("Введіть ім'я та прізвище");
    } else if (!trimmedName) {
      setNameSurnameError("Введіть ім'я");
    } else if (!trimmedSurname) {
      setNameSurnameError("Введіть прізвище");
    } else {
      setNameSurnameError("");
    }

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

    if (trimmedPassword !== trimmedRepeatPassword) {
      setIsErrorRepeatPassword("Паролі не співпадають");
    } else {
      setIsErrorRepeatPassword("");
    }

    try {
      const response = await signupUser({
        name: trimmedName,
        surname: trimmedSurname,
        email: trimmedEmail,
        password: trimmedPassword,
        repeatPassword: trimmedRepeatPassword,
      });

      setUser(response.user);
      setIsLoggedIn(true);
      navigation.navigate("profile");
    } catch (error: any) {
      console.error("Помилка реєстрації:", error);

      if (error?.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Сталася помилка. Спробуйте ще раз пізніше.");
      }
    }
  };

  return (
    <GradientLayout>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="p-3 pb-0">
            <GoBack />
            <Text className="text-black-500 font-[500] text-[16px] text-center flex-shrink tracking-wide leading-tight my-[24px]">
              Зареєструйтесь, щоб отримати доступ до всіх можливостей додатку
            </Text>

            <View>
              <TextInput
                mode="outlined"
                label="Ім'я"
                placeholder="Введіть ім'я"
                right={
                  <TextInput.Affix
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
                value={name}
                onChangeText={setName}
              />
              {nameSurnameError && (
                <Text className="text-red-100 font-[400] text-[10px] text-left flex-shrink tracking-wide leading-tight mb-1">
                  {nameSurnameError}
                </Text>
              )}
            </View>

            <View>
              <TextInput
                mode="outlined"
                label="Прізвище"
                placeholder="Введіть прізвище"
                right={
                  <TextInput.Affix
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
                value={surname}
                onChangeText={setSurname}
              />
              {nameSurnameError && (
                <Text className="text-red-100 font-[400] text-[10px] text-left flex-shrink tracking-wide leading-tight mb-1">
                  {nameSurnameError}
                </Text>
              )}
            </View>

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

            <View>
              <TextInput
                mode="outlined"
                label="Повторіть пароль"
                placeholder="Повторіть пароль"
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
                value={repeatPassword}
                onChangeText={setRepeatPassword}
              />
              {isErrorRepeatPassword && (
                <Text className="text-red-100 font-[400] text-[10px] text-left flex-shrink tracking-wide leading-tight mb-1">
                  {isErrorRepeatPassword}
                </Text>
              )}
            </View>

            <Pressable
              onPress={() => {
                handleAuth();
              }}
              className="w-full py-3 px-4 bg-blue-400 rounded-xl active:bg-blue-300 mt-[16px] mb-[24px]">
              <Text className="font-[400] text-[14px] text-center flex-shrink tracking-wide leading-tight text-white-100">
                Зареєструватись
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientLayout>
  );
}
