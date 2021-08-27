import React from "react";
import styled from "styled-components";
import { darken } from "polished";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  align-items: center;
  padding: 10px 30px;
`;

const Icon = styled.a`
  padding: 5px;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;
  color: #197bdc;

  :hover {
    color: ${darken(0.1, "#197bdc")};
  }
`;

const Line = styled.div`
  height: 100px;
  width: 0;
  border: 1px solid #197bdc;
`;

export function SocialContacts() {
  return (
    <Wrapper>
      <Icon href="https://www.linkedin.com/in/ssettle" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Icon>
      <Icon href="https://github.com/ssettle3" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Icon>
      <Icon href="https://www.youtube.com/channel/UCEIfWBUKVtwvEHNpy-OKC_A" target="_blank">
        <FontAwesomeIcon icon={faYoutube} />
      </Icon>
      <Line />
    </Wrapper>
  );
}
