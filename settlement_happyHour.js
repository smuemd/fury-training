/* global settlement */

/*
 * Happy Hour
 * ======================
 * 11:00-12:00
 */

let startTime=new Date(settlement.start.time*1000); // time 1st reading
let endTime=new Date(settlement.end.time*1000); // time 2nd reading

console.log("Hours",startTime.getHours(), endTime.getHours());

if(endTime - startTime < 3600000) { // 1 hr
	if((startTime.getHours() === 3) && (endTime.getHours() === 3)) { // both in hour 10
		settlement.cost=0;
	}
}

global.promise = new Promise(function(resolve2, reject2) {
node.stromkontoproxy(global.smart_contract_stromkonto)
  .then(sko => {
    return sko.addTx(node.wallet.address, node.nodeWallet.address, settlement.cost, settlement.base)
  })
  .then(function(tx) {
    console.log("TX",tx);
    console.log("From:",node.wallet.address);
    console.log("To:",node.nodeWallet.address);
    console.log("Amount:",(Math.round(settlement.cost) / 10000000).toFixed(6));
    console.log("Base:",(settlement.end.power.toString() * 1 - settlement.start.power.toString() * 1));
    console.log('Stromkonto: ', global.smart_contract_stromkonto)
    resolve2(tx);
	})
  .catch(err => reject2(err))
})
