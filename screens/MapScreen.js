import { useNavigation } from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "twrnc";
import Map from "../components.js/Map";
import NavigateCard from "../components.js/NavigateCard";
import RideOptionsCard from "../components.js/RideOptionsCard";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation()
  return (
    <View>
     <TouchableOpacity
     onPress={() => navigation.navigate('Home')}
     style={tw`bg-gray-100 left-5 top-10 absolute  rounded-full z-50 p-2 shadow-lg`}>
       <Icon name='menu' />
     </TouchableOpacity>
    <KeyboardAvoidingView>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
      
    </KeyboardAvoidingView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
