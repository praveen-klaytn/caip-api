import * as blockchain from '../src';

const TEST_ETHEREUM_CHAINID = 'eip155:1';
const TEST_COSMOS_CHAINID = 'cosmos:cosmoshub-3';
const TEST_POLKADOT_CHAINID = 'polkadot:91b171bb158e2d3848fa23a9f1c25182';

describe('getChainConfig', () => {
  it('Ethereum', async () => {
    const chain = blockchain.getChainConfig(TEST_ETHEREUM_CHAINID);
    expect(chain).toBeTruthy();
    expect(chain.name).toEqual('Ethereum Mainnet');
    expect(chain.chainId).toEqual(TEST_ETHEREUM_CHAINID);
    expect(chain.derivationPath).toEqual("m/44'/60'/0'/0");
    expect(chain.nativeAsset.symbol).toEqual('ETH');
  });
  it('Cosmos', async () => {
    const chain = blockchain.getChainConfig(TEST_COSMOS_CHAINID);
    expect(chain).toBeTruthy();
    expect(chain.name).toEqual('Cosmos Hub');
    expect(chain.chainId).toEqual(TEST_COSMOS_CHAINID);
    expect(chain.derivationPath).toEqual("m/44'/118'/0'/0");
    expect(chain.nativeAsset.symbol).toEqual('ATOM');
  });
  it('Polkadot', async () => {
    const chain = blockchain.getChainConfig(TEST_POLKADOT_CHAINID);
    expect(chain).toBeTruthy();
    expect(chain.name).toEqual('Polkadot');
    expect(chain.chainId).toEqual(TEST_POLKADOT_CHAINID);
    expect(chain.derivationPath).toEqual("m/44'/354'/0'/0");
    expect(chain.nativeAsset.symbol).toEqual('DOT');
  });
});

describe('getChainJsonRpc', () => {
  it('Ethereum', async () => {
    const jsonrpc = blockchain.getChainJsonRpc(TEST_ETHEREUM_CHAINID);
    expect(jsonrpc).toBeTruthy();
    expect(jsonrpc.routes.http).toEqual(['eth_*']);
    expect(jsonrpc.routes.signer).toEqual([
      'eth_sendTransaction',
      'eth_signTransaction',
      'eth_sign',
      'eth_signTypedData',
      'personal_sign',
    ]);
    expect(jsonrpc.state.chainId).toEqual('eth_chainId');
    expect(jsonrpc.state.accounts).toEqual('eth_accounts');
  });
  it('Cosmos', async () => {
    const jsonrpc = blockchain.getChainJsonRpc(TEST_COSMOS_CHAINID);
    expect(jsonrpc).toBeTruthy();
    expect(jsonrpc.routes.http).toEqual([]);
    expect(jsonrpc.routes.signer).toEqual([]);
    expect(jsonrpc.state.chainId).toEqual('');
    expect(jsonrpc.state.accounts).toEqual('');
  });
  it('Polkadot', async () => {
    const jsonrpc = blockchain.getChainJsonRpc(TEST_POLKADOT_CHAINID);
    expect(jsonrpc).toBeTruthy();
    expect(jsonrpc.routes.http).toEqual([]);
    expect(jsonrpc.routes.signer).toEqual([]);
    expect(jsonrpc.state.chainId).toEqual('');
    expect(jsonrpc.state.accounts).toEqual('');
  });
});

describe('getSupportedChains', () => {
  it('All', async () => {
    const chains = blockchain.getSupportedChains();
    expect(Object.keys(chains)).toEqual([
      'cosmos:cosmoshub-3',
      'cosmos:kava-4',
      'eip155:1',
      'eip155:5',
      'eip155:100',
      'polkadot:91b171bb158e2d3848fa23a9f1c25182',
      'polkadot:b0a8d493285c2df73290dfb7e61f870f',
    ]);
  });
  it('Ethereum', async () => {
    const chains = blockchain.getSupportedChains('eip155');
    expect(Object.keys(chains)).toEqual(['eip155:1', 'eip155:5', 'eip155:100']);
  });
  it('Cosmos', async () => {
    const chains = blockchain.getSupportedChains('cosmos');
    expect(Object.keys(chains)).toEqual([
      'cosmos:cosmoshub-3',
      'cosmos:kava-4',
    ]);
  });
  it('Polkadot', async () => {
    const chains = blockchain.getSupportedChains('polkadot');
    expect(Object.keys(chains)).toEqual([
      'polkadot:91b171bb158e2d3848fa23a9f1c25182',
      'polkadot:b0a8d493285c2df73290dfb7e61f870f',
    ]);
  });
});
