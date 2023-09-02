import React from "react";
import styled from "styled-components/native";
import { CategoriesData } from "../../data/appData";
import CustomText from "../atoms/CustomText";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.ScrollView`
  display: flex;
`;

const ItemContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3px;
  padding: 5px;
  border-bottom-width: 1px;
  border-bottom-color: lightgrey;
`;

const ImageView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const TextView = styled.View``;

const Title = styled(CustomText)``;

const ErrowView = styled.View`
  display: flex;
  position: absolute;
  right: 0;
`;

const CategoriesCart = ({ onPress }) => {
  return (
    <Container>
      {CategoriesData.map((item) => {
        const { title, image, id } = item;

        return (
          <ItemContainer key={id} onPress={() => onPress(id)}>
            <ImageView>
              <CardImage source={image} />
            </ImageView>
            <TextView>
              <Title color="white">{title}</Title>
            </TextView>
            <ErrowView>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="black"
              />
            </ErrowView>
          </ItemContainer>
        );
      })}
    </Container>
  );
};

export default CategoriesCart;
