import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";

import * as ROUTES from "../constants/routes";
import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";

import ShopScreen from "../screens/ShopScreen";
import SettingsNavigator from "./SettingsNavigator";
import GroceryScreen from "../screens/GroceryScreen";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={ROUTES.BOTTOM_TAB_NAV}
        component={BottomTabNavigator}
        options={{ title: "Home", headerShown: false }}
      />
      <Drawer.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={BrowseScreen}
        options={{ title: "BROWSE" }}
      />
      <Drawer.Screen
        name="DrawerShopScreen"
        component={ShopScreen}
        options={{ title: "SHOP" }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ title: "SETTINGS" }}
      />
      <Drawer.Screen
        name={ROUTES.GROCERY_SCREEN}
        component={GroceryScreen}
        options={{ title: "Grocery" }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
