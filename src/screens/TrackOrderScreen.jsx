import React, { useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import styled from "styled-components";
import CustomText from "../components/atoms/CustomText";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import DeliveryDetails from "../components/organisms/DeliveryDetails";
import { Space } from "../components/atoms/Space";
import OrderSummary from "../components/atoms/OrderSummary";

const MainContainer = styled.ScrollView`
  background-color: white;
`;

const HeaderContainer = styled.View`
  display: flex;
  margin: 10px;
`;
const Header = styled.View`
  margin: 10px;
`;
const Tracking = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapImg = styled.Pressable``;
const Driver = styled.Image``;

const Container = styled.View`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const ShareCont = styled.View`
  margin: 20px 5px;
  flex-direction: row;
  justify-content: space-between;
`;
const ShareTextCont = styled.View``;

const TrackOrderScreen = () => {
  const navigation = useNavigation();

  const [progressIndex, setProgressIndex] = useState(0);
  const [imageChanged, setImageChanged] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressIndex((prevIndex) => {
        if (prevIndex >= 5) {
          return 0;
        }

        return prevIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progressIndex >= 3) {
      setImageChanged(true);
    }
  }, [progressIndex]);

  const handleMapImgPress = () => {
    navigation.navigate("TrackingMapScreen");
  };

  return (
    <MainContainer showsVerticalScrollIndicator={false}>
      <HeaderContainer>
        <Header>
          <CustomText type="Medium" size="large">
            Preparing your order...
          </CustomText>
          <CustomText type="Medium" size="small">
            Arriving at 10:15
          </CustomText>
        </Header>
        <Tracking>
          {[...Array(5)].map((_, i) => (
            <Progress.Bar
              key={i}
              progress={progressIndex > i ? 1 : 0}
              width={65}
              animated={true}
              color="#34A853"
              borderRadius={1}
              borderColor="#bbccc0"
            />
          ))}
        </Tracking>

        <ImageContainer>
          {imageChanged ? (
            <MapImg onPress={handleMapImgPress}>
              <Image source={require("../images/map.png")} />
              <Driver source={require("../images/driverImg.png")} />
            </MapImg>
          ) : (
            <Image source={require("../images/trackImg.png")} />
          )}
        </ImageContainer>
      </HeaderContainer>

      <Container>
        <DeliveryDetails />

        <ShareCont>
          <ShareTextCont>
            <CustomText type="Medium" size="medium">
              Share this delivery
            </CustomText>
            <CustomText type="Small" size="small">
              Let someone follow along
            </CustomText>
          </ShareTextCont>
          <Image source={require("../images/shateBtn.png")} />
        </ShareCont>

        {/* <Image
          source={require("../images/orderSummary.png")}
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
        /> */}
        <OrderSummary />

        <Image source={require("../images/inviteImg.png")} />
      </Container>
      <Space></Space>
    </MainContainer>
  );
};

export default TrackOrderScreen;
