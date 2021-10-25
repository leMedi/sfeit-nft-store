const config = {
  deployedContracts: {},
  externalContracts: {
    31337: {
      contracts: {
        Greeter: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: require('./Greeter.json').abi,
        },
      },
    },
  },
};

export default config;
