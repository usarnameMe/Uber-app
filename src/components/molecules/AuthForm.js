import React from "react";
import styled from "styled-components";
import { KeyboardAvoidingView, Platform } from "react-native";
import Button from "../atoms/Button";

const Container = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})``;

const UserName = styled.TextInput.attrs({
  autoCompleteType: "username",
  textContentType: "username",
})`
  border: 1px #c7dac5;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 5px;
  text-align: center;
  height: 52px;
  width: 266px;
  font-size: 18px;
`;

const Password = styled.TextInput.attrs({
  secureTextEntry: true,
  autoCompleteType: "password",
  textContentType: "password",
})`
  height: 40px;
  border: 1px #c7dac5;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
  height: 52px;
  width: 266px;
  font-size: 18px;
`;

const ActionBtn = styled(Button)``;

const AuthForm = ({ title, userName, password, setUserName, setPassword }) => {
  return (
    <Container>
      <UserName
        placeholder="Username"
        onChange={(e) => setUserName(e.nativeEvent.text)}
        value={userName}
      />
      <Password
        placeholder="Password"
        onChange={(e) => setPassword(e.nativeEvent.text)}
        value={password}
      />
      {/* <ActionBtn title={title} /> */}
    </Container>
  );
};

export default AuthForm;
