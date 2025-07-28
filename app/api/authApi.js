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

export async function signinUser(userData) {
  try {
    const response = await api.post("/auth/signin", userData);
    if (response.data?.tokens && response.data?.user) {
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
    console.error("Signin error:", error);
    throw error;
  }
}

export async function logoutUser() {
  try {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    const response = await api.post("/auth/logout", {
      refreshToken,
    });

    if (response.status === 200) {
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("refreshToken");
    }

    return response.data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
}

export async function supportUser(message) {
  try {
    const response = await api.post("/support/contact", message);
    return response;
  } catch (error) {
    if (error.response) {
      console.error("Support error data:", error.response.data);
    } else {
      console.error("Support error:", error.message);
    }
    throw error;
  }
}
