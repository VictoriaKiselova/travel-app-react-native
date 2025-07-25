import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://travel-app-api-service.onrender.com/api",
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function signupUser(userData) {
  try {
    const response = await api.post("/auth/signup", userData);
    if (response.data.status === 201) {
      await AsyncStorage.setItem(
        "accessToken",
        response.data.tokens.accessToken
      );
      await AsyncStorage.setItem(
        "refreshToken",
        response.data.tokens.refreshToken
      );

      return response.data;
    }
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
}
