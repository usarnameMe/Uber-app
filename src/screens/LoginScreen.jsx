import React, { useState, useEffect } from "react";
import {
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Keyboard,
} from "react-native";
import styled from "styled-components";
import Button from "../components/atoms/Button";
import * as ROUTES from "../constants/routes";
import { LoginScreenImage } from "../components/pictures/LoginScreenImage";
import { Space } from "../components/atoms/Space";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SnackBar from "../components/molecules/SnackBar";
import { getData } from "../helpers/manageStorage";

const Container = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
`;

const Image = styled(LoginScreenImage)`
  margin-top: 40px;
  margin-bottom: 54px;
`;

const InputContainer = styled.View`
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding-horizontal: 10px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: center;
`;

const Input = styled(TextInput)`
  flex: 1;
`;

const SignUpButton = styled.Text`
  color: blue;
  margin-left: 5px;
`;

const SignUpContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const SnackBarCont = styled.View`
  top: ${(props) => (props.isKeyboardOpen ? "110%" : "30px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleLogin = async () => {
    const storedUser = await getData();
    if (email === "" || password === "") {
      setSnackBarMessage("All fields must be filled!");
      setSnackBarVisible(true);
      return;
    }
    if (!storedUser) {
      setSnackBarMessage("No user data available");
      setSnackBarVisible(true);
    } else if (email === storedUser.email && password === storedUser.password) {
      navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.DRAWER_NAVIGATOR }],
      });
    } else {
      setSnackBarMessage("Invalid username or password");
      setSnackBarVisible(true);
    }
  };
  const onDismissSnackBar = () => setSnackBarVisible(false);

  return (
    <>
      <Container>
        <SnackBarCont isKeyboardOpen={isKeyboardOpen}>
          <SnackBar
            visible={snackBarVisible}
            message={snackBarMessage}
            onDismissSnackBar={onDismissSnackBar}
          />
        </SnackBarCont>
        <Image />
        <InputContainer>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
            <MaterialCommunityIcons
              name={passwordVisible ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </Pressable>
        </InputContainer>
        <Button title="Sign in" onPress={handleLogin} rounded />
        <Space />
        <SignUpContainer>
          <Pressable onPress={() => navigation.navigate(ROUTES.SIGN_UP_SCREEN)}>
            <SignUpButton>Sign Up</SignUpButton>
          </Pressable>
        </SignUpContainer>
        <Space />
        <Pressable
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
        >
          <SignUpButton>Forgot Password?</SignUpButton>
        </Pressable>
      </Container>
    </>
  );
};
export default LoginScreen;
