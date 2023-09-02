import React, { useState } from "react";
import { Pressable } from "react-native";
import styled from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";

const LikeBtn = styled.Pressable`
  position: absolute;
  right: 5%;
  top: 5%;
`;

const Container = styled.Pressable`
  margin-bottom: 25px;
`;

const CardImage = styled.Image`
  border-radius: 10px;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #6b6b6b;
`;

const Rating = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RatingText = styled.Text`
  font-size: 15px;
  margin-left: 4px;
`;

const CardBottom = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

const Promotion = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  border-top-right-radius: 75px;
  border-bottom-right-radius: 75px;
  width: 235px;
  background: green;
  position: absolute;
  top: 20px;
`;
const PromotionText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: aliceblue;
  font-style: normal;
`;

const MainCard = ({
  imgUrl,
  title,
  price,
  deliveryTime,
  rating: initialRating = 0,
  promotion = false,
  promQuantity,
  promPrise,
  onPress,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(initialRating);

  const handlePress = () => {
    setIsLiked(!isLiked);

    if (isLiked) {
      setRating((prevRating) => Math.max(prevRating - 0.1, 0));
    } else {
      setRating((prevRating) => prevRating + 0.1);
    }
  };

  return (
    <Container onPress={onPress}>
      <CardImage source={imgUrl} />

      <TitleWrapper>
        <Title>{title}</Title>
        <Rating>
          <Ionicons name="star" size={20} color="#FFD700" />
          <RatingText>{rating.toFixed(1)}</RatingText>
        </Rating>
      </TitleWrapper>
      <CardBottom>
        <Subtitle>
          {price ? `Delivery Fee $${price}   •  ` : ""}
          {deliveryTime ? `${deliveryTime}  min` : ""}
        </Subtitle>
      </CardBottom>
      {promotion && (
        <Promotion>
          <PromotionText>
            {promQuantity} orders until $ {promPrise} reward{" "}
          </PromotionText>
        </Promotion>
      )}
      <LikeBtn onPress={handlePress}>
        <Ionicons
          name={isLiked ? "heart" : "heart-outline"}
          size={30}
          color={isLiked ? "red" : "white"}
        />
      </LikeBtn>
    </Container>
  );
};

export default MainCard;
