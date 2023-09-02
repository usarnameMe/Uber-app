import React from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";
import { useNavigation } from "@react-navigation/native";

const Container = styled.Pressable`
  display: flex;
  align-items: center;
  height: 150px;
  border: #e8e8e8 1px;
  border-radius: 25px;
  margin-bottom: 10px;
  width: 48%;
`;
const CardImg = styled.Image`
  width: 100px;
  height: 100px;
`;
const CardText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
`;

const BrowseCard = ({ title, imgUrl }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(ROUTES.DEALS_SCREEN);
  };
  return (
    <Container onPress={handlePress}>
      <CardImg source={imgUrl} resizeMode="cover" />
      <CardText> {title} </CardText>
    </Container>
  );
};

export default BrowseCard;
