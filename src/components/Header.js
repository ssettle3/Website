import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";

const Wrapper = styled.div`
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  height: 50px;
  min-height: 50px;
  padding: 0 10px;
`;

const LinkWrapper = styled(Link)`
  color: #197bdc;
  padding: 0 15px;
  text-decoration: none;

  :hover {
    color: ${darken(0.1, "#197bdc")};
  }
`;

const ImageWrapper = styled.div`
  border-radius: 50%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 10px;
  font-weight: 800;
`;

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const items = [
  { route: "/", title: "Home" },
  { route: "/experience", title: "Experience" }
  // { route: "/blog", title: "Blog" },
  // { route: "/contact", title: "Contact" }
];

const renderItems = () =>
  items.map(item => (
    <LinkWrapper key={item.route} to={item.route}>
      {item.title}
    </LinkWrapper>
  ));

export function Header() {
  return (
    <Wrapper>
      <LinkWrapper to="/">
        <ImageWrapper>SS</ImageWrapper>
      </LinkWrapper>
      <NavWrapper>{renderItems()}</NavWrapper>
    </Wrapper>
  );
}
