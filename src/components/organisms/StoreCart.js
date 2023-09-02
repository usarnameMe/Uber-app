import React, { useContext } from "react";
import {
  SectionList,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import styled from "styled-components/native";
import { StoreScreenData } from "../../data/appData";
import CustomText from "../atoms/CustomText";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BasketContext } from "../../screens/BasketContext";

const Container = styled.View`
  /* flex: 1; */
`;

const SectionHeader = styled(CustomText)`
  /* font-size: 24px;
  font-weight: bold;
  padding: 10px; */
`;

const ItemContainer = styled.Pressable`
  flex: 1;
  width: 150px;
  margin: 10px;
  background-color: #f8f8f8;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 100px;
`;

const PlusImage = styled.Image`
  width: 24px;
  height: 24px;
`;

const ImageViewPlus = styled.View`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: lightgrey;
  /* border-radius: 5px;
  border-bottom-color: lightgray;
  border-bottom-right-radius: 1px; */
  padding: 5px;
  elevation: 2;
`;

const TextView = styled.View`
  padding: 0 10px;
  overflow: hidden;
`;

const Title = styled(CustomText)`
  font-weight: bold;
  font-size: 16px;
  color: black;
`;

const Price = styled(CustomText)`
  font-weight: bold;
  font-size: 14px;
  color: black;
`;

const Subtitle = styled(CustomText)`
  font-size: 12px;
  color: grey;
`;

const Item = ({ item, onPress }) => (
  <ItemContainer onPress={() => onPress(item.id)}>
    <CardImage source={item.url} />
    <ImageViewPlus>
      <PlusImage source={require("../../images/plusBtn.png")} />
    </ImageViewPlus>
    <TextView>
      <Title numberOfLines={2}>{item.title}</Title>
      <Price>{item.price}</Price>
      <Subtitle numberOfLines={1}>{item.subTitle}</Subtitle>
    </TextView>
  </ItemContainer>
);

const StoreCart = ({ onPress, data, title }) => {
  const { setBasket } = useContext(BasketContext);
  const navigation = useNavigation();
  const addToCart = (item) => {
    setBasket((preItem) => [...preItem, item]);
    navigation.navigate("Shop");
  };

  return (
    // <Container>
    //   <SectionList
    //     sections={StoreScreenData}
    //     keyExtractor={(item, index) => item + index}
    //     renderItem={({ item, section }) => (
    //       <FlatList
    //         horizontal
    //         data={section.data}
    //         keyExtractor={(item) => item.id.toString()}
    //         renderItem={({ item }) => <Item item={item} onPress={onPress} />}
    //         showsHorizontalScrollIndicator={false}
    //       />
    //     )}
    //     renderSectionHeader={({ section: { headerTitle } }) => (
    //       <SectionHeader>{headerTitle}</SectionHeader>
    //     )}
    //     showsVerticalScrollIndicator={false}
    //   />
    // </Container>
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => {
          return (
            <View style={styles.box}>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  addToCart(item);
                }}>
                <Ionicons name="add" color={"#000000"} size={30} />
              </Pressable>
              <Image style={styles.img} source={item.url} />
              <Text style={styles.productNameStyle}>{item.title}</Text>
              <Text style={styles.font14}>{item.price}</Text>
              <Text style={[styles.font14, { color: "#6B6B6B" }]}>
                {item.subTitle}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default StoreCart;

const styles = StyleSheet.create({
  box: {
    width: 130,
    justifyContent: "center",
    // alignItems: "center",
    marginVertical: 20,
  },
  title: {
    color: "#000000",
    fontSize: 18,
    fontFamily: "Uber-Medium",
    marginBottom: 15,
  },
  img: {
    width: 100,
    height: 90,
    marginBottom: 10,
    resizeMode: "contain",
  },
  productNameStyle: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Uber-Medium",
    textAlign: "left",
  },
  font14: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Uber-Regular",
    textAlign: "left",
  },
  btn: {
    backgroundColor: "#ffffff",
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    borderRadius: 50,
    position: "absolute",
    top: -25,
    zIndex: 1,
    alignSelf: "flex-end",
  },
});
