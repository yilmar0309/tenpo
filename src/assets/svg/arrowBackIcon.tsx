import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowBackIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10 19L3 12M3 12L10 5M3 12L21 12"
        stroke="#8054C7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
