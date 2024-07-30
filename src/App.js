import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import WalletButton from "./walletButton";
import styled from 'styled-components';


const WalletButtonContainer = styled.div`
  position:absolute;
  top:10px;
  right:10px;
  z-index:1;
`;

function App() {
  return (
    <React.Fragment>
      <div className="container">
      <WalletButtonContainer>
          <WalletButton/>
        </WalletButtonContainer>
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Gaurav Ghai
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
