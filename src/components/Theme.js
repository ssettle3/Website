import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  color: #3c4043;
  height: 100%;
  flex-direction: column;
  font-family: Montserrat, Arial, sans-serif;

  .vertical-timeline-element-content {
    box-shadow: 1px 1px 10px 2px lightgrey;
  }
`;

export function Theme({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
