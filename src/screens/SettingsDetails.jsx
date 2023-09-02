import React from "react";
import { Text, Image, Pressable, View } from "react-native";
import styled from "styled-components";
import SettingsCard from "../components/organisms/SettingsCard";
import * as ROUTES from "../constants/routes";
import { useContext } from "react";
import { UserContext } from "../UserProvider";

const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-self: center;
  margin-bottom: 20px;
`;

const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const EditAccount = styled.Text`
  font-size: 16px;
  color: #1d5c2e;
  text-align: center;
  margin-bottom: 15px;
`;

const Line = styled.View`
  height: 1px;
  background-color: #ddd;
  margin-bottom: 40px;
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SignOut = styled.Text`
  font-size: 16px;
  color: #1d5c2e;
  margin-top: 20px;
`;

const user = {
  name: "John Doe",
};

const items = [
  {
    title: "Home",
    subtitle: "Add home",
    icon: require("../images/homee.png"),
  },
  {
    title: "Work",
    subtitle: "Add work",
    icon: require("../images/work.png"),
  },
];

const SettingsDetails = ({ navigation }) => {
  const user = useContext(UserContext);

  const handleEditAccountPress = () => {
    navigation.navigate(ROUTES.EDIT_ACCOUNT);
  };
  return (
    <Container>
      <Pressable>
        <Avatar
          source={
            user && user.avatarUri
              ? { uri: user.avatarUri }
              : require("../images/avatar.png")
          }
        />
      </Pressable>
      <UserName>{user ? user.name : "John Doe"}</UserName>
      <Pressable onPress={handleEditAccountPress}>
        <EditAccount>EDIT ACCOUNT</EditAccount>
      </Pressable>

      <Line />

      <SectionTitle>Saved places</SectionTitle>

      {items.map((item) => (
        <SettingsCard
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
          icon={<Image source={item.icon} />}
        />
      ))}

      <Line />
      <SectionTitle>Other Options</SectionTitle>

      <Pressable onPress={() => navigation.replace(ROUTES.LOGIN_SCREEN)}>
        <SignOut>Sign Out</SignOut>
      </Pressable>
    </Container>
  );
};

export default SettingsDetails;
