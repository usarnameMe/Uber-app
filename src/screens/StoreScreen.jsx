import React, { useEffect, useState } from "react";
import {
  Pressable,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import * as Progress from "react-native-progress";
import { Feather, Ionicons } from "@expo/vector-icons";
import CustomText from "../components/atoms/CustomText";
import CategoryButton from "../components/atoms/CategoryButton";
import Screen from "../components/Screen";
import StoreCart from "../components/organisms/StoreCart";
import CategoriesCart from "../components/organisms/CateoriesCart";
import * as ROUTES from "../constants/routes";
import { StoreScreenData } from "../data/appData";

const Container = styled(Screen)`
  flex: 1;
`;
const Wrapper = styled.View`
  padding: 5%;
`;
const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const LeftHeader = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: 5px;
`;
const RightHeader = styled.View`
  align-items: center;
  flex-direction: row;
`;
const SearchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  height: 45px;
  margin: 5px;
  background-color: #eeeeee;
`;
const SearchIconCont = styled.View`
  margin-left: 10px;
`;
const InputText = styled.TextInput`
  font-weight: 500;
  font-size: 18px;
`;
const TimePrice = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
const Time = styled.View`
  align-items: center;
  flex-direction: row;
`;
const Price = styled.View`
  align-items: center;
  flex-direction: row;
`;
const SpinnerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const CategoryView = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  margin-bottom: 10px;
  /* margin: 2% 0; */
`;
const SectionTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const btns = [
  { title: "Featured", value: 0 },
  { title: "Categories", value: 1 },
  { title: "Orders", value: 2 },
];

const StoreScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(1);

  const featuredData = [
    {
      headerTitle: "Fruits & Vegetables",
      data: [
        {
          id: 0,
          url: require("../images/store1.png"),
          title: "Organic Banana",
          subTitle: "1 banana",
          price: "$0.27",
        },
        {
          id: 1,
          url: require("../images/store2.png"),
          title: "Medium Hass Avocado",
          subTitle: "1 avocado",
          price: "$2.21",
        },
        {
          id: 3,
          url: require("../images/store3.png"),
          title: "Medium Hass Avocado",
          subTitle: "1 avocado",
          price: "$2.21",
        },
      ],
    },
    {
      headerTitle: "Beverages",
      data: [
        {
          id: 4,
          url: require("../images/store4.png"),
          title: "Coca-Cola Zero Sugar Cola Soda",
          subTitle: "12 x 12 fl oz",
          price: "$9.89",
        },
        {
          id: 5,
          url: require("../images/store5.png"),
          title: "Simply Pulp Free Orange Juice",
          subTitle: "52 fl oz",
          price: "$5.49",
        },
        {
          id: 6,
          url: require("../images/store6.png"),
          title: "Simply Pulp Free Orange Juice",
          subTitle: "52 fl oz",
          price: "$5.49",
        },
      ],
    },
    {
      headerTitle: "Frozen Foods",
      data: [
        {
          id: 7,
          url: require("../images/store7.png"),
          title: "T.G.I Friday's Boneless Chicken Bites",
          subTitle: "15 oz",
          price: "$10.44",
        },
        {
          id: 8,
          url: require("../images/store8.png"),
          title: "Apple and Maple Frozen Sausages",
          subTitle: "55 fl oz",
          price: "$7.69",
        },
        {
          id: 9,
          url: require("../images/store9.png"),
          title: "T.G.I Friday's Boneless Chicken Bites",
          subTitle: "15 oz",
          price: "$10.44",
        },
      ],
    },
    {
      headerTitle: "Pantry & Groceries",
      data: [
        {
          id: 10,
          url: require("../images/store10.png"),
          title: "Doritos Nacho Cheese",
          subTitle: "9.3 oz",
          price: "$6.15",
        },
        {
          id: 11,
          url: require("../images/store11.png"),
          title: "Wheat Sundried Tomato &...",
          subTitle: "8.5 oz",
          price: "$5.49",
        },
        {
          id: 12,
          url: require("../images/store12.png"),
          title: "Doritos Nacho Cheese",
          subTitle: "9.3 oz",
          price: "$6.15",
        },
      ],
    },
    {
      headerTitle: "Meat Seafood & Plant-Based",
      data: [
        {
          id: 13,
          url: require("../images/store13.png"),
          title: "Signature Farms Boneless Skinless Chicken",
          subTitle: "approx 1.5 lbs; p...",
          price: "$11.54",
        },
        {
          id: 14,
          url: require("../images/store10.png"),
          title: "Boar's Head Turkey Honey Maple Glazed",
          subTitle: "12 oz",
          price: "$7.69",
        },
        {
          id: 15,
          url: require("../images/store15.png"),
          title: "Signature Farms Boneless Skinless Chicken",
          subTitle: "approx 1.5 lbs; p...",
          price: "$11.54",
        },
      ],
    },
    {
      headerTitle: "Cheese",
      data: [
        {
          id: 16,
          url: require("../images/store16.png"),
          title: "Open Nature Vegan non-Dairy",
          subTitle: "8 oz",
          price: "$5.49",
        },
        {
          id: 17,
          url: require("../images/store19.png"),
          title: "Prime Taglio Herb & Garlic Brie Cheese",
          subTitle: "approx 0.5 lb",
          price: "$7.70",
        },
        {
          id: 18,
          url: require("../images/store18.png"),
          title: "Open Nature Vegan non-Dairy",
          subTitle: "8 oz",
          price: "$5.49",
        },
      ],
    },
  ];
  const categoriesData = [
    {
      id: 1,
      title: "Fruits & Vegetables",
      image: require("../images/small1.png"),
    },
    {
      id: 2,
      title: "Beverages",
      image: require("../images/small2.png"),
    },
    {
      id: 3,
      title: "Frozen Food",
      image: require("../images/small3.png"),
    },
    {
      id: 4,
      title: "Pantry & Groceries",
      image: require("../images/small4.png"),
    },
    {
      id: 5,
      title: "Snacks",
      image: require("../images/small5.png"),
    },
    {
      id: 6,
      title: "Meat, Seafood & Plant-Based",
      image: require("../images/small6.png"),
    },
    {
      id: 7,
      title: "Cheese",
      image: require("../images/small7.png"),
    },
    {
      id: 8,
      title: "Bread",
      image: require("../images/small8.png"),
    },
    {
      id: 9,
      title: "Milk",
      image: require("../images/small9.png"),
    },
    {
      id: 10,
      title: "Canned Products",
      image: require("../images/small10.png"),
    },
    {
      id: 11,
      title: "Home",
      image: require("../images/small11.png"),
    },
    {
      id: 12,
      title: "Breakfast",
      image: require("../images/small12.png"),
    },
    {
      id: 13,
      title: "Sweets & Chocolates",
      image: require("../images/small13.png"),
    },
    {
      id: 14,
      title: "Yogurt",
      image: require("../images/small14.png"),
    },
    {
      id: 15,
      title: "Prepared Foods",
      image: require("../images/small15.png"),
    },
  ];
  const ordersData = [];
  const [data, setData] = useState(featuredData);

  const handlePress = (value) => {
    setSelectedCategory(value);
  };

  const handleItemPress = (item) => {
    console.log("Pessed!");
  };
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Feather name="arrow-left" size={26} color="black" />
          </Pressable>
          <Text style={[styles.title, { marginLeft: 10 }]}>Safeway</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Pressable style={{ marginRight: 15 }}>
            <Ionicons name="person" size={24} />
          </Pressable>
          <Pressable>
            <Ionicons name="cart" size={26} />
          </Pressable>
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>
        <View style={{ position: "absolute", zIndex: 1, top: 10, left: 5 }}>
          <Ionicons name="search" size={20} color="black" />
        </View>
        <TextInput
          style={styles.inputBox}
          placeholder="Search stores and produ..."
        />
      </View>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="time" size={26} />
          <Text style={[styles.normalTextStyle, { left: 5 }]}>
            In 60 minutes
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="logo-euro" size={20} />
          <Text style={[styles.normalTextStyle, { left: 5 }]}>
            Pricing and Fees
          </Text>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <Pressable
          style={[
            styles.tabBox,
            { backgroundColor: active === 1 ? "#000000" : "#ffffff" },
          ]}
          onPress={() => {
            setActive(1);
            setData(featuredData);
          }}
        >
          <Text
            style={[
              styles.font14,
              { color: active === 1 ? "#ffffff" : "#000000" },
            ]}
          >
            Featured
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.tabBox,
            { backgroundColor: active === 2 ? "#000000" : "#ffffff" },
          ]}
          onPress={() => {
            setActive(2);
            setData(categoriesData);
          }}
        >
          <Text
            style={[
              styles.font14,
              { color: active === 2 ? "#ffffff" : "#000000" },
            ]}
          >
            Categories
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.tabBox,
            { backgroundColor: active === 3 ? "#000000" : "#ffffff" },
          ]}
          onPress={() => {
            setActive(3);
            setData(ordersData);
          }}
        >
          <Text
            style={[
              styles.font14,
              { color: active === 3 ? "#ffffff" : "#000000" },
            ]}
          >
            Orders
          </Text>
        </Pressable>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ height: 150, marginBottom: 15 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
          >
            <View style={{ marginRight: 30 }}>
              <Image
                style={styles.img}
                source={require("../images/banner.png")}
              />
              <Text
                style={[
                  styles.font14,
                  {
                    color: "#ffffff",
                    position: "absolute",
                    top: "75%",
                    zIndex: 1,
                    alignSelf: "center",
                  },
                ]}
              >
                $0 Delivery Fee with selected yogurt products
              </Text>
            </View>
            <View style={{}}>
              <Image
                style={styles.img}
                source={require("../images/banner.png")}
              />
              <Text
                style={[
                  styles.font14,
                  {
                    color: "#ffffff",
                    position: "absolute",
                    top: "75%",
                    zIndex: 1,
                    alignSelf: "center",
                  },
                ]}
              >
                $0 Delivery Fee with selected yogurt products
              </Text>
            </View>
          </ScrollView>
        </View>
        {isLoading ? (
          <SpinnerView>
            <Progress.CircleSnail size={50} color={["black"]} />
          </SpinnerView>
        ) : data.length === 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <CustomText>No recent orders</CustomText>
            <CustomText type="Light">Your recent orders will appear</CustomText>
            <CustomText type="Light"> here.</CustomText>
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return active == 1 ? (
                <StoreCart
                  data={item.data}
                  title={item.headerTitle}
                  onPress={() => handleItemPress(item)}
                />
              ) : (
                <CategoriesCart
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  onPress={() => handleItemPress(item)}
                />
              );
            }}
            keyExtractor={(item) =>
              item.id ? item.id.toString() : Math.random().toString()
            }
            showsVerticalScrollIndicator={false}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: "#000000",
    fontSize: 20,
    fontFamily: "Uber-Medium",
  },
  inputBox: {
    height: 44,
    backgroundColor: "#EEEEEE",
    color: "#000000",
    fontFamily: "Uber-Medium",
    paddingHorizontal: 30,
  },
  normalTextStyle: {
    fontFamily: "Uber-Regular",
    fontSize: 16,
    color: "#000000",
  },
  tabContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  tabBox: {
    width: 100,
    height: 40,
    backgroundColor: "#000",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  font14: {
    fontFamily: "Uber-Medium",
    fontSize: 14,
  },
  img: {
    height: 150,
  },
});
