import React from "react";
import styled from "styled-components";
import { TextInput, Text } from "react-native";
import SearchIcon from "../pictures/SearchIcon";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  background-color: #e5e5e5;
  height: 44px;
  border-radius: 25px;
  width: 93%;
`;

const SearchTextInput = ({ handleSearch, value }) => {
  return (
    <Container>
      <SearchIcon />
      <TextInput
        autoCorrect={false}
        numberOfLines={1}
        maxLength={30}
        editable={true}
        placeholder="Food, shopping, drinks, etc"
        style={{ paddingLeft: 20 }}
        onChangeText={(text) => handleSearch(text)}
        value={value}
      />
    </Container>
  );
};

export default SearchTextInput;
