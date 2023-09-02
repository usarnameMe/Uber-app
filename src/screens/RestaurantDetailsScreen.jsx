import React, { useState } from "react";
import { TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { SmallSpace } from "../components/atoms/Space";

import RestaurantDetails from "../components/organisms/RestaurantDetails";
import * as ROUTES from "../constants/routes";
import CustomText from "../components/atoms/CustomText";

const data = {
  restaurant: {
    id: 0,
    title: "Lanespan Pizza & Pub",
    subtitle: "(Emeryville) 4.6 (200+ ratings) Pizza $$ Open until 3:00 AM",
    imageUrl1: require("../images/details1.png"),
    imageUrl2: require("../images/smallMap.png"),
  },
  categories: [
    {
      id: 0,
      title: "Most Popular",
      dishes: [
        {
          id: 0,
          name: "McMushroom Pizza",
          imageUrl: require("../images/details2.png"),
          desc: "Garlic,olive oil base, mozzarella, cremini mushrooms, ricotta, thyme,white truffle oil. Add arugula for an extra charge.",
          price: "US$21.00",
        },
        {
          id: 1,
          name: "Broken Mush Pizza",
          imageUrl: require("../images/details3.png"),
          desc: "Hot peppers, mozzarella, spicy marinara, spicy soppressata, and picante infused olive oil.",
          price: "US$18.00",
        },
        {
          id: 2,
          name: "Margarita Pizza",
          imageUrl: require("../images/details4.png"),
          desc: "Whole milk mozzarella pearls, mozzarella, marinara, shaved Parmesan, fresh basil, and extra virgin olive oil.",
          price: "US$20.00",
        },
        {
          id: 3,
          name: "18” Round Pizza",
          desc: "Starts as delicious cheese. Up to 4 additional toppings (no more than 2 meat toppings).",
          price: "US$26.00",
        },
      ],
    },
    {
      id: 1,
      title: "Picked for you",
      dishes: [
        {
          id: 4,
          name: "Happy Birthday Pizza",
          desc: "Pepperoni, marinara, mozzarella, garlic, and extra virgin olive oil.",
          price: "US$27.00",
        },
        {
          id: 5,
          name: "Little Caesar Salad (Vegan)",
          desc: "Little Gems, House Made Vegan Dressing, Croutons, Nutritional Yeast, Baked Capers.",
          price: "US$18.00",
        },
        {
          id: 6,
          name: "Rocket Salad",
          desc: "Arugula, shaved fennel, vinegar and olive oil, pecorino, and Spanish Marcona almonds.",
          price: "US$10.00",
        },
      ],
    },
    {
      id: 2,
      title: "Starters",
      dishes: [
        {
          id: 7,
          name: "Garlic Knots",
          imageUrl: require("../images/details5.png"),
          desc: "Fluffy and flavorful garlic knots. Priced by add-ons.",
        },
      ],
    },
    {
      id: 3,
      title: "Salads",
      dishes: [
        {
          id: 8,
          name: "Little Caesar Salad (Vegan)",
          desc: "Little Gems, House Made Vegan Dressing, Croutons, Nutritional Yeast, Baked Capers.",
          price: "US$18.00",
        },
        {
          id: 9,
          name: "Rocket Salad",
          desc: "Arugula, shaved fennel, vinegar and olive oil, pecorino, and Spanish Marcona almonds.",
          price: "US$10.00",
        },
      ],
    },
    {
      id: 4,
      title: "Our Special Pizza",
      subtitle: "Try our unique and delicious pizza creations",
      dishes: [
        {
          id: 10,
          name: "McMushroom Pizza",
          imageUrl: require("../images/details6.png"),
          desc: "Garlic, olive oil base, mozzarella, cremini mushrooms, ricotta, thyme, white truffle oil. Add arugula for an extra charge.",
          price: "US$21.00",
        },
        {
          id: 11,
          name: "Broken Mush Pizza",
          imageUrl: require("../images/details7.png"),
          desc: "Hot peppers, mozzarella, spicy marinara, spicy soppressata, and picante infused olive oil.",
          price: "US$18.00",
        },
        {
          id: 12,
          name: "Margarita Pizza",
          imageUrl: require("../images/details8.png"),
          desc: "Whole milk mozzarella pearls, mozzarella, marinara, shaved Parmesan, fresh basil, and extra virgin olive oil.",
          price: "US$20.00",
        },
        {
          id: 13,
          name: "Happy Birthday Pizza",
          desc: "Pepperoni, marinara, mozzarella, garlic, and extra virgin olive oil.",
          price: "US$27.00",
        },
      ],
    },
    {
      id: 5,
      title: "Miscellaneous",
      subtitle: "Various side items and extras",
      dishes: [
        {
          id: 14,
          name: "Garlic Knots",
          desc: "Fluffy and flavorful garlic knots.",
          price: "US$1.50",
        },
        {
          id: 15,
          name: "Marinara",
          desc: "Classic marinara sauce.",
          price: "US$1.00",
        },
        {
          id: 16,
          name: "Balsamic Glaze",
          desc: "Rich and tangy balsamic glaze.",
          price: "US$1.50",
        },
      ],
    },
  ],
};

const Container = styled(ScrollView)`
  margin-top: 35px;
  background-color: #ffffff;
`;

const HeaderContainer = styled.View`
  position: relative;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  background-color: white;
  border-radius: 25px;
`;

const ButtonContainer = styled.View`
  background-color: #d6d6d6;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px 35px;
  border-radius: 30px;
  padding: 5px;
`;

const DeliveryButton = styled(TouchableOpacity)`
  background-color: ${({ active }) => (active ? "#FFFFFF" : "transparent")};
  padding: 10px 50px;
  border-radius: 30px;
`;

const PickupButton = styled(TouchableOpacity)`
  background-color: ${({ active }) => (active ? "#FFFFFF" : "transparent")};
  padding: 10px 50px;
  border-radius: 30px;
`;

const Footer = styled.View`
  align-items: center;
  margin: 20px 0;
`;

const Header = styled.View`
  display: flex;
  justify-content: center;
  margin: 15px;
`;
const HeartButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 70px;
  padding: 5px;
  background-color: white;
  border-radius: 25px;
`;

const MoreButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: white;
  border-radius: 25px;
`;

const HeaderPrice = styled(CustomText)``;
const HeaderSubtitle = styled(CustomText)``;

const FooterText = styled.Text`
  color: green;
  font-weight: bold;
`;

const RestaurantDetailsScreen = () => {
  const navigation = useNavigation();

  const [isDeliveryActive, setIsDeliveryActive] = useState(true);
  const [isPickupActive, setIsPickupActive] = useState(false);

  const handleDeliveryPress = () => {
    setIsDeliveryActive(true);
    setIsPickupActive(false);
  };

  const handlePickupPress = () => {
    setIsDeliveryActive(false);
    setIsPickupActive(true);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderImage source={data.restaurant.imageUrl1} resizeMode="cover" />
        <SmallSpace></SmallSpace>
        <HeaderImage source={data.restaurant.imageUrl2} resizeMode="cover" />
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" style={styles.icon} />
        </BackButton>
        <HeartButton onPress={() => console.log("Heart Icon pressed")}>
          <Icon
            name="heart-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
        </HeartButton>
        <MoreButton onPress={() => console.log("More Icon pressed")}>
          <Icon
            name="ellipsis-horizontal"
            size={24}
            color="black"
            style={styles.icon}
          />
        </MoreButton>
      </HeaderContainer>
      <Header>
        <CustomText size="large" type="Bold">
          Lanespan Pizza & Pub{" "}
        </CustomText>
        <CustomText size="large" type="Bold">
          (Emeryville)
        </CustomText>
        <HeaderPrice>★ 4.6 (200+ ratings) • Pizza • $$</HeaderPrice>
        <HeaderSubtitle>Open until 3:00 AM</HeaderSubtitle>
        <CustomText type="Light">Tap for hours info and more</CustomText>
      </Header>

      <ButtonContainer>
        <DeliveryButton active={isDeliveryActive} onPress={handleDeliveryPress}>
          <Text
            style={isDeliveryActive ? styles.activeText : styles.inactiveText}
          >
            Delivery
          </Text>
        </DeliveryButton>
        <PickupButton active={isPickupActive} onPress={handlePickupPress}>
          <Text
            style={isPickupActive ? styles.activeText : styles.inactiveText}
          >
            Pickup
          </Text>
        </PickupButton>
      </ButtonContainer>

      <RestaurantDetails
        data={data}
        onPress={() =>
          navigation.navigate(ROUTES.ORDER_SELECTION_SCREEN, {
            restaurant: data.restaurant,
          })
        }
      />

      <Footer>
        <TouchableOpacity>
          <FooterText>Save US$25. Conditions apply.</FooterText>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 5,
  },
  activeText: {
    color: "#000000",
  },
  inactiveText: {
    color: "#000000",
  },
});

export default RestaurantDetailsScreen;
