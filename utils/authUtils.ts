import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeLoginToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem("login-token", token);
  } catch (error: any) {
    throw new Error("Failed to store token");
  }
};

export const getLoginToken = async (): Promise<string | null>  => {
  try {
    const token = await AsyncStorage.getItem("login-token");
    return token;
  } catch (error: any) {
    throw new Error("Failed to retrieve token");
  }
};
