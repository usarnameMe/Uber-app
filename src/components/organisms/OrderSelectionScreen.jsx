import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import Button from "../atoms/Button";
import Checkbox from "./Checkbox";
import Counter from "../atoms/Counter";
import DeliveryDetailsModal from "./DeliveryDetailsModal";
import { Portal } from "react-native-portalize";
import { BasketContext } from "../../screens/BasketContext";
import { id } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";

const MainContainer = styled.ScrollView`
  background-color: white;
`;

const Header = styled.View`
  padding: 20px;
  background-color: white;
`;

const HeaderPrice = styled(CustomText)`
  font-size: 16px;
  color: #999;
  line-height: 30px;
`;

const HeaderSubtitle = styled(CustomText)`
  font-size: 14px;
  color: #666;
  line-height: 20px;
`;

const ChoiceContainer = styled.View`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom-width: 10px;
  border-bottom-color: #f0f0f0;
`;

const ChoiceRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ChoiceHeader = styled(CustomText)`
  margin-bottom: 30px;
`;

const PriceText = styled(CustomText)`
  font-size: 12px;
`;

const PromotionWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e9ffef;
  border-radius: 15px;
  padding: 10px;
  margin-top: 20px;
`;
const PromotionTextWrapper = styled.View`
  display: flex;
  justify-content: center;
`;
const Container = styled.View`
  margin-bottom: 20px;
`;
const ButtonCont = styled.View`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;
const Icon = styled.Image``;

const data = {
  sauces: {
    headerName: "Choose your sauce",
    options: [
      "Mariana Sauce",
      "Garlicky Sauce",
      "Pesto Sauce",
      "BBQ Sauce",
      "Buffalo Sauce",
    ],
  },
  sauceOnTheSide: {
    headerName: "Get your sauce on the side",
    options: ["No sauce on the side", "Sauce on the side"],
  },
  sizes: {
    headerName: "Choose your size",
    options: [
      {
        name: "Small 10” (6 Slices)",
        price: 4.0,
      },
      {
        name: "Medium 12” (8 Slices)",
        price: 4.0,
      },
      {
        name: "Large 14” (8 Slices)",
        price: 10.0,
      },
      {
        name: "Extra large 16” (12 Slices)",
        price: 15.0,
      },
      {
        name: "Super 20” (12 Slices)",
        price: 18.0,
      },
      {
        name: "24”",
        price: 25.0,
      },
    ],
  },
  crusts: {
    headerName: "Choose your crust",
    options: ["Regular Crust", "Corn Skinny Crust", "Thick Pan Crust"],
  },
  addOns: {
    headerName: "Choose your add-ons",
    options: [
      {
        name: "1 Side of Ranch Dressing",
        price: 0.5,
      },
      {
        name: "2 Sides of Ranch Dressing",
        price: 1.0,
      },
      {
        name: "Side of Marinara Sauce",
        price: 0.69,
      },
    ],
  },
  frequentlyBroughtTogether: {
    headerName: "Frequently brought together",
    options: ["Soda", "Cheeze Pizza", "Amigos Hawaiana Pizza"],
  },
};

const Choices = ({ choiceData, setSelectedOption, selections }) => {
  return (
    <ChoiceContainer>
      <ChoiceHeader>{choiceData.headerName}</ChoiceHeader>
      {choiceData.options.map((option, index) => (
        <ChoiceRow key={index}>
          <Checkbox
            label={option.name || option}
            isChecked={selections[choiceData.headerName] === index}
            onChange={() => setSelectedOption(choiceData.headerName, index)}
            isRounded={!option.price}
          />
          {option.price && (
            <PriceText type="Light">US${option.price} ea</PriceText>
          )}
        </ChoiceRow>
      ))}
    </ChoiceContainer>
  );
};

function OrderSelectionScreen() {
  const [selections, setSelections] = useState({});
  const [quantity, setQuantity] = useState(1);
  const categorySheetRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { addToBasket } = useContext(BasketContext);

  const dishPrice = 21;
  const totalPrice =
    quantity *
    (dishPrice +
      (data.sizes.options[selections["Choose your size"]]?.price || 0) +
      (data.addOns.options[selections["Choose your add-ons"]]?.price || 0));

  const handleAddToCart = () => {
    categorySheetRef.current?.open();
    const selectedItem = {
      id: Math.random().toString(),
      quantity: quantity,
      selections: { ...selections },
    };
    addToBasket(selectedItem);
  };

  const setSelectedOption = (category, optionIndex) => {
    setSelections((prevSelections) => {
      if (prevSelections[category] === optionIndex) {
        return {
          ...prevSelections,
          [category]: undefined,
        };
      }

      return {
        ...prevSelections,
        [category]: optionIndex,
      };
    });
  };

  return (
    <>
      <MainContainer>
        <Header>
          <CustomText size="large">
            Lanespan Pizza & Pub (Emeryville)
          </CustomText>
          <HeaderPrice>US$ 21.00</HeaderPrice>
          <HeaderSubtitle>
            Garlic,olive oil base, mozzarella, cremini mushrooms, ricotta,
            thyme, white truffle oil. Add arugula for an extra charge
          </HeaderSubtitle>
          <PromotionWrapper>
            <PromotionTextWrapper>
              <CustomText type="Regular">Promotion applied</CustomText>
              <CustomText type="Light">
                View basket for final discount
              </CustomText>
            </PromotionTextWrapper>
            <Icon source={require("../../images/promotIcon.png")} />
          </PromotionWrapper>
        </Header>
        <Container>
          <Choices
            choiceData={data.sauces}
            setSelectedOption={setSelectedOption}
            selections={selections}
          />
          <Choices
            choiceData={data.sauceOnTheSide}
            setSelectedOption={setSelectedOption}
            selections={selections}
          />
          <Choices
            choiceData={data.sizes}
            setSelectedOption={setSelectedOption}
            selections={selections}
          />
          <Choices
            choiceData={data.crusts}
            setSelectedOption={setSelectedOption}
            selections={selections}
          />
          <Choices
            choiceData={data.addOns}
            setSelectedOption={setSelectedOption}
            selections={selections}
          />
          <Choices
            choiceData={data.frequentlyBroughtTogether}
            setSelectedOption={setSelectedOption}
            selections={selections}
          />
          <ButtonCont>
            <Counter quantity={quantity} setQuantity={setQuantity} />
            <Button
              light={false}
              title={`Add to Cart - US$ ${totalPrice.toFixed(2)}`}
              onPress={() => handleAddToCart()}
            />
          </ButtonCont>
        </Container>
      </MainContainer>
      <Portal>
        <DeliveryDetailsModal
          isVisible={modalVisible}
          bottomSheetRef={categorySheetRef}
          modalHeight={750}
        />
      </Portal>
    </>
  );
}

export default OrderSelectionScreen;
