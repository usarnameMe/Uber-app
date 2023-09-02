import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import DishItem from "./DishItem";
import { useNavigation } from "@react-navigation/native";

const CategoryContainer = styled.View`
  margin-bottom: 20px;
  padding: 15px;
`;

const CategoryTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const RestaurantDetails = ({ data }) => {
  const navigation = useNavigation();

  const handleItemPress = (id) => {
    navigation.navigate("OrderSelectionScreen", { itemId: id });
  };

  return (
    <View>
      {data.categories.map((category) => (
        <CategoryContainer key={category.id}>
          <CategoryTitle>{category.title}</CategoryTitle>
          {category.dishes.map((dish) => (
            <DishItem
              key={dish.id}
              name={dish.name}
              desc={dish.desc}
              imageUrl={dish.imageUrl}
              price={dish.price}
              onPress={() => handleItemPress()}
            />
          ))}
        </CategoryContainer>
      ))}
    </View>
  );
};

export default RestaurantDetails;
