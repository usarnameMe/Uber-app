import React from "react";
import { Image, Dimensions } from "react-native";
import styled from "styled-components/native";

import CustomText from "../atoms/CustomText";

const Container = styled.Pressable`
  align-items: center;
  justify-content: space-around;
  margin: ${width * 0.013}px;
  height: ${height * 0.185}px;
  width: ${width * 0.422}px;
  background-color: ${(props) => props.background};
`;

const Logo = styled.View`
  margin-top: ${width * 0.038}px;
`;

const TextView = styled.View`
  align-items: center;
  background: rgba(0, 0, 0, 0.45);
  border-radius: ${width * 0.13}px;
  justify-content: center;
  padding: ${width * 0.013}px ${width * 0.025}px;
`;

const Time = styled(CustomText)``;

const GroceryCard = ({ background, logo, time, onPress }) => {
  return (
    <Container onPress={onPress} background={background}>
      <Logo>
        <Image source={logo} />
      </Logo>
      {time ? (
        <TextView>
          <Time color="white">In {time} minutes</Time>
        </TextView>
      ) : (
        <TextView>
          <Time color="white" numberOfLines={1}>
            Currently unavailable
          </Time>
        </TextView>
      )}
    </Container>
  );
};

export default GroceryCard;
