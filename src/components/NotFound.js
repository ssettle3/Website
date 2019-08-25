import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  margin: 50px 0;
  text-align: center;
  width: 100%;
`;

const Message = styled.div`
  font-size: 45px;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;

export function NotFound() {
  return (
    <Wrapper>
      <Message>404 - Not Found</Message>
      <ImageWrapper>
        <img
          alt="404"
          width="500px"
          src="https://media.giphy.com/media/8v0BF2BS4S7V6/giphy.gif"
        />
      </ImageWrapper>
    </Wrapper>
  );
}
