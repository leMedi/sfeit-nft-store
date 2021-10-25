import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useWeb3React } from "@web3-react/core";

import Greeter from "./Greeter";

export const Body = () => {
  const { active, account, chainId } = useWeb3React();

  if (!active) return <></>;

  return (
    <Row style={{ marginTop: "20px" }}>
      <Col span={12} offset={6}>
        <h2>Wallet Info</h2>
        <ul>
          <li>
            <b>chainId:</b> {chainId}
          </li>
          <li>
            <b>account:</b> {account}
          </li>
        </ul>
        <Greeter />
      </Col>
    </Row>
  );
};

export default Body;
