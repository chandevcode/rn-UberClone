import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectOrigin } from "../slices/navSlice";
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin)
  const data = [
    {
      id: "1",
      title: "Go Ride",
      image: "https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png",
      screen: "Map",
    },
    {
      id: "2",
      title: "Order Food",
      image: "http://assets.stickpng.com/images/585ac06b4f6ae202fedf293b.png",
      screen: "Food",
    },
  ];
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-4 bg-gray-200 pb-8 pl-4 m-2 w-40 rounded`}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`items-center ${!origin && 'opacity-10'}`}>
            <Image
              style={{ height: 120, width: 120 }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-bold text-black`}>{item.title}</Text>

            <Icon
              style={tw`p-2 rounded-full bg-gray-600 w-10 mt-2`}
              name="chevron-forward-outline"
              type="ionicon"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
