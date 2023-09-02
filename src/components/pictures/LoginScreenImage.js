import React from "react";
import { View, Image, StyleSheet } from "react-native";

const UberImage = require("../pictures/image.jpg");

const NewImage = StyleSheet.create({
  image: {
    width: 212,
    height: 212,
    borderRadius: 100,
  },
});

export const LoginScreenImage = () => {
  return (
    <View
      style={{
        marginBottom: 54,
        marginTop: 20,
      }}
    >
      <Image style={NewImage.image} source={UberImage} />
    </View>
  );
};
