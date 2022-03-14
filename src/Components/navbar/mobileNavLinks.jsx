import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { Link as Links } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10000;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height:max-content;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 10000;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
  z-index: 10000;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <Links to="/" style={{ textDecoration: "none" }}>
            <LinkItem>
              <Link>HOME</Link>
            </LinkItem>
          </Links>
          <Links to="/" style={{ textDecoration: "none" }}>
            <LinkItem>
              <Link>PROGRAMS</Link>
            </LinkItem>
          </Links>
          <Links to="/" style={{ textDecoration: "none" }}>
            <LinkItem>
              <Link >ABOUT US</Link>
            </LinkItem>
          </Links>
          <Links to="/applicationform" style={{ textDecoration: "none" }}>
            <LinkItem>
              <Link>APPLICATION FORM</Link>
            </LinkItem>
          </Links>
          <Marginer />
          {/* <Accessibility /> */}
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
