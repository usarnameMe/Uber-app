import React from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";

const RadioGroupContainer = styled(View)``;

const RadioOption = styled(Pressable)``;

const RadioLabel = styled(Text)`
  color: ${({ selected }) => (selected ? "blue" : "black")};
`;

const RadioGroup = ({ choices, selectedChoice, onChoiceChange }) => {
  return (
    <RadioGroupContainer>
      {choices.map((choice, index) => (
        <RadioOption
          key={index}
          onPress={() => onChoiceChange(choice)}
          android_ripple={{ color: "lightgrey" }}
        >
          <RadioLabel selected={selectedChoice === choice}>
            {choice.label}
          </RadioLabel>
        </RadioOption>
      ))}
    </RadioGroupContainer>
  );
};

export default RadioGroup;
