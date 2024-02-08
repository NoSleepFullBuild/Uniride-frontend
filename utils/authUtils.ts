import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("login-token", token);
  } catch (error: any) {
    console.error("Error storing token:", error);
    throw new Error("Failed to store token");
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("login-token");
    return token;
  } catch (error: any) {
    console.error("Error retrieving token:", error);
    throw new Error("Failed to retrieve token");
  }
};
