import React, { useEffect } from "react";
import { Button, Row, Col } from "antd";
import { useWeb3React } from "@web3-react/core";
import {
  useBalance,
  useContractLoader,
  useContractReader,
  useGasPrice,
  useOnBlock,
  useUserProviderAndSigner,
} from "eth-hooks";

import { localProvider } from "../../connectors";
import contractConfig from '../../Contracts'

export const Body = () => {
  const { active, account, chainId, library } = useWeb3React()
  const userProviderAndSigner = useUserProviderAndSigner(library, localProvider);
  const readContracts = useContractLoader(localProvider, contractConfig);
  const writeContracts = useContractLoader(userProviderAndSigner.signer, contractConfig, chainId);

  const greet = useContractReader(readContracts, "Greeter", "greet");
  
  if(!active) return <></>
  
  const sendTransaction = () => {
    const setGreeting = writeContracts.Greeter.setGreeting('Hello, Sfeir!')
    console.log('setGreeting', setGreeting)
  };

  
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col span={12} offset={6}>
        <ul>
          <li><b>chainId:</b> {chainId}</li>
          <li><b>account:</b> {account}</li>
          <li><b>greeting:</b> {greet}</li>
        </ul>
        <Button type="primary" onClick={sendTransaction}>
          Change Greeting Message
        </Button>
      </Col>
    </Row>
  );
};

export default Body;
