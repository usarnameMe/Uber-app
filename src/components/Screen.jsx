import React from "react";
import { View, Text, Platform } from "react-native";
import styled from "styled-components";

const MainWrapper = styled.KeyboardAvoidingView`
  flex: 1;
`;

const ImageBackground = styled.View`
  flex: 1;
  background-color: ${(props) => props.background || "transparent"};
`;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background || "#ffffff"};
`;

export const Screen = ({ children, background }) => {
  return (
    <MainWrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground background={background}>
        <Container background={background}>{children}</Container>
      </ImageBackground>
    </MainWrapper>
  );
};
export default Screen;
