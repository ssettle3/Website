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

const ImageWrapper = styled.img`
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  width: 35px;
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
        <ImageWrapper
          width="300px"
          src="https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/38135324_10155663967971728_9216053451237097472_o.jpg?_nc_cat=100&_nc_oc=AQlIv_pthBVcnu_TcIZGhvr3t_aIjmwR5e0OqTeskQPu2cJIDcgnmxSn9R5SAuFFYWCuTq6Ek_s_hHYTMauT4f3P&_nc_ht=scontent.fatl1-1.fna&oh=10e173e469a02dd77a991d3c7905fff6&oe=5D8ECD2D"
        />
      </LinkWrapper>
      <NavWrapper>{renderItems()}</NavWrapper>
    </Wrapper>
  );
}
