import React, { useState, useContext } from "react";
import { View, Alert, Pressable } from "react-native";
import styled from "styled-components/native";
import * as ROUTES from "../constants/routes";
import CustomText from "../components/atoms/CustomText";
import Button from "../components/atoms/Button";
import { UpdateUserContext } from "../UserProvider";
import { Space } from "../components/atoms/Space";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SnackBar from "../components/molecules/SnackBar";

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
`;

const AccountText = styled(CustomText)`
  margin-bottom: 5px;
`;

const HeaderTextCont = styled(CustomText)`
  margin-bottom: 30px;
`;

const InputContainer = styled(View)`
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

const Input = styled.TextInput`
  flex: 1;
`;

const ConfirmInput = styled.TextInput`
  flex: 1;
`;

const TouchableIcon = styled(Pressable)`
  padding-horizontal: 10px;
`;

const SnackCont = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const userLogged = useContext(UpdateUserContext);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      setSnackBarMessage("All fields must be filled!");
      setSnackBarVisible(true);
      return;
    }
    if (email === "" || confirmPassword === "") {
      setSnackBarMessage("Enter passwords to signup!");
      setSnackBarVisible(true);
      return;
    }

    if (password !== confirmPassword) {
      setSnackBarMessage("Passwords do not match!");
      setSnackBarVisible(true);
      return;
    }

    await userLogged({ email, password });
    setSnackBarMessage(`Account created for ${email}!`);
    setSnackBarVisible(true);
  };

  const onDismissSnackBar = () => {
    setSnackBarVisible(false);
    if (snackBarMessage === `Account created for ${email}!`) {
      navigation.navigate(ROUTES.LOGIN_SCREEN);
    }
  };

  return (
    <Container>
      <SnackCont>
        <SnackBar
          visible={snackBarVisible}
          message={snackBarMessage}
          onDismissSnackBar={onDismissSnackBar}
        />
      </SnackCont>
      <HeaderTextCont>
        <CustomText size="large" type="Medium">
          Create account
        </CustomText>
      </HeaderTextCont>
      <InputContainer>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
          autoComplete="new-password"
        />
        <TouchableIcon onPress={() => setPasswordVisible(!passwordVisible)}>
          <MaterialCommunityIcons
            name={passwordVisible ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </TouchableIcon>
      </InputContainer>

      <InputContainer>
        <ConfirmInput
          placeholder="Confirm Password"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoComplete="new-password"
        />
        <TouchableIcon
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <MaterialCommunityIcons
            name={confirmPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </TouchableIcon>
      </InputContainer>

      <Button title="Sign Up" onPress={handleSignUp} rounded />
      <Space />
      <Space />
      <AccountText type="Light" size="small" color="green">
        Already have an account?
      </AccountText>
      <Space />
      <Button
        title="Log in"
        rounded
        onPress={() => navigation.navigate(ROUTES.LOGIN_SCREEN)}
      />
    </Container>
  );
};

export default SignUpScreen;
