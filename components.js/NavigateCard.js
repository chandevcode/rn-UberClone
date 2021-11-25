import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import { GOOGLE_API } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "twrnc";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core";
import NavFavourites from "./NavFavourites";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      
      <Text style={tw`text-center py-5 text-xl`}>Good Night, Chandra</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyle}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_API,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptions");
            }}
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row justify-evenly mt-auto py-3 border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row bg-black justify-between px-4 py-3 w-24 rounded-full `}
          onPress={() => navigation.navigate("RideOptions")}
        >
          <Icon name="car" size={16} color="white" type="font-awesome" />
          <Text style={tw`text-white text-center`}> Ride </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row bg-white  justify-between px-4 py-3 w-24 rounded-full `}
        >
          <Icon
            name="fast-food-outline"
            size={16}
            color="black"
            type="ionicon"
          />
          <Text style={tw`text-black text-center`}> Eats </Text>
        </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#dee2e6",
    borderRadius: 10,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
