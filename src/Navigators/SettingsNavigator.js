import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ROUTES from "../constants/routes";
import AccountScreen from "../screens/AccountScreen";
import SettingsDetails from "../screens/SettingsDetails";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.ACCOUNT_SCREEN}
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.SETTINGS_DETAILS}
        component={SettingsDetails}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
