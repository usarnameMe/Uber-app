import React from "react";
import { Modalize } from "react-native-modalize";
import styled from "styled-components";
import Recommendations from "../../screens/Recommendations";

const Container = styled(Modalize)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  background-color: white;
  padding: 20px;
`;

const DeliveryDetailsModal = ({ bottomSheetRef, modalHeight }) => {
  return (
    <Container ref={bottomSheetRef} modalHeight={modalHeight}>
      <ModalContainer>
        <Recommendations bottomSheetRef={bottomSheetRef} />
      </ModalContainer>
    </Container>
  );
};

export default DeliveryDetailsModal;
