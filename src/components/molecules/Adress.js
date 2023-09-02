import React from "react";
import CustomText from "../atoms/CustomText";
import styled from "styled-components";

const MainCont = styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const ImgCont = styled.View`
  margin-right: 10px;
`;

const Pin = styled.Image``;

const TextCont = styled.View`
  flex: 1;
  justify-content: center;
  margin-right: 10px;
`;

const ArrowCont = styled.View``;

const Arrow = styled.Image``;

function Address() {
  return (
    <MainCont>
      <ImgCont>
        <Pin source={require("../../images/pin.png")} />
      </ImgCont>
      <TextCont>
        <CustomText type="Medium" size="medium">
          San Francisco Bay Area
        </CustomText>
        <CustomText type="Light" size="small">
          John’s List
        </CustomText>
      </TextCont>
      <ArrowCont>
        <Arrow source={require("../../images/errow.png")} />
      </ArrowCont>
    </MainCont>
  );
}

export default Address;
