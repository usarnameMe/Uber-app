import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Image,
  Text,
} from "react-native";
import MainCard from "../components/organisms/MainCard.js";
import styled from "styled-components";
import { Screen } from "../components/Screen.jsx";
import * as ROUTES from "../constants/routes.js";
import { Portal } from "react-native-portalize";
import BottomSheet from "../components/atoms/BottomSheet.jsx";
import CategoryButton from "../components/atoms/CategoryButton.js";
import CategoryCard from "../components/atoms/CategoryCard.jsx";
import { Icon, Badge } from "react-native-elements";
import { BasketContext } from "./BasketContext.js";

const pickUpToRender = [
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
];
const dineInToRender = [
  {
    id: 0,
    imgUrl: require("../images/1.png"),
    title: "Round Eatery",
    deliveryTime: "10-15",
    rating: 4.8,
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
    title: "Adenine Kitchen",
    deliveryTime: "10-25",
    rating: 4.7,
    orders: "5",
    reward: "8",
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
    title: "Gourmet Burger Kitchen GBK",
    deliveryTime: "10-25",
    rating: 4.3,
  },
  {
    id: 5,
    imgUrl: require("../images/5.png"),
    title: "Ice Cream Bar",
    deliveryTime: "15-25",
    rating: 4.1,
  },
];
const deliveryToRender = [
  {
    id: 0,
    imgUrl: require("../images/1.png"),
    title: "Adenine Kitchen",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.7,
    promotion: true,
    promQuantity: 5,
    promPrise: 7,
  },
  {
    id: 1,
    imgUrl: require("../images/2.png"),
    title: "Cardinal Chips",
    price: "5.249",
    deliveryTime: "5-25",
    rating: 4.1,
  },
  {
    id: 2,
    imgUrl: require("../images/3.png"),
    title: "Gourmet Burger Kitchen GBK",
    price: "6.50",
    deliveryTime: "10-25",
    rating: 4.3,
  },
  {
    id: 3,
    imgUrl: require("../images/4.png"),
    title: "African Flavour",
    price: "2.29",
    deliveryTime: "10-25",
    rating: 3.4,
  },
  {
    id: 4,
    imgUrl: require("../images/5.png"),
    title: "Ice Cream Bar",
    price: "0.39",
    deliveryTime: "15-25",
    rating: 4.1,
  },
  {
    id: 5,
    imgUrl: require("../images/1.png"),
    title: "Round Eatery",
    price: "0.29",
    deliveryTime: "10-15",
    rating: 4.8,
  },
];

const AllCategoryItems = [
  {
    id: 0,
    title: "Convenience",
    photo: require("../images/cat1.png"),
  },
  {
    id: 1,
    title: "Alcohol",
    photo: require("../images/cat2.png"),
  },
  {
    id: 2,
    title: "Pet Supplies",
    photo: require("../images/cat3.png"),
  },
  {
    id: 3,
    title: "Flowers",
    photo: require("../images/cat4.png"),
  },
  {
    id: 4,
    title: "Grocery",
    photo: require("../images/cat5.png"),
  },
  {
    id: 5,
    title: "American",
    photo: require("../images/cat6.png"),
  },
  {
    id: 6,
    title: "Speciality",
    photo: require("../images/cat7.png"),
  },
  {
    id: 7,
    title: "Takeout",
    photo: require("../images/cat8.png"),
  },
  {
    id: 8,
    title: "Asian",
    photo: require("../images/cat9.png"),
  },
  {
    id: 9,
    title: "Ice Cream",
    photo: require("../images/cat10.png"),
  },
  {
    id: 10,
    title: "Halal",
    photo: require("../images/cat11.png"),
  },
  {
    id: 11,
    title: "Retails",
    photo: require("../images/cat12.png"),
  },
  {
    id: 12,
    title: "Carribean",
    photo: require("../images/cat13.png"),
  },
  {
    id: 13,
    title: "Indian",
    photo: require("../images/cat14.png"),
  },
  {
    id: 14,
    title: "French",
    photo: require("../images/cat15.png"),
  },
  {
    id: 15,
    title: "Fast Foods",
    photo: require("../images/cat16.png"),
  },
  {
    id: 16,
    title: "Burger",
    photo: require("../images/cat17.png"),
  },
  {
    id: 17,
    title: "Ride",
    photo: require("../images/cat18.png"),
  },
  {
    id: 18,
    title: "Chinese",
    photo: require("../images/cat19.png"),
  },
  {
    id: 19,
    title: "Dessert",
    photo: require("../images/cat20.png"),
  },
];

const Container = styled(Screen)`
  flex: 1;
  background-color: #f0f0f0;
`;

const SortContainer = styled.View`
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
`;

const SortTopContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;

const BtnCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 75%;
`;

const BasketCont = styled.View``;

const SortBottomContainer = styled.View`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const Location = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #4a4a4a;
`;

const CagetoryBtn = styled(CategoryButton)`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  padding: 8px 16px;
  border-radius: 20px;
`;

const CategoryCardWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-top: 10px;
`;

const SecondCategoryCardWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

const MoreContainer = styled.Pressable`
  background-color: #ebe9e9;
  border-radius: 12px;
  padding: 10px;
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;

const ThreeDots = styled.Text`
  font-size: 15px;
  font-weight: 500;
`;

const btns = [
  { title: "Delivery", value: 0 },
  { title: "Pickup", value: 1 },
  { title: "Dine-in", value: 2 },
];

const HomeScreen = ({ navigation }) => {
  const [category, setCategory] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [basketSize, setBasketSize] = useState(0);
  const { basket } = useContext(BasketContext);

  const categorySheetRef = useRef();

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (category === 0) {
        setData(deliveryToRender);
      } else if (category === 1) {
        setData(pickUpToRender);
      } else {
        setData(dineInToRender);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handlePress = (value) => {
    setCategory(value);
  };

  const handleItemPress = (item) => {
    navigation.navigate(ROUTES.RESTAURANT_DETAILS, { item });
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <Container>
      <SortContainer>
        <SortTopContainer>
          <BtnCont>
            {btns.map((item) => {
              return (
                <CagetoryBtn
                  title={item.title}
                  onPress={() => handlePress(item.value)}
                  key={item.value}
                  isActive={item.value === category}
                />
              );
            })}
          </BtnCont>
          <BasketCont>
            <Icon
              name="shopping-basket"
              type="font-awesome"
              color="#000"
              onPress={() => navigation.navigate(ROUTES.SHOP_SCREEN)}
            />
            <Badge
              status="error"
              value={basket.length}
              containerStyle={{ position: "absolute", top: -4, right: -4 }}
            />
          </BasketCont>
        </SortTopContainer>

        <SortBottomContainer>
          <Location> Now • London </Location>
        </SortBottomContainer>
        <CategoryCardWrapper>
          <SecondCategoryCardWrapper>
            <CategoryCard
              title={AllCategoryItems[0].title}
              photo={AllCategoryItems[0].photo}
              smallSize
            />
            <CategoryCard
              title={AllCategoryItems[1].title}
              photo={AllCategoryItems[1].photo}
              smallSize
            />
            <CategoryCard
              title={AllCategoryItems[2].title}
              photo={AllCategoryItems[2].photo}
              smallSize
            />
            <MoreContainer onPress={() => categorySheetRef.current?.open()}>
              <ThreeDots> . . . </ThreeDots>
            </MoreContainer>
          </SecondCategoryCardWrapper>
        </CategoryCardWrapper>
      </SortContainer>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ActivityIndicator size="large" color="#020202" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <MainCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={category === 2 ? "" : item.price}
              deliveryTime={category === 2 ? "" : item.deliveryTime}
              rating={item.rating}
              promotion={item.promotion}
              promPrise={item.promPrise}
              promQuantity={item.promQuantity}
              onPress={() => handleItemPress(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Portal>
        <BottomSheet
          bottomSheetRef={categorySheetRef}
          modalHeight={700}
          smallSize>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              padding: 16,
            }}>
            {AllCategoryItems.map((item, index) => (
              <CategoryCardWrapper key={item.id} style={{ width: "25%" }}>
                <CategoryCard title={item.title} photo={item.photo} smallSize />
              </CategoryCardWrapper>
            ))}
          </ScrollView>
        </BottomSheet>
      </Portal>
    </Container>
  );
};

export default HomeScreen;
