import React from "react";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";

const MainContainer = styled.View`
  padding-top: 15px;
  border-bottom-color: #e8e8e8;
  border-bottom-width: 5px;
  border-top-color: #e8e8e8;
  border-top-width: 5px;
`;

const DetailsContainer = styled.View`
  padding-top: 15px;
  padding-bottom: 10px;
  border-bottom-color: #e8e8e8;
  border-bottom-width: 2px;
`;

const Title = styled(CustomText)`
  color: gray;
`;

const Subtitle = styled(CustomText)`
  font-weight: bold;
`;

const DetailItem = ({ title, subtitle }) => (
  <DetailsContainer>
    <Title type="Medium" size="medium">
      {title}
    </Title>
    <Subtitle type="Medium" size="small">
      {subtitle}
    </Subtitle>
  </DetailsContainer>
);

const DeliveryDetails = () => (
  <MainContainer>
    <DetailItem
      title="Address"
      subtitle="Bay Area, San Francisco, California, USA"
    />
    <DetailItem title="Type" subtitle="Leave at door" />
    <DetailItem
      title="Instructions"
      subtitle="Please knock to let me know it has arrived and then leave it at the doorstep"
    />
    <DetailItem title="Service" subtitle="Standard" />
  </MainContainer>
);

export default DeliveryDetails;
