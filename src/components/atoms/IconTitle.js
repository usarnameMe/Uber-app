import React from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import { FontAwesome } from "@expo/vector-icons";

const MainCont = styled.Pressable`
  display: flex;
  flex-direction: row;
`;
const IconWrapper = styled.View``;
const TextWrapper = styled.View``;
const Title = styled(CustomText)``;

function IconTitle({ title }) {
  return (
    <MainCont>
      <IconWrapper>
        <FontAwesome name="search" size={24} color="black" />
      </IconWrapper>
      <TextWrapper>
        <Title>{title}</Title>
      </TextWrapper>
    </MainCont>
  );
}

export default IconTitle;
