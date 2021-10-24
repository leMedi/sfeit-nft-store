import { InjectedConnector } from '@web3-react/injected-connector'
import { ethers } from "ethers";

export const MetaMask = new InjectedConnector({ supportedChainIds: [31337] })
export const localProvider = new ethers.providers.StaticJsonRpcProvider("http://localhost:8545/");
