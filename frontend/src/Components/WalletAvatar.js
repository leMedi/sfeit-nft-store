import React from "react";
import JazzIcon from "react-jazzicon";
import TokenAmount from "token-amount";

const jsNumberForAddress = (address = "") => {
  console.log('address', address)
  const addr = address.slice(2, 10);
  const seed = parseInt(addr, 16);
  return seed;
};

export const getShortAddress = (length = 6, address) => {
  const maxLength = address.length;
  const minLength = 6;

  let actualLength = length - minLength < 0 ? minLength : length;

  if (actualLength < maxLength) {
    return `${address.substring(0, actualLength)}...${address.substring(
      maxLength - 4,
      maxLength
    )}`;
  } else {
    return address;
  }
};

export const WalletAvatar = ({ wallet }) => (
  <>
    <JazzIcon diameter={35} seed={jsNumberForAddress(wallet.account)} />
    <div style={{ marginLeft: 15 }}>
      <div>{getShortAddress(6, wallet.account)}</div>
      <div>{wallet.balance && TokenAmount.format(wallet.balance, 18, { symbol: 'ETH' })}</div>
    </div>
  </>
);

export default WalletAvatar;
