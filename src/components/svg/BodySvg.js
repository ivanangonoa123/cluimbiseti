import React from 'react'
import Svg, { Defs, Path, RadialGradient, Stop, Use, G } from 'react-native-svg'

class BodySvg extends React.PureComponent {
  render() {
    return (
    <Svg
      viewBox="195.666 282.069 234.948 244.734"
      width={230.95}
      height={240.73}
      {...this.props}
    >
      <Defs>
        <Path
          d="M312.14 523.8c-36.49 0-66.11-6.86-66.11-15.32s29.62-15.33 66.11-15.33c36.49 0 66.11 6.87 66.11 15.33s-29.62 15.32-66.11 15.32z"
          id="prefix__a"
        />
        <Path
          d="M312.14 507.81c-63.73 0-115.47-50.35-115.47-112.37s51.74-112.37 115.47-112.37 115.47 50.35 115.47 112.37-51.74 112.37-115.47 112.37z"
          id="prefix__b"
        />
        <RadialGradient
          id="prefix__c"
          gradientUnits="userSpaceOnUse"
          cx={309.59}
          cy={314.37}
          r={208.66}
        >
          <Stop offset="0%" stopColor="#89c2ff" />
          <Stop offset="100%" stopColor="#40408a" />
        </RadialGradient>
      </Defs>
      <Use xlinkHref="#prefix__a" opacity={0.54} />
      <Use
        xlinkHref="#prefix__a"
        opacity={0.54}
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <G>
        <Use xlinkHref="#prefix__b" fill="url(#prefix__c)" />
        <Use
          xlinkHref="#prefix__b"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
    </Svg>
    )
  }
}

export default BodySvg
