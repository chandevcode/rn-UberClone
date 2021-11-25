import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Tabanan , Bali ,Indonesia",
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "Denpasar , Denpasar City ,Bali, Indonesia",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={(tw`bg-gray-200`, { height: 0.5 })} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center px-5 py-4 `}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-200 p-3`}
            name={icon}
            type="ionicon"
            color="gray"
            size={18}
          />
          <View>
            <Text style={tw`font-bold`}>{location}</Text>
            <Text>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
