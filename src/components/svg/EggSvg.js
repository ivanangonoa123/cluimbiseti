import React from 'react';
import Svg, { Defs, Path, RadialGradient, Stop, Use, G } from 'react-native-svg'

class EggSvg extends React.Component {
    state = {
      cracks: 0
    }

    crack = () => {
      this.setState({
        cracks: ++this.state.cracks
      })
    }

    render() {
        return (
          <Svg
            viewBox="234.813 226.641 172.374 258.195"
            width={168.37}
            height={254.19}
            {...this.props}
          >
          <Defs>
            {
              this.state.cracks >= 1 && 
              <Path
                d="M305.1 247.89l2.68-7.19 16.27-10.49-18.95 17.68z"
                id="prefix__i"
              />
            }
            {
              this.state.cracks >= 2 &&
              <Path
                d="M346.43 379.51l13.78 6.2-14.69-9.57.91 3.37z"
                id="prefix__p"
              />
            }
            {
              this.state.cracks >= 3 &&
              <Path
                d="M333.02 265.48l1.76-11.49-11.15-26.35 9.39 37.84z"
                id="prefix__d"
              />
            }
            {
              this.state.cracks >= 4 &&
              <Path
                d="M331.08 259.59l-11.78 35.13 16.82-39.33-5.04 4.2z"
                id="prefix__e"
              />
            }
            {
              this.state.cracks >= 5 &&
              <Path
                d="M318.02 298.33L332 328.41l-11.86-37.71-2.12 7.63z"
                id="prefix__f"
              />
            }
            {
              this.state.cracks >= 6 &&
              <Path
                d="M328.58 323.4l-13.15 15.97 17.93-15.96-4.78-.01z"
                id="prefix__g"
              />
            }
            {
              this.state.cracks >= 7 &&
              <Path
                d="M321.32 297.82l-13.98 30.09 11.86-37.72 2.12 7.63z"
                id="prefix__h"
              />
            }
            {
              this.state.cracks >= 8 &&
              <Path
                d="M308.9 244.44l.44 17.07-2.91-20.55 2.47 3.48z"
                id="prefix__j"
              />
            }
            {
              this.state.cracks >= 9 &&
              <Path
                d="M309.44 263.29l-15.62 5.12 15.81-8.65-.19 3.53z"
                id="prefix__k"
              />
            }
            {
              this.state.cracks >= 10 &&
              <Path
                d="M307.35 261.81l2.97 16.16.04-18.02-3.01 1.86z"
                id="prefix__l"
              />
            }
            {
              this.state.cracks >= 11 &&
              <Path
                d="M339.5 338.61l-.9-8.44-12.79-16.52 13.69 24.96z"
                id="prefix__m"
              />
            }
            {
              this.state.cracks >= 12 &&
              <Path
                d="M337.03 334.81l-1.76 27 4.53-30.91-2.77 3.91z"
                id="prefix__n"
              />
            }
            {
              this.state.cracks >= 13 &&
              <Path
                d="M335.04 364.6l15.49 18.63-15.42-24.41-.07 5.78z"
                id="prefix__o"
              />
            }
            {
              this.state.cracks >= 14 &&
              <Path
                d="M337.28 363.62l-4.26 23.85 1.34-28.84 2.92 4.99z"
                id="prefix__q"
              />
            }
            {
              this.state.cracks >= 15 &&
              <Path
                d="M320 481.84c-36.41 0-65.95-8.04-65.95-17.94 0-9.91 29.54-17.95 65.95-17.95 36.41 0 65.95 8.04 65.95 17.95 0 9.9-29.54 17.94-65.95 17.94z"
                id="prefix__a"
              />
            }
            <Path
              d="M320 467.15c-46.46 0-84.19-53.24-84.19-118.81 0-65.58 37.73-118.81 84.19-118.81s84.19 53.23 84.19 118.81c0 65.57-37.73 118.81-84.19 118.81z"
              id="prefix__b"
            />
            <RadialGradient
              id="prefix__c"
              gradientUnits="userSpaceOnUse"
              cx={320}
              cy={229.53}
              r={139.2}
            >
              <Stop offset="0%" stopColor="#ffe49b" />
              <Stop offset="100%" stopColor="#de8841" />
            </RadialGradient>
          </Defs>
          <Use xlinkHref="#prefix__a" opacity={0.71} />
          <Use
            xlinkHref="#prefix__a"
            opacity={0.71}
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
          <Use xlinkHref="#prefix__b" fill="url(#prefix__c)" />
          <Use
            xlinkHref="#prefix__b"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
          <Use xlinkHref="#prefix__d" fill="#994b09" />
          <Use xlinkHref="#prefix__e" fill="#994b09" />
          <Use xlinkHref="#prefix__f" fill="#994b09" />
          <Use xlinkHref="#prefix__g" fill="#994b09" />
          <Use xlinkHref="#prefix__h" fill="#994b09" />
          <Use xlinkHref="#prefix__i" fill="#994b09" />
          <Use xlinkHref="#prefix__j" fill="#994b09" />
          <Use xlinkHref="#prefix__k" fill="#994b09" />
          <Use xlinkHref="#prefix__l" fill="#994b09" />
          <Use xlinkHref="#prefix__m" fill="#994b09" />
          <Use xlinkHref="#prefix__n" fill="#994b09" />
          <Use xlinkHref="#prefix__o" fill="#994b09" />
          <G>
            <Use xlinkHref="#prefix__p" fill="#994b09" />
          </G>
          <G>
            <Use xlinkHref="#prefix__q" fill="#994b09" />
          </G>
        </Svg>
        )
    }
};

  export default EggSvg;
