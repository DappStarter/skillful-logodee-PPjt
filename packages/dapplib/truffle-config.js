require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember mistake guess kite bone skate'; 
let testAccounts = [
"0x5619c45e5dc25b1f457d09e3c91654ad8865563ec16ecc223cb2d76080d3da8d",
"0x3c8f06c7d65553bf7e23a360961db4e6c633a219111032759fe52fb81f32b517",
"0x8afbd359cb00771f9aa230256ed545acf135da7c758a98aa3b59b616f1e7051e",
"0xaa330e31891a407f1df0560bd2cce8c4b24e6f603d2d9bef1524264c1246ef94",
"0xc87109a92908403bb197684cda1d70446dc98bd6ff4120bb1edd0b06e5c724b0",
"0x44a1c7e756cc8a45a586b380fb853bfa570f45541e4ec52aded28d48ee05873d",
"0xcab1cacefe2503e32d8be5012261e9992ebee3ec3683c39156fe9721e529121e",
"0x216812be983a3f400abd561ff1192974f09561dd257a27c43ecceec4ef6acb9e",
"0x260af52732c9b722396d364d5de364190540617ed5a6611a2022f900d6ba024f",
"0xf01f876c6863ad187ab6d4cfee408fbead8142a6897018be5ea8f4f0ee32239f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

