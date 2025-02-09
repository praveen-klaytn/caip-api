export const TEST_EIP155_CHAIN = {
  name: 'Ethereum Mainnet',
  chainId: 'eip155:1',
  rpcUrl: 'api.mycryptoapi.com/eth',
  testNet: false,
  derivationPath: "m/44'/60'/0'/0",
  nativeAsset: { symbol: 'ETH', name: 'Ether', decimals: '18' },
};

export const EIP155_NAMESPACE = 'eip155';

export const EIP155_SUPPORTED_CHAINS = [
  'eip155:1',
  'eip155:5',
  'eip155:10',
  'eip155:69',
  'eip155:100',
  'eip155:137',
  'eip155:420',
  'eip155:1001',
  'eip155:8217',
  'eip155:80001',
  'eip155:79377087078960',
];

export const EIP155_JSONRPC_SCHEMAS = [
  'eth_chainId',
  'eth_accounts',
  'eth_sign',
  'eth_signTypedData',
  'eth_signTransaction',
  'eth_sendTransaction',
  'personal_sign',
];
