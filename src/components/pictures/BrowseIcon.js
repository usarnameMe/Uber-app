import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BrowseIcon(props) {
  return (
    <Svg
      width={30}
      height={20}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.514 13.698l-.236.343.295.294 3.72 3.72-1.237 1.238-3.72-3.72-.295-.295-.343.236c-1.41.97-3.072 1.579-4.902 1.579-4.538 0-8.296-3.758-8.296-8.297C10.5 4.258 14.258.5 18.796.5c4.539 0 8.297 3.758 8.297 8.296 0 1.83-.61 3.492-1.579 4.902zM18.796 2.37a6.506 6.506 0 00-6.518 6.519 6.506 6.506 0 006.518 6.518 6.507 6.507 0 006.519-6.518c0-3.61-2.91-6.519-6.519-6.519z"
        fill="#B5B5B5"
        stroke="#B5B5B5"
      />
      <Path stroke="#B5B5B5" strokeWidth={4} d="M0 2.54547L9.09091 2.54547" />
      <Path stroke="#B5B5B5" strokeWidth={4} d="M0 8.90912L6.36364 8.90912" />
      <Path stroke="#B5B5B5" strokeWidth={4} d="M0 15.2727L9.09091 15.2727" />
    </Svg>
  );
}

export default BrowseIcon;
