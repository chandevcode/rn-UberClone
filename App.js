import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import FoodScreen from "./screens/FoodScreen";
import { store } from "./store";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
    
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Food"
                component={FoodScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
  
    
      </NavigationContainer>

      <StatusBar style="auto" />
    </Provider>
  );
}
