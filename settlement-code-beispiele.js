
// WG STROM

// let konto1="0x6fCb57AC03CdfA7E26bc6117ceCa83b1516Af2f7";
// let konto2="0x94013490Cc86ada8D9154B085D791176F676283C";
// let konto3="0x6692BC4915Ba6f07bB309481d2198C5C25e3Fcce";
//
// settlement.cost=Math.round(settlement.cost/3)
// global.promise = new Promise(function(resolve2, reject2) {
//   node.stromkontoproxy("0x19BF166624F485f191d82900a5B7bc22Be569895")
//     .then(sko => {
//       return sko.addTx(konto1, node.nodeWallet.address, settlement.cost, settlement.base)
//         .then(tx => sko.addTx(konto2, node.nodeWallet.address, settlement.cost, settlement.base))
//         .then(tx => sko.addTx(konto3, node.nodeWallet.address, settlement.cost, settlement.base))
//         .then(tx => resolve2(tx))
//     })
//     .catch(err => reject2(err))
// })

// Provision

let vpkonto="0x6fCb57AC03CdfA7E26bc6117ceCa83b1516Af2f7";

// global.promise = new Promise(function(resolve2, reject2) {
//   node.stromkontoproxy("0x19BF166624F485f191d82900a5B7bc22Be569895")
//     .then(sko => sko.addTx(node.wallet.address, node.nodeWallet.address, settlement.cost, settlement.base)
//       .then(tx => sko.addTx(node.nodeWallet.address, vpkonto, Math.round(settlement.UpGross*0.01), settlement.base))
//       .then(tx =>
//         resolve2(tx))
//     )
//     .catch(err => reject2(err))
// })


// EEG Buchung

let  eegkonto="0x6fCb57AC03CdfA7E26bc6117ceCa83b1516Af2f7";

global.promise = new Promise(function(resolve2, reject2) {
  node.stromkontoproxy("0x19BF166624F485f191d82900a5B7bc22Be569895")
    .then(sko => sko.addTx(node.wallet.address, node.nodeWallet.address, settlement.cost, settlement.base)
      .then(tx => sko.addTx(node.nodeWallet.address,eegkonto,Math.round(settlement.base*688000),settlement.base))
      .then(tx =>
        resolve2(tx))
    )
    .catch(err => reject2(err))
})
