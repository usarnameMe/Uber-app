import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #333;
`;

const IconContainer = styled.View`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

function SettingsCard({ onPress, icon, title }) {
  return (
    <Container onPress={onPress}>
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
    </Container>
  );
}

export default SettingsCard;
