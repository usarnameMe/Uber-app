import React, { useState, useEffect, useContext } from "react";
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import AvatarPicker from "./AvatarPicker.";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext, UpdateUserContext } from "../UserProvider";

const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #f5f5f5;
`;

const Header = styled.Text`
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const SectionHeader = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #333;
`;

const EditIconWrapper = styled.View`
  position: absolute;
  left: 87px;
  top: 120px;
  background-color: #f5f5f5;
  border-radius: 50px;
  padding: 8px;
  border: 1px solid #ccc;
`;

const EditIcon = styled(MaterialIcons)`
  color: #333;
`;

const Field = styled.View`
  margin-bottom: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FieldText = styled.Text`
  font-size: 18px;
  line-height: 32px;
  font-weight: 500;
  color: #333;
`;

const FieldLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  margin-bottom: 12px;
`;

const InputField = styled.TextInput`
  font-size: 16px;
  padding: 8px 12px;
  margin: 5px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
`;

const SaveButton = styled.TouchableOpacity`
  background-color: #333;
  padding: 16px;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

const Snackbar = styled.View`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  align-items: center;
`;

const SnackbarContent = styled.View`
  background-color: #43a047;
  padding: 16px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

const SnackbarText = styled.Text`
  color: white;
  margin-left: 8px;
`;

function EditAccount() {
  const user = useContext(UserContext);
  const { updateUser } = useContext(UpdateUserContext);

  const [avatarUri, setAvatarUri] = useState(user?.avatarUri || "");
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [email, setEmail] = useState(user?.email || "");
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const saveChanges = () => {
    if (updateUser) {
      updateUser({
        avatarUri,
        name,
        phone,
        email,
      });
      setSnackBarMessage("Account updated successfully!");
      setSnackBarVisible(true);
      setTimeout(() => setSnackBarVisible(false), 3000);
    }
  };

  useEffect(() => {
    if (user) {
      setAvatarUri(user.avatarUri || "");
      setName(user.name || "");
      setPhone(user.phone || "");
      setEmail(user.email || "");
    }
  }, [user]);

  if (!user) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <Container>
          <Header>Account info</Header>
          <AvatarPicker uri={avatarUri} onAvatarChange={setAvatarUri} />
          <EditIconWrapper>
            <EditIcon name="edit" size={24} />
          </EditIconWrapper>
          <SectionHeader>Basic info</SectionHeader>
          <Field>
            <FieldText>Name:</FieldText>
            <InputField value={name} onChangeText={(text) => setName(text)} />
          </Field>
          <FieldLine />
          <Field>
            <FieldText>Phone:</FieldText>
            <InputField value={phone} onChangeText={(text) => setPhone(text)} />
          </Field>
          <FieldLine />
          <Field>
            <FieldText>Email:</FieldText>
            <InputField value={email} onChangeText={(text) => setEmail(text)} />
          </Field>
          <FieldLine />
          <SaveButton onPress={saveChanges}>
            <Text style={{ color: "white" }}>Save Changes</Text>
          </SaveButton>
        </Container>
      </ScrollView>
      {snackBarVisible && (
        <Snackbar>
          <SnackbarContent>
            <MaterialIcons name="check-circle" size={24} color="white" />
            <SnackbarText>{snackBarMessage}</SnackbarText>
          </SnackbarContent>
        </Snackbar>
      )}
    </KeyboardAvoidingView>
  );
}

export default EditAccount;
