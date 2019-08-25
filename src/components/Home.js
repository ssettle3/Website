import React, { Fragment } from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

import { Terminal } from "../components/Terminal";

const AlignRight = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 15px;
  text-align: right;
`;

export function Home() {
  return (
    <Fragment>
      <Terminal />
      <AlignRight>
        <Typewriter
          options={{
            strings: [
              "husband",
              "software engineer",
              "atlanta native",
              "metalhead",
              "movie enthusiast",
              "drummer",
              "workout junkie",
              "game dev hobbist"
            ],
            autoStart: true,
            loop: true
          }}
        />
      </AlignRight>
    </Fragment>
  );
}
