import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  margin: 5px;
  align-items: center;
  padding: 8px;
`;

const ImageContainer = styled.View`
  background-color: #ebe9e9;
  border-radius: 12px;
  padding: 10px;
`;

const Img = styled.Image`
  width: ${({ smallSize }) => (smallSize ? "50px" : "130px")};
  height: ${({ smallSize }) => (smallSize ? "50px" : "90px")};
  padding: 10px;
`;

const CategoryName = styled.Text`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  margin-top: 2px;
`;

const CategoryCard = ({ onPress, photo, title, smallSize }) => {
  return (
    <Container onPress={onPress}>
      <ImageContainer smallSize={smallSize}>
        <Img source={photo} smallSize={smallSize} />
      </ImageContainer>
      <CategoryName>{title}</CategoryName>
    </Container>
  );
};

export default CategoryCard;
