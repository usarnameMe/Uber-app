import React from "react";
import styled from "styled-components/native";

const CheckboxContainer = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const CheckboxCircle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: ${(props) => (props.isRounded ? "10px" : "3px")};
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const CheckboxInnerCircle = styled.View`
  width: 12px;
  height: 12px;
  background-color: #000;
  border-radius: ${(props) => (props.isRounded ? "6px" : "2px")};
`;

const CheckboxLabel = styled.Text`
  color: #000;
`;

const Checkbox = ({ label, isChecked, onChange, isRounded = false }) => {
  return (
    <CheckboxContainer onPress={onChange}>
      <CheckboxCircle isRounded={isRounded}>
        {isChecked && <CheckboxInnerCircle isRounded={isRounded} />}
      </CheckboxCircle>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
