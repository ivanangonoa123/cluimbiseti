
import React from 'react';
import Svg, { Defs, Path, RadialGradient, Stop, Use } from 'react-native-svg'

class EggSvg extends React.Component { 
    render() {
        return (
            <Svg
            viewBox="-49 -0.5 212.477 259.239"
            width={112.48}
            height={168.55}
            {...this.props}
            >
            <Defs>
              <Path
                d="M100.3 156.57c0 6.61-19.74 11.98-44.06 11.98-24.32 0-44.06-5.37-44.06-11.98 0-6.62 19.74-11.99 44.06-11.99 24.32 0 44.06 5.37 44.06 11.99z"
                id="prefix__a"
              />
              <Path
                d="M112.48 79.37c0 43.8-25.2 79.37-56.24 79.37C25.2 158.74 0 123.17 0 79.37 0 35.56 25.2 0 56.24 0c31.04 0 56.24 35.56 56.24 79.37z"
                id="prefix__b"
              />
              <RadialGradient
                id="prefix__c"
                gradientUnits="userSpaceOnUse"
                cx={56.24}
                cy={0}
                r={92.99}
              >
                <Stop offset="0%" stopColor="#ffe49b" />
                <Stop offset="100%" stopColor="#de8841" />
              </RadialGradient>
            </Defs>
            <Use xlinkHref="#prefix__a" opacity={0.39} />
            <Use xlinkHref="#prefix__b" fill="url(#prefix__c)" />
          </Svg>
        )
    }
};

  export default EggSvg;
