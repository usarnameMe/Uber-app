import React from "react";
import { Image, Pressable, FlatList } from "react-native";
import styled from "styled-components/native";
import CustomText from "../components/atoms/CustomText";
import Screen from "../components/Screen";
import { Feather, Ionicons } from "@expo/vector-icons";
import Address from "../components/molecules/Adress";
import { StatusBar } from "react-native";

const MainContainer = styled(Screen)`
  flex: 1;
`;
const Wrapper = styled.View`
  /* margin: 2%; */
  width: 90%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Right = styled.View`
  align-items: center;
  flex-direction: row;
`;

const SearchContainer = styled.View`
  align-items: center;
  background-color: #eeeeee;
  flex-direction: row;
  height: 5%;
  padding-left: 2%;
  margin-bottom: 2%;
  margin-top: 10px;
`;

const InputText = styled.TextInput`
  font-weight: 500;
  font-size: 18px;
  height: 45px;
`;

const CategoryImage = styled.Image`
  width: 150px;
  height: 150px;
`;

const CategoryButton = styled(Pressable)`
  margin: 10px;
`;

const categories = [
  {
    id: "0",
    image: require("../images/grocery1.png"),
  },
  {
    id: "1",
    image: require("../images/grocery2.png"),
  },
  {
    id: "2",
    image: require("../images/grocery3.png"),
  },
  { id: "3", image: require("../images/grocery4.png") },
  { id: "4", image: require("../images/grocery5.png") },
  { id: "5", image: require("../images/grocery6.png") },
];

function GroceryScreen({ navigation }) {
  const handleCategoryPress = (categoryId) => {
    navigation.navigate("StoreScreen", { categoryId });
  };

  const renderCategoryItem = ({ item }) => (
    <CategoryButton onPress={() => handleCategoryPress(item.id)}>
      <CategoryImage source={item.image} />
    </CategoryButton>
  );

  return (
    <MainContainer>
      <Wrapper>
        <Header>
          <Left>
            <Pressable onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={26} color="black" />
            </Pressable>

            <CustomText type="Medium" size="large">
              Stores
            </CustomText>
          </Left>

          <Right>
            <Ionicons name="person" size={24} />

            <Pressable>
              <Ionicons name="cart" size={26} />
            </Pressable>
          </Right>
        </Header>

        <SearchContainer>
          <Ionicons name="search" size={20} color="black" />

          <InputText placeholder="Search stores and produ..."></InputText>
        </SearchContainer>

        <Address></Address>
        <Container>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </Container>
      </Wrapper>
    </MainContainer>
  );
}

export default GroceryScreen;
