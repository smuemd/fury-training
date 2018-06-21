/* global $ */
$.qparams = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return decodeURI(results[1]) || 0;
    }
}


var extid = "fury.network." + Math.random();
if ($.qparams("extid") != null) {
    extid = $.qparams("extid");
}
var node = new document.StromDAOBO.Node({
  external_id: extid,
  testMode: true,
  rpc: "https://demo.stromdao.de/rpc",
  abilocation: "https://cdn.rawgit.com/energychain/StromDAO-BusinessObject/master/smart_contracts/"
});

// Fill View (HTML) using JQuery
$('.account').html(node.wallet.address);
document.go = function () {
  node.mpr().then(function (mpr) {
    mpr.readings($('#address').val()).then(function (reading) {
      console.info('reading: ', { time: reading.time.toNumber(), power: reading.power.toNumber() })
      var html = "<ul>";
      if (typeof reading == "object") {
        for (var property in reading) {
          if (isNaN(property)) {
          if (property != "length") {
            html += '<li><strong>' + property + '</strong>: ' + reading[property] + '</li>';
          }
          if (property == "power") {
            $('#reading').val(reading[property]);
          }
        }
      }
    }
    html += "</ul>";
      $('#result').html(html);
    });
  });
}




document.update = function () {
    node.mpr().then(function (mpr) {
        mpr.storeReading($('#reading').val()).then(function (txhash) {
            $('#result_update').html(txhash);
        });
    });
}
$('#effcode').html(document.go.toString());
$('#effcode_update').html(document.update.toString());
$('#account').html(document.node.wallet.address);
$('#address').val(document.node.wallet.address);
