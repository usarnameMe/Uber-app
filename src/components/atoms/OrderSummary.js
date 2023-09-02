import React from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import { Image, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const OrderCont = styled.View`
  padding-top: 15px;
  border-bottom-color: #e8e8e8;
  border-bottom-width: 5px;
  border-top-color: #e8e8e8;
  border-top-width: 5px;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;
const OrderSumHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
const LeftTxt = styled.View``;
const OrderSumMiddle = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 20px 0;
`;
const OrderSumBottom = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ItemCount = styled.View`
  background-color: #eeeeee;
  width: 30px;
  height: 30px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const ItemDetails = styled.View``;
const ShowMore = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const OrderSummary = () => {
  return (
    <OrderCont>
      <OrderSumHeader>
        <LeftTxt>
          <CustomText>Order summary</CustomText>
          <CustomText size="small" type="Light">
            Subway, Warriors Arena Road
          </CustomText>
        </LeftTxt>
        <CustomText color="green" size="small">
          view reciept
        </CustomText>
      </OrderSumHeader>
      <OrderSumMiddle>
        <ItemCount>
          <CustomText color="white">1</CustomText>
        </ItemCount>
        <ItemDetails>
          <CustomText>Cantina Crispy Chicken</CustomText>
          <ShowMore>
            <CustomText type="Light" size="medium">
              Show more
            </CustomText>
            <TouchableOpacity onPress={() => {}}>
              <AntDesign name="down" size={12} />
            </TouchableOpacity>
          </ShowMore>
        </ItemDetails>
      </OrderSumMiddle>
      <OrderSumBottom>
        <CustomText>Total</CustomText>
        <CustomText>US$13.18</CustomText>
      </OrderSumBottom>
    </OrderCont>
  );
};

export default OrderSummary;
