import React, { useState, useEffect } from "react";
import { View, Alert, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import * as ROUTES from "../constants/routes";
import CustomText from "../components/atoms/CustomText";
import Button from "../components/atoms/Button";
import { Space } from "../components/atoms/Space";
import SnackBar from "../components/molecules/SnackBar";

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  padding-horizontal: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding-horizontal: 10px;
  margin-bottom: 30px;
`;

const TextCont = styled.View`
  margin-bottom: 30px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputCont = styled(View)`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnCont = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SnackCont = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  /* top: 0px; */
`;

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const handlePasswordReset = () => {
    if (email === "") {
      setSnackBarMessage("Please enter your email address");
    } else {
      setSnackBarMessage(
        `The password reset link has been sent to " ${email} ". `
      );
      console.log("Link Sent!");
    }
    setVisible(true);
  };

  const onDismissSnackBar = () => setVisible(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Container>
        <SnackCont>
          <SnackBar
            visible={visible}
            onDismissSnackBar={onDismissSnackBar}
            message={snackBarMessage}
          />
        </SnackCont>
        <TextCont>
          <CustomText size="large" type="Bold">
            Reset your Password
          </CustomText>
          <Space></Space>
          <CustomText size="small" type="Light">
            Enter your email address to receive a link to reset your
          </CustomText>
          <CustomText size="small" type="Light">
            password
          </CustomText>
        </TextCont>

        <InputCont>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </InputCont>

        <BtnCont>
          <Button
            title="Send Reset Link"
            onPress={handlePasswordReset}
            rounded
          />
        </BtnCont>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
