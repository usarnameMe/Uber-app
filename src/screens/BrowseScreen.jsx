import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BrowseCard from "../components/atoms/BrowseCard";
import styled from "styled-components";
import SearchTextInput from "../components/atoms/SearchTextInput";
import { Screen } from "../components/Screen";
import { TopCategories, AllCategories } from "../data/appData";
import CustomText from "../components/atoms/CustomText";

const Container = styled(Screen)`
  flex: 1;
  margin: 10px;
  padding: 10px 22px;
`;
const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
const SearchContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 500;
  line-height: 35px;
  padding: 10px;
  margin-left: 10px;
`;

const SearchTitle = styled(CustomText)``;

const BrowseScreen = () => {
  const navigation = useNavigation();

  const [searchAll, setSearchAll] = useState("");
  const [filteredCategories, setfilteredCategories] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const responseTopCategories = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const dataTopCategories = await responseTopCategories.json();
      setTopCategories(dataTopCategories);

      const responseAllCategories = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const dataAllCategories = await responseAllCategories.json();
      setAllCategories(dataAllCategories);
    };

    fetchData();
  }, []);

  const navigateToDeals = () => {
    navigation.navigate("DealsScreen");
  };

  const handleSearch = (all) => {
    setSearchAll(all);
    if (all.trim() === "") {
      setfilteredCategories([]);
      return;
    }
    const searchSize = all.toLowerCase();

    const filteredAllCategories = AllCategories.filter((category) =>
      category.title.toLocaleLowerCase().includes(searchSize)
    );

    const filteredTopCategories = TopCategories.filter((category) =>
      category.title.toLocaleLowerCase().includes(searchSize)
    );

    const result = [...filteredAllCategories, ...filteredTopCategories];
    setfilteredCategories(result);
  };

  return (
    <Container>
      <SearchTextInput handleSearch={handleSearch} />
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        {searchAll.trim() && (
          <>
            <Title>Search Results</Title>
            <InnerContainer>
              {filteredCategories.map((item) => (
                <BrowseCard
                  key={item.id}
                  title={item.title}
                  imgUrl={item.photo}
                  navigation={navigation}
                />
              ))}
            </InnerContainer>
          </>
        )}
        <Title>Top Categories</Title>
        <InnerContainer>
          {TopCategories.map((item) => (
            <BrowseCard
              key={item.id}
              title={item.title}
              imgUrl={item.photo}
              navigation={navigation}
              onPress={navigateToDeals}
            />
          ))}
        </InnerContainer>
        <Title>All Categories</Title>
        <InnerContainer>
          {AllCategories.map((item) => (
            <BrowseCard
              key={item.id}
              title={item.title}
              imgUrl={item.photo}
              navigation={navigation}
              onPress={navigateToDeals}
            />
          ))}
        </InnerContainer>
      </ScrollView>
    </Container>
  );
};
export default BrowseScreen;
