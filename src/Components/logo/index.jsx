import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img
          src="https://eduprov.com/images/eduprov_logo_color.png"
          alt="Greenland logo"
          className="Logo"
        />
      </LogoImg>
      {/* <LogoText className="text-white">EDUPROV BOOTCAMP</LogoText> */}
    </LogoWrapper>
  );
}
