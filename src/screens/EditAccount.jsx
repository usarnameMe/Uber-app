import React, { useState, useEffect, useContext } from "react";
import { TextInput, View, Text } from "react-native";
import styled from "styled-components";
import AvatarPicker from "./AvatarPicker.";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext, UpdateUserContext } from "../UserProvider";
import { KeyboardAvoidingView, Platform, _ScrollView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const Header = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SectionHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const EditIconWrapper = styled.View`
  position: absolute;
  left: 87px;
  top: 120px;
  background-color: white;
  border-radius: 50px;
  padding: 5px;
`;

const EditIcon = styled(MaterialIcons)`
  color: #000;
  background-color: white;
  padding: 5px;
`;

const Field = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FieldText = styled.Text`
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
`;

const FieldLine = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: #ccc;
  margin-bottom: 10px;
`;

const InputField = styled.TextInput`
  font-size: 16px;
  line-height: 30px;
  padding: 5px;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const SaveButton = styled.TouchableOpacity`
  background-color: #080a08;
  color: white;
  padding: 15px;
  margin: 10px;
  margin-top: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

function EditAccount() {
  const user = useContext(UserContext);
  const { updateUser } = useContext(UpdateUserContext);

  const [avatarUri, setAvatarUri] = useState(user?.avatarUri || "");
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [email, setEmail] = useState(user?.email || "");

  const saveChanges = () => {
    if (updateUser) {
      updateUser({
        avatarUri,
        name,
        phone,
        email,
      });
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
      <ScrollView>
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
            <FieldText>Phone: </FieldText>
            <InputField value={phone} onChangeText={(text) => setPhone(text)} />
          </Field>
          <FieldLine />
          <Field>
            <FieldText>Email: </FieldText>
            <InputField value={email} onChangeText={(text) => setEmail(text)} />
          </Field>
          <FieldLine />
          <SaveButton onPress={saveChanges}>
            <Text style={{ color: "white" }}>Save Changes</Text>
          </SaveButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default EditAccount;
