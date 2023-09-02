import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeScreenIcon({ color }) {
  return (
    <Svg
      width={20}
      height={23}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M.043 5.747l.127 16.4 7.022-.055-.062-8 5.37-.041.061 8 6.609-.052-.127-16.4L9.5.074.043 5.747z"
        fill={color}
      />
    </Svg>
  );
}

export default HomeScreenIcon;
