import { ScrollView, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import * as ROUTES from "../constants/routes";
import SettingsCard from "../components/organisms/SettingsCard";
import Screen from "../components/Screen";

import Button from "../components/atoms/Button";

const MainContainer = styled(Screen)`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.ScrollView`
  flex: 1;
  padding-bottom: 70px;
  /* margin-bottom: 70px; */
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-left: 0;
  width: 85%;
  margin-top: 30px;
`;

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 15px;
`;

const UserInfo = styled.View``;

const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Btn = styled(Button)``;

const AccountScreen = ({ navigation }) => {
  const items = [
    {
      title: "Settings",
      icon: require("../images/vector11.png"),
      onPress: () => navigation.navigate(ROUTES.SETTINGS_DETAILS),
    },
    {
      title: "Orders",
      icon: require("../images/vector1.png"),
      onPress: () => console.log("Orders"),
    },
    {
      title: "Your favourites",
      icon: require("../images/vector2.png"),
      onPress: () => console.log("Your favourites"),
    },
    {
      title: "Restaurant Rewards",
      icon: require("../images/vector3.png"),
      onPress: () => console.log("Restaurant Rewards"),
    },
    {
      title: "Wallet",
      icon: require("../images/vector4.png"),
      onPress: () => console.log("Wallet"),
    },
    {
      title: "Send a gift",
      icon: require("../images/vector5.png"),
      onPress: () => console.log("Send a gift"),
    },
    {
      title: "Business preferences",
      icon: require("../images/vector6.png"),
      onPress: () => console.log("Business preferences"),
    },
    {
      title: "Make work meals quicker and easier",
      icon: require("../images/vector7.png"),
      onPress: () => console.log("Make work meals quicker and easier"),
    },
    {
      title: "Help",
      icon: require("../images/vector8.png"),
      onPress: () => console.log("Help"),
    },
    {
      title: "Promotions",
      icon: require("../images/vector9.png"),
      onPress: () => console.log("Promotions"),
    },
    {
      title: "Uber Pass",
      icon: require("../images/vector10.png"),
      onPress: () => console.log("Uber Pass"),
    },
    {
      title: "Join free for 1 month",
      icon: require("../images/vector2.png"),
      onPress: () => console.log("Join free for 1 month"),
    },
    {
      title: "Deliver with Uber",
      icon: require("../images/vector6.png"),
      onPress: () => console.log("Deliver with Uber"),
    },
  ];

  return (
    <MainContainer>
      <Container showsVerticalScrollIndicator={false}>
        <HeaderContainer>
          {/* <Avatar source={require("../images/avatar.png")} />
          <UserInfo>
            <UserName>John Doe</UserName>
          </UserInfo> */}
        </HeaderContainer>
        {items.map((item) => (
          <SettingsCard
            key={item.title}
            onPress={item.onPress}
            icon={<Image source={item.icon} />}
            title={item.title}
          />
        ))}
      </Container>
    </MainContainer>
  );
};

export default AccountScreen;
