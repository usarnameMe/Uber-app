import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";
import styled from "styled-components";

const Container = styled(Modalize)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 5px; */
  /* width: 25%; */
`;

const Img = styled.Image`
  width: ${({ smallSize }) => (smallSize ? "50px" : "130px")};
  height: ${({ smallSize }) => (smallSize ? "50px" : "90px")};
  padding: 10px;
`;

const BottomSheet = ({ bottomSheetRef, children, modalHeight, smalSize }) => {
  return (
    <Container
      ref={bottomSheetRef}
      modalHeight={modalHeight}
      smalSize={smalSize}
    >
      {children}
    </Container>
  );
};

export default BottomSheet;
