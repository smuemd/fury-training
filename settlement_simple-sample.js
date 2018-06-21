/* global settlement */





// TODO settlement_simple.js content:

global.promise = new Promise((res, rej) => {
  // settlement.cost=10000000; // =1,00 EUR
	node.stromkontoproxy(global.smart_contract_stromkonto)
    .then(sko => sko.addTx(settlement.account, settlement.node_account, settlement.cost, settlement.base))
    .then(tx => {
      console.info("TX", tx);
      console.info("From:", settlement.account);
      console.info("To:", settlement.node_account);
      console.info("Amount:", (Math.round(settlement.cost) / 10000000).toFixed(6));
      console.info("Base:", (settlement.end.power.toString() * 1 - settlement.start.power.toString() * 1));
      res(tx)
    })
    .catch(err => rej(err))
})
