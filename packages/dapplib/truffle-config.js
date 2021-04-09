require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'good enter bottom solution finger deliver remind concert gesture crew flower sport'; 
let testAccounts = [
"0x543b6960e180717af6943716097d962d03453b60d3ec2386c17c740e0ebbbaf7",
"0x29c00c8cc17596210ce7785cb9ac7fbeda29217689a21f2b6a0cadaf23f68292",
"0x062e08b24c0d8c96e24482735abcdee9705b0a9539d3ce1e66f8e0a28e09d845",
"0xea9fb1f325e6b0c3c2bf85022f9252f2ce67e90d9f54ade856fcf2d5db12dbac",
"0xca8ebedc3422365b9de4137c3472d3aa18a6de79b6d2629c8d7ea190e632eb56",
"0xfa49b0963c9488a50ff83463775b919fa822615b8dc7e06775575f4c526770cd",
"0x3a89e7754f7a9c82b17fc6bde578f624500b09e88eda670329c2fac9c9d4e337",
"0xa9e3b85482d6f0b18802aba4a4bc3ad64f87c0c473e187eb5af32748834fc5a3",
"0xb61ed2dedba6cb1e86a28ddb67ae8da3a47c64fbcd157641fa86813a8918be6b",
"0xac6714c31950665ebd1c0466a3c516c0f153b840a5f479fcd3c6c139c2af030d"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

