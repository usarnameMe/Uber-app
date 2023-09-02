import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("user", jsonValue);
  } catch (e) {
    alert("Error saving data");
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("user");
    console.log("Data retrieved: ", jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error getting data: ", e);
  }
};
