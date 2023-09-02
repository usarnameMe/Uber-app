import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

const Container = styled.Pressable`
  height: 50px;
  width: 265px;
  border-radius: ${({ rounded }) => (rounded ? "30px" : "0px")};
  background-color: ${({ light }) => (light ? "#EEEEEE" : "#000000")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  flex-direction: row;
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#000000" : "#FFFFFF")};
  font-size: 16px;
`;

const Icon = styled(Image)`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

const Button = ({
  title,
  onPress,
  icon,
  light = false,
  rounded = false,
  ...otherProps
}) => {
  return (
    <Container
      onPress={onPress}
      light={light}
      rounded={rounded}
      {...otherProps}
    >
      {icon && <Icon source={icon} />}
      <Title light={light}>{title}</Title>
    </Container>
  );
};

export default Button;
