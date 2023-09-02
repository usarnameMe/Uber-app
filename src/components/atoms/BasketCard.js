import React from "react";
import styled from "styled-components";

const CardContainer = styled.View`
  background-color: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageContainer = styled.View`
  margin-right: 10px;
`;

const TextContainer = styled.View`
  flex: 1;
`;

const ErrorImageContainer = styled.Pressable`
  margin-left: 70px;
`;

const ErrorImage = styled.Image``;

const ShopName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DeliveryLocation = styled.Text`
  font-size: 14px;
  color: #808080;
  margin-bottom: 10px;
`;

const FoodItem = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

const FoodName = styled.Text`
  font-size: 16px;
  color: #000;
  margin-right: 10px;
`;

const FoodPrice = styled.Text`
  font-size: 16px;
  color: #000;
`;

const CardImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const BasketCard = ({
  shop,
  image,
  name,
  price,
  deliveryLocation,
  onArrowClick,
  title,
  subTitle,
  url,
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage source={url} />
      </ImageContainer>
      <TextContainer>
        <ShopName>{title}</ShopName>

        <FoodItem>
          <FoodName>{subTitle}</FoodName>
          <FoodPrice>{price}</FoodPrice>
        </FoodItem>
        <DeliveryLocation>{deliveryLocation}</DeliveryLocation>
      </TextContainer>
      <ErrorImageContainer>
        <ErrorImage source={require("../../images/errow.png")} />
      </ErrorImageContainer>
    </CardContainer>
  );
};

export default BasketCard;
