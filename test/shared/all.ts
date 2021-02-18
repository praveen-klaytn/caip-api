import { COSMOS_SUPPORTED_CHAINS } from './cosmos';
import { EIP155_SUPPORTED_CHAINS } from './eip155';
import { POLKADOT_SUPPORTED_CHAINS } from './polkadot';

export const ALL_SUPPORTED_CHAINS = [
  ...COSMOS_SUPPORTED_CHAINS,
  ...EIP155_SUPPORTED_CHAINS,
  ...POLKADOT_SUPPORTED_CHAINS,
];
