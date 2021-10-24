import "./App.css";
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
// import { UseWalletProvider } from "use-wallet";

import Header from "./Containers/Header";
import Body from "./Containers/Body";

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}


function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <Body />
    </Web3ReactProvider>
  );
}

export default App;
