import styled from "styled-components/native";
import React from "react";
import { Text } from "react-native";

const StyledText = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Bold":
        return "Uber-Bold";
      case "Medium":
        return "Uber-Medium";
      case "Light":
        return "Uber-Light";
      default:
        return "Uber-Regular";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "large":
        return "24px";
      case "medium":
        return "18px";
      case "small":
        return "14px";
      default:
        return "16px";
    }
  }};
  color: ${({ color }) => {
    switch (color) {
      case "black":
        return "#000000";
      case "green":
        return "#05A357";
      default:
        return "black";
    }
  }};
`;

const CustomText = ({
  type = "Medium",
  size = "medium",
  color,
  children,
  ...otherProps
}) => (
  <StyledText type={type} size={size} color={color} {...otherProps}>
    {children}
  </StyledText>
);

export default CustomText;
