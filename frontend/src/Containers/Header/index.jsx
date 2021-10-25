import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Button } from "antd";
import { useBalance } from "eth-hooks";

import WalletAvatar from "../../Components/WalletAvatar";
import { localProvider, MetaMask } from "../../connectors";

import "./style.scss";

export const Header = () => {
  const { active, activate, account } = useWeb3React();
  const balance = useBalance(localProvider, account);

  // useEffect(() => authenticate(), []);

  async function authenticate() {
    await activate(MetaMask);
  }

  return (
    <div className="header-wrap">
      <div className="header">
        <div>
          <b>Sfeir</b> NFT Store
        </div>
        <div className="menu-right">
          {active ? (
            <>
              <div className="menu-right">
                <WalletAvatar wallet={{ account, balance }} />
              </div>
            </>
          ) : (
            <Button type="primary" onClick={authenticate}>
              Connect
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
