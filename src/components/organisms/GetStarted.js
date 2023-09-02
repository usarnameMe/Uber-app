import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

const Container = styled.View`
  height: 30px;
  widows: 40px;
  background-color: "red";
`;

const ActionBtn = styled(Button)``;

const GetStarted = () => {
  return (
    <Container>
      <ActionBtn title="click here" />
    </Container>
  );
};

export default GetStarted;
