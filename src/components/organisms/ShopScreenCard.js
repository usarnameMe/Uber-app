import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "../atoms/BasketCard";
import { ScrollView } from "react-native-gesture-handler";
import { BasketContext } from "../../screens/BasketContext";

const MainContainer = styled.View`
  flex: 1;
  display: flex;
`;

const Line = styled.View`
  height: 1px;
  background-color: #ddd;
  margin-left: 70px;
`;

const ItemContainer = styled.View`
  margin-bottom: 10px;
  margin-top: 10px;
`;

const ShopScreenCard = ({ cartData }) => {
  const { basket } = useContext(BasketContext);
  return (
    <MainContainer>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {basket.map((data, index) => {
          console.log(data);
          return (
            <ItemContainer key={index}>
              <BasketCard {...data} />
              <Line />
            </ItemContainer>
          );
        })}
      </ScrollView>
    </MainContainer>
  );
};

export default ShopScreenCard;
