import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ROUTES from "../constants/routes";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import DrawerNavigator from "./DrawerNavigator";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import { Host } from "react-native-portalize";
import BottomTabNavigator from "./BottomTabNavigator";
import DealsScreen from "../screens/DealsScreen";
import EditAccount from "../screens/EditAccount";
import OrderSelectionScreen from "../components/organisms/OrderSelectionScreen";
import TrackOrderScreen from "../screens/TrackOrderScreen";
import TrackingMapScreen from "../screens/TrackingMapScreen";
import GroceryScreen from "../screens/GroceryScreen";
import StoreScreen from "../screens/StoreScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator initialRouteName={ROUTES.LOGIN_SCREEN}>
          <Stack.Screen
            name={ROUTES.LOGIN_SCREEN}
            component={LoginScreen}
            options={{ title: "Sign in", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.FORGOT_PASSWORD_SCREEN}
            component={ForgotPasswordScreen}
            options={({ navigation }) => ({
              title: "",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation?.goBack()}>
                  <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name={ROUTES.SIGN_UP_SCREEN}
            component={SignUpScreen}
            options={{ title: "Sign up", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.DRAWER_NAVIGATOR}
            component={DrawerNavigator}
            options={{ title: "HOME", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.BOTTOM_TAB_NAV}
            component={BottomTabNavigator}
            options={{ title: "Restaurant Details", headerBackVisible: false }}
          />
          <Stack.Screen
            name={ROUTES.DEALS_SCREEN}
            component={DealsScreen}
            options={{ title: "Deals", headerShown: true }}
          />
          <Stack.Screen
            name="RestaurantDetailsScreen"
            component={RestaurantDetailsScreen}
            options={{ title: "Restaurant Details", headerShown: false }}
          />
          <Stack.Screen
            name="EditAccount"
            component={EditAccount}
            options={{ title: "Edit Account" }}
          />
          <Stack.Screen
            name={ROUTES.ORDER_SELECTION}
            component={OrderSelectionScreen}
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
          <Stack.Screen
            name="TrackOrderScreen"
            component={TrackOrderScreen}
            options={({ navigation }) => ({
              title: "",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="close" size={28} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="TrackingMapScreen"
            component={TrackingMapScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name={ROUTES.GROCERY_SCREEN}
            component={GroceryScreen}
            options={({ navigation }) => ({
              title: "",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="close" size={28} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name={ROUTES.STORE_SCREEN}
            component={StoreScreen}
            options={{ title: "", headerShown: false }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default AuthNavigator;
