import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import MainCard from "../components/organisms/MainCard";
import OffersIcon from "../components/pictures/OffersIcon";
import RewardsIcon from "../components/pictures/RewardsIcon";

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const TabButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
  padding-top: 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: #ffffff;
`;

const TabButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex: 1;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
`;

const IconWrapper = styled.View`
  margin-right: 5px;
`;

const TabText = styled.Text`
  font-size: 16px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

const ActiveTabIndicator = styled.View`
  height: 3px;
  background-color: black;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const rewardData = [
  {
    id: 0,
    imgUrl: require("../images/5.png"),
    title: "Ice Cream Bar",
    deliveryTime: "15-25",
    rating: 4.1,
  },
  {
    id: 1,
    imgUrl: require("../images/2.png"),
    title: "Cardinal Chips",
    deliveryTime: "5-25",
    rating: 4.1,
  },
  {
    id: 2,
    imgUrl: require("../images/1.png"),
    title: "Round Eatery",
    deliveryTime: "10-15",
    rating: 4.8,
  },
  {
    id: 3,
    imgUrl: require("../images/4.png"),
    title: "African Flavour",
    deliveryTime: "10-25",
    rating: 3.4,
  },
  {
    id: 4,
    imgUrl: require("../images/3.png"),
    title: "Gourmet Burger Kitcien GBK",
    deliveryTime: "10-25",
    rating: 4.3,
  },
  {
    id: 5,
    imgUrl: require("../images/1.png"),
    title: "Adenine Kitchen",
    deliveryTime: "10-25",
    rating: 4.7,
    orders: "5",
    reward: "8",
  },
  {
    id: 6,
    imgUrl: require("../images/2.png"),
    title: "Cardinal Chips",
    deliveryTime: "5-25",
    rating: 4.1,
  },
  {
    id: 7,
    imgUrl: require("../images/1.png"),
    title: "Round Eatery",
    deliveryTime: "10-15",
    rating: 4.8,
  },
  {
    id: 8,
    imgUrl: require("../images/4.png"),
    title: "African Flavour",
    deliveryTime: "10-25",
    rating: 3.4,
  },
  {
    id: 9,
    imgUrl: require("../images/3.png"),
    title: "Gourmet Burger Kitcien GBK",
    deliveryTime: "10-25",
    rating: 4.3,
  },
  {
    id: 10,
    imgUrl: require("../images/1.png"),
    title: "Adenine Kitchen",
    deliveryTime: "10-25",
    rating: 4.7,
    orders: "5",
    reward: "8",
  },
];

const offersData = [
  {
    id: 20,
    imgUrl: require("../images/3.png"),
    title: "Gourmet Burger Kitcien GBK",
    deliveryTime: "10-25",
    rating: 4.3,
  },
  {
    id: 19,
    imgUrl: require("../images/4.png"),
    title: "African Flavour",
    deliveryTime: "10-25",
    rating: 3.4,
  },
  {
    id: 15,
    imgUrl: require("../images/1.png"),
    title: "Gourmet Burger Kitcien GBK",
    deliveryTime: "10-25",
    rating: 4.3,
  },

  {
    id: 13,
    imgUrl: require("../images/5.png"),
    title: "Round Eatery",
    deliveryTime: "10-15",
    rating: 4.8,
  },
  {
    id: 14,
    imgUrl: require("../images/4.png"),
    title: "African Flavour",
    deliveryTime: "10-25",
    rating: 3.4,
  },
  {
    id: 11,
    imgUrl: require("../images/2.png"),
    title: "Ice Cream Bar",
    deliveryTime: "15-25",
    rating: 4.1,
  },

  {
    id: 16,
    imgUrl: require("../images/1.png"),
    title: "Adenine Kitchen",
    deliveryTime: "10-25",
    rating: 4.7,
    orders: "5",
    reward: "8",
  },

  {
    id: 18,
    imgUrl: require("../images/1.png"),
    title: "Round Eatery",
    deliveryTime: "10-15",
    rating: 4.8,
  },
  {
    id: 12,
    imgUrl: require("../images/2.png"),
    title: "Cardinal Chips",
    deliveryTime: "5-25",
    rating: 4.1,
  },

  {
    id: 21,
    imgUrl: require("../images/1.png"),
    title: "Adenine Kitchen",
    deliveryTime: "10-25",
    rating: 4.7,
    orders: "5",
    reward: "8",
  },
  {
    id: 17,
    imgUrl: require("../images/2.png"),
    title: "Cardinal Chips",
    deliveryTime: "5-25",
    rating: 4.1,
  },
];

const DealsScreen = () => {
  const [activeTab, setActiveTab] = useState("offers");

  const renderItem = ({ item }) => {
    if (activeTab === "offers") {
      return (
        <MainCard
          imgUrl={item.imgUrl}
          title={item.title}
          price={item.price}
          deliveryTime={item.deliveryTime}
          rating={item.rating}
          onPress={() => console.log(item.title)}
        />
      );
    } else {
      return (
        <MainCard
          imgUrl={item.imgUrl}
          title={item.title}
          price={item.price}
          deliveryTime={item.deliveryTime}
          rating={item.rating}
          onPress={() => console.log(item.title)}
        />
      );
    }
  };

  return (
    <Container>
      <TabButtonContainer>
        <TabButton onPress={() => setActiveTab("offers")}>
          <IconWrapper>
            <OffersIcon />
          </IconWrapper>
          <TabText active={activeTab === "offers"}>Offers</TabText>
          {activeTab === "offers" && <ActiveTabIndicator />}
        </TabButton>
        <TabButton onPress={() => setActiveTab("rewards")}>
          <IconWrapper>
            <RewardsIcon />
          </IconWrapper>
          <TabText active={activeTab === "rewards"}>Rewards</TabText>
          {activeTab === "rewards" && <ActiveTabIndicator />}
        </TabButton>
      </TabButtonContainer>
      <FlatList
        data={activeTab === "offers" ? offersData : rewardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

export default DealsScreen;
