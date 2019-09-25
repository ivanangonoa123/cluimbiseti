import React from 'react'
import Svg, { Defs, RadialGradient, Stop, Path, Use, G } from 'react-native-svg'

class SleepHatSvg extends React.PureComponent {
  render() {
    return (
    <Svg
      viewBox="175.091 169.731 239.895 159.851"
      width={215.89}
      height={133.85}
      {...this.props}
    >
      <Defs>
        <RadialGradient
          id="prefix__c"
          gradientUnits="userSpaceOnUse"
          cx={207.25}
          cy={209.92}
          r={58.95}
        >
          <Stop offset="0%" stopColor="#fff" />
          <Stop offset="100%" stopColor="#b1d4de" />
        </RadialGradient>
        <RadialGradient
          id="prefix__f"
          gradientUnits="userSpaceOnUse"
          cx={294.59}
          cy={212.96}
          r={243.48}
        >
          <Stop offset="0%" stopColor="#fff" />
          <Stop offset="100%" stopColor="#3890ab" />
        </RadialGradient>
        <Path
          d="M222.42 211.28c-15.2-4.44-29.83 2.61-36.21 23.65-4.25 14.02 3.57 21.17 23.45 21.44.66-.32 1.07-.52 1.23-.6a30.954 30.954 0 0016.81-22.16c2.43-13.15.67-20.6-5.28-22.33z"
          id="prefix__b"
        />
        <Path
          d="M363.29 208.9c18.94 45.78 31.5 77.35 37.7 94.72-22.29 3.35-36.22 5.45-41.79 6.28-30.84 4.64-62.18 4.9-93.1.75-5.95-.8-20.82-2.79-44.62-5.98 29.57-36.05 48.05-58.57 55.44-67.58 5.93-7.22-.51-17.89-9.66-16-7.84 1.62-27.41 5.66-58.74 12.12 84.24-61.98 135.83-70.09 154.77-24.31z"
          id="prefix__e"
        />
      </Defs>
      <Path
        d="M222.42 211.28c-15.2-4.44-29.83 2.61-36.21 23.65-4.25 14.02 3.57 21.17 23.45 21.44.66-.32 1.07-.52 1.23-.6a30.954 30.954 0 0016.81-22.16c2.43-13.15.67-20.6-5.28-22.33z"
        fill="#fff"
        filter="url(#prefix__a)"
      />
      <Use xlinkHref="#prefix__b" fill="url(#prefix__c)" />
      <G>
        <Use
          xlinkHref="#prefix__b"
          fillOpacity={0}
          stroke="#7ba3b0"
          strokeWidth={2}
        />
      </G>
      <G>
        <Path
          d="M363.29 208.9c18.94 45.78 31.5 77.35 37.7 94.72-22.29 3.35-36.22 5.45-41.79 6.28-30.84 4.64-62.18 4.9-93.1.75-5.95-.8-20.82-2.79-44.62-5.98 29.57-36.05 48.05-58.57 55.44-67.58 5.93-7.22-.51-17.89-9.66-16-7.84 1.62-27.41 5.66-58.74 12.12 84.24-61.98 135.83-70.09 154.77-24.31z"
          fill="#fff"
          filter="url(#prefix__d)"
        />
        <Use xlinkHref="#prefix__e" fill="url(#prefix__f)" />
        <G>
          <Use
            xlinkHref="#prefix__e"
            fillOpacity={0}
            stroke="#78a1ae"
            strokeWidth={2}
          />
        </G>
      </G>
    </Svg>
    )
  }
}

export default SleepHatSvg
