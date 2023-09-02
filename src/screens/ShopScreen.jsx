import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import CategoryButton from "../components/atoms/CategoryButton";
import Button from "../components/atoms/Button";
import ShopScreenCard from "../components/organisms/ShopScreenCard";
import { BasketContext } from "./BasketContext";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";

const MainContainer = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  top: 50px;
  line-height: 44px;
`;

const BasketImage = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
`;

const PrimaryText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #000;
  margin-bottom: 10px;
`;

const SecondaryText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #808080;
  margin-bottom: 20px;
`;

const StartShoppingButton = styled(CategoryButton)`
  width: 50%;
`;

const cartData = [
  {
    shop: "Begs & Megs",
    items: [
      {
        name: "1 Item",
        price: "US$43.00",
      },
    ],
    deliveryLocation: "San Francisco Bay Area",
    image: require("../images/begsMegs.png"),
  },
  {
    shop: "Taco Bell",
    items: [
      {
        name: "1 Item",
        price: "US$43.00",
      },
    ],
    deliveryLocation: "San Francisco Bay Area",
    image: require("../images/tacoBell.png"),
  },
  {
    shop: "Jen's Pizza",
    items: [
      {
        name: "1 Item",
        price: "US$30.00",
      },
    ],
    deliveryLocation: "Los Angeles",
    image: require("../images/begsMegs.png"),
  },
  {
    shop: "Tom's Tacos",
    items: [
      {
        name: "1 Item",
        price: "US$35.00",
      },
    ],
    deliveryLocation: "New York City",
    image: require("../images/tacoBell.png"),
  },
  {
    shop: "Chang's Chinese",
    items: [
      {
        name: "1 Item",
        price: "US$25.00",
      },
    ],
    deliveryLocation: "Chicago",
    image: require("../images/begsMegs.png"),
  },
  {
    shop: "Amy's Burgers",
    items: [
      {
        name: "1 Item",
        price: "US$40.00",
      },
    ],
    deliveryLocation: "Los Angeles",
    image: require("../images/tacoBell.png"),
  },
  {
    shop: "Mario's Pasta",
    items: [
      {
        name: "1 Item",
        price: "US$45.00",
      },
    ],
    deliveryLocation: "San Francisco Bay Area",
    image: require("../images/begsMegs.png"),
  },
  {
    shop: "Rachel's Bagels",
    items: [
      {
        name: "1 Item",
        price: "US$20.00",
      },
    ],
    deliveryLocation: "New York City",
    image: require("../images/tacoBell.png"),
  },
  {
    shop: "John's Barbecue",
    items: [
      {
        name: "1 Item",
        price: "US$55.00",
      },
    ],
    deliveryLocation: "Chicago",
    image: require("../images/begsMegs.png"),
  },
  {
    shop: "Lily's Vegan",
    items: [
      {
        name: "1 Item",
        price: "US$50.00",
      },
    ],
    deliveryLocation: "San Francisco Bay Area",
    image: require("../images/tacoBell.png"),
  },
];

const deleteRow = (rowMap, rowKey) => {
  closeRow(rowMap, rowKey);
  const newData = [...basket];
  const prevIndex = basket.findIndex((item) => item.key === rowKey);
  newData.splice(prevIndex, 1);
  setBasket(newData);
};

const ShopScreen = ({ navigation, route }) => {
  const [hasData, setHasData] = useState(false);
  const onArrowClick = (restaurantName) => {
    console.log(restaurantName);
  };
  const { basket } = useContext(BasketContext);

  return (
    <MainContainer>
      <HeaderContainer>
        <Title>Carts</Title>
        <Button
          title="Orders"
          onPress={() => {
            console.log("Pressed");
          }}
          icon={require("../images/ordersIcon.png")}
          light={true}
          style={{
            width: "30%",
            height: "70%",
          }}
        />
      </HeaderContainer>

      {basket.length > 0 ? (
        <ShopScreenCard cartData={basket} onArrowClick={onArrowClick} />
      ) : (
        <Container>
          <BasketImage source={require("../images/basket.png")} />
          <PrimaryText>Add items to your basket</PrimaryText>
          <SecondaryText>
            Once you add items from a restaurant or store, your basket will
            appear here.
          </SecondaryText>
          <StartShoppingButton
            title="Start Shopping"
            isActive={true}
            onPress={() => {
              setHasData(true);
              navigation.navigate("StoreScreen");
            }}
          />
        </Container>
      )}
    </MainContainer>
  );
};

export default ShopScreen;
