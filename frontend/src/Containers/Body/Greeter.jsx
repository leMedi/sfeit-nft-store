import React from "react";
import { Input } from "antd";
import { useWeb3React } from "@web3-react/core";
import {
  useContractLoader,
  useContractReader,
  useUserProviderAndSigner,
} from "eth-hooks";

import { localProvider } from "../../connectors";
import contractConfig from '../../Contracts'

const { Search } = Input;

export const Greeter = () => {
  const { chainId, library } = useWeb3React()
  const userProviderAndSigner = useUserProviderAndSigner(library, localProvider);
  const readContracts = useContractLoader(localProvider, contractConfig);
  const writeContracts = useContractLoader(userProviderAndSigner.signer, contractConfig, chainId);

  const greet = useContractReader(readContracts, "Greeter", "greet");
  
  const sendTransaction = (value) => {
    console.log('sendTransaction', value);
    const setGreeting = writeContracts.Greeter.setGreeting(value);
    console.log('setGreeting', setGreeting);
  };
  
  return (
    <div>
      <h2>Greeting Module</h2>
      Contract Message: <b>{greet}</b>
      <br />
      <br />
      <Search
        style={{ maxWidth: 500 }}
        type="primary"
        enterButton="Set Message"
        size="large"
        placeholder="new greeting message"
        onSearch={sendTransaction}
      />
    </div>
  );
};

export default Greeter;
