import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as ROUTES from "../constants/routes";
import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";
import ShopScreen from "../screens/ShopScreen";
import SettingsNavigator from "./SettingsNavigator";
import Icon from "react-native-vector-icons/Ionicons";
import GroceryScreen from "../screens/GroceryScreen";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let icon;
          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.BROWSE_SCREEN) {
            icon = focused ? "search" : "search-outline";
          } else if (route.name === ROUTES.GROCERY_SCREEN) {
            icon = focused ? "cart" : "cart-outline";
          } else if (route.name === ROUTES.SHOP_SCREEN) {
            icon = focused ? "basket" : "basket-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            icon = focused ? "person" : "person-outline";
          }
          return <Icon name={icon} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
        options={{ title: "HOME" }}
      />
      <Tab.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={BrowseScreen}
        options={{ title: "BROWSE" }}
      />
      <Tab.Screen
        name={ROUTES.GROCERY_SCREEN}
        component={GroceryScreen}
        options={{ title: "GROCERY" }}
      />
      <Tab.Screen
        name={ROUTES.SHOP_SCREEN}
        component={ShopScreen}
        options={{ title: "SHOP" }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ title: "ACCOUNT" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
