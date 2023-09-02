import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
  padding: 10px 0;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
`;

const DishImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const DetailsContainer = styled.View`
  flex: 1;
  margin-left: ${({ hasImage }) => (hasImage ? "10px" : "0")};
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`;

const DescriptionText = styled.Text`
  font-size: 14px;
  color: gray;
`;

const Price = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

const DishItem = ({ name, desc, imageUrl, price, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Container>
        <DetailsContainer hasImage={!!imageUrl}>
          <Title>{name}</Title>
          {price && <Price>{price}</Price>}
          <DescriptionText numberOfLines={2}>{desc}</DescriptionText>
        </DetailsContainer>
        {imageUrl && (
          <ImageContainer>
            <DishImage source={imageUrl} />
          </ImageContainer>
        )}
      </Container>
    </Pressable>
  );
};

export default DishItem;
