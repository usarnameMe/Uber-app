import React from "react";
import styled from "styled-components/native";
import CustomText from "./CustomText";

const CounterContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 30px;
  border-radius: 15px;
  padding: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const CounterButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: lightgray;
`;

const CounterText = styled(CustomText)`
  font-size: 16px;
`;

const Counter = ({ quantity, setQuantity }) => {
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <CounterContainer>
      <CounterButton onPress={handleDecrement}>
        <CounterText type="Medium">-</CounterText>
      </CounterButton>
      <CounterText type="Medium">{quantity}</CounterText>
      <CounterButton onPress={() => setQuantity((prev) => prev + 1)}>
        <CounterText type="Medium">+</CounterText>
      </CounterButton>
    </CounterContainer>
  );
};

export default Counter;
