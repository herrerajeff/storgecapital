import React from 'react';
import {Link} from 'gatsby';
import {media} from '../utils/media';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${media.m} {
    display: grid;
    align-items: center;
    grid-area: header;
    justify-content: start;
    height: 80px;
  }
`;

const Logo = styled(Link)`
  padding: 16px;
  transition: all .25s ease;
  svg {
    width: 8em;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo to="/">
      <svg viewBox="0 0 1458 437.4">
        <g>
          <g>
            <path d="M124.97 0h374.82v124.97H124.97z" fill="#FF3D2C"/>
            <path d="M312.61 21.36c-78 0-133.71 42.17-136.86 103.61H277a17.28 17.28 0 0 1-3.27-10.34c0-18.27 14.9-30.29 38.45-30.29C347.39 84.34 362.75 98 369 125h80c-7.21-62.72-52.24-103.64-136.39-103.64z"/>
            <path d="M62.49 156.22h374.82v124.97H62.49z" fill="#FF3D2C"/>
            <path d="M284.75 181c-31.75-7.1-60.36-11.6-69.75-24.78H113.76c-.1 1.82-.15 3.66-.15 5.51 0 65.87 61.53 85.1 113 97.11 28.72 6.72 53.68 11.7 63.42 22.35h102.79c.06-1.51.1-3 .1-4.56 0-66.34-57.69-84.13-108.17-95.63zM308.31 174.18h79.32c-.16-13.67-.36-15.83-.61-18H307c.49 2.12.93 4.27 1.31 18zM187.64 262.44h-80.76c.26 13.8.6 16.28 1 18.75h81.57c-.68-2.39-1.29-4.86-1.81-18.75z"/>
            <path d="M0 312.43h374.82V437.4H0z" fill="#FF3D2C"/>
            <path d="M227.06 312.43a15.59 15.59 0 0 1 4.36 10.83c0 18.26-14.9 29.8-39.9 29.8-38.37 0-57.31-14.17-65-40.63H44.94C54.34 369.23 103.1 416 192.48 416c83.12 0 135-39.92 137.4-103.61z"/>
            <path d="M45.3 312.43l62.49-31.24h82.01l-63.27 31.24H45.3zM227.29 312.43l62.49-31.24h103.1l-63.27 31.24H227.29zM114.04 156.22l61.7-31.25h101.54l-62.48 31.25H114.04zM306.96 156.22l61.71-31.25h80.45l-62.49 31.25h-79.67z" fill="#BCBEC0"/>
            <g>
              <text fontFamily="HalyardDisplayMedium,Halyard Display" fontSize="332.37" letterSpacing="-.01em" transform="translate(556.06 288.39)">
                S<tspan x="190.12" y="0" letterSpacing="-.03em">t</tspan><tspan x="287.7" y="0">o</tspan><tspan x="460.43" y="0" letterSpacing="-.02em">r</tspan><tspan x="564.92" y="0">g</tspan><tspan x="732.77" y="0" letterSpacing="0">ē</tspan>
              </text>
              <text fontFamily="HalyardDisplay-Bold,Halyard Display" fontSize="119.5" fontWeight="700" letterSpacing=".05em" transform="translate(573.61 399.35)">
                C<tspan x="89.02" y="0" letterSpacing="0.08em">A</tspan><tspan x="181.66" y="0" letterSpacing=".07em">P</tspan><tspan x="263.96" y="0" letterSpacing=".07em">I</tspan><tspan x="306.79" y="0" letterSpacing="0">T</tspan><tspan x="376.8" y="0" letterSpacing="0.08em">A</tspan><tspan x="469.43" y="0" letterSpacing=".09em">L</tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </Logo>
  </HeaderContainer>
);

export default Header;