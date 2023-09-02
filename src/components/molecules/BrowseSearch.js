import React from "react";
import CustomText from "../atoms/CustomText";
import styled from "styled-components";

const MainCont = styled.View``;

const RecentCont = styled.View``;
const TopCont = styled.View``;

const Title = styled(CustomText)``;

function BrowseSearch() {
  return (
    <MainCont>
      <RecentCont>
        <Title>Recent searches</Title>
      </RecentCont>
      <TopCont>
        <Title>Top Categories</Title>
      </TopCont>
    </MainCont>
  );
}

export default BrowseSearch;
