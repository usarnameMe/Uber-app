import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  background-color: ${({ isActive }) => (isActive ? "#000000" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 0 20px;
  width: 97px;
  height: 37px;
  border-radius: 25px;
`;

const Title = styled.Text`
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#000000")};
  font-size: 16px;
`;

const CategoryButton = ({
  title,
  onPress,
  isActive = false,
  ...otherProps
}) => {
  return (
    <Container onPress={onPress} isActive={isActive} {...otherProps}>
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
};

export default CategoryButton;
