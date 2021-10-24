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

export const Body = () => {
  const { active, account, chainId } = useWeb3React()

  if(!active) return <></>

  const sendTransaction = () => {
  
  };

  
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col span={12} offset={6}>
        <ul>
          <li><b>chainId:</b> {chainId}</li>
          <li><b>account:</b> {account}</li>
        </ul>
        <Button type="primary" onClick={sendTransaction}>
          send Transaction
        </Button>
      </Col>
    </Row>
  );
};

export default Body;
