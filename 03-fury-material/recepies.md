# Recepies

## Meterpoint ops with stromdao-bo-mpo

- Kommandozeilen Tool
- Stromzähler Ablesung
- Messwerte mit Hilfe des Business Objektes verarbeiten
- Tarifierung (Settlement/Clearing)
- https://www.npmjs.com/package/stromdao-bo-mpo

### Install

```bash
$ npm i -g stromdao-bo-mpo
```

### Help
```bash
$ stromdao help

  Commands:

    help [command...]                                   Provides help for a given command.
    exit                                                Exits application.
    store [options] <meter_point_id> [reading]          Stores Meter Point Reading for given external Meter Point ID.
    retrieve <meter_point_id>                           Retrieves Meter Point Reading for given external Meter Point ID.
    account [options] <meter_point_id>                  Get Address an keys for given external Meter Point ID.
    credit <meter_point_id> <amount>                    Add credit to Meter Point ledger.
    receipts <filename>                                 Exports transaction receipts as indexed json
    balancing [options] <meter_point_id>                (Sub) Balance Group
    tokenize [options] <meter_point_id>                 Derive digital asset (token) from Meter Point
    cutokenize [options] <meter_point_id>               Derive digital utilization asset (token) from Meter Point
    set [options] <meter_point_id>                      Creat and link a of addresses set to MP
    open [options] <meter_point_id>                     Opens Webbrowser with ledger
    discovergy [options] <meter_point_id>               Links Meter Point to Discovergy Smart Meter Gateway (API)
    infrastructure <infrastructure_node> <meter_point>  Assigns Infrastructure Node to Meter Point (Role 10)
    list                                                List of managed meter points
    httpservice                                         Start Lacy Webservice
    webuser [options] <meter_point_id>                  Create a new webuser (or overwrite) with given credentials
    backup <zipfilename>                                Exports local storage to zip file.


```

### AUFGABE 1: HALLO WELT

Mit Hilfe der Kommandozeile einen Zählerwert in der Blockchain speichern und diesen im Anschluss per Webbrowser abrufen.

#### `store`

```bash
$ stromdao store Z1 1234

Mandated  Z1 0xb8efa46437fe9950e31c2a9376f4b546cbf1dbdb21d70d38471c9f99c0e1920d
TX: 0x4796da3ecca5176f48189badd67bdb29f820ba9b85ea17fa6daa6a188ab982d0
```

Für den Zähler mit der Kennung Z1 wurde der Zählerstand 1234 in der Transaktion 0x67ba... geschrieben.

#### `account`

```bash
$ stromdao account Z1

MPID Z1
Address 0xb976e5DcA1259d0D2E0a0672D9C346eF93c9cc24
Node 0xb57ea39ccCD9837CA5b7600aa9017c3385A8fb75
BLK 0x6a1A548Cf7e3a2713080f5f5E0fd533bA954665c
Private Key PKI 0x07e8e45178ec012e3ab02bb1ede6ca4c969f60a4f875565cd32e53db26b290c8
...
```

`$ stromdao account stromdao-mp`

Abrufen des Zählerstandes: [https://fury.network/base=sample_mpo](https://fury.network/base=sample_mpo)

#### Noteworthy

- Jede Zählerkennung hat eine eindeutige Adresse (Schlüsselpaar) in der Blockchain.
- Zugriff auf die Blockchain kann via Browser oder Kommandozeile erfolgen (Laufzeitumgebungen).
- Zählerstände bilden bereits einen Konsens.

### AUFGABE 2: LOKALE NUTZUNG VON FURY
1. Herunterladen der ZIP Datei
2. Entpacken und Überschreiben der beiden Dateien in aufgabe2
3. Reload der Seite im Browser

=> Business Objekt
=> Stromkonto

## Fury IDE (lokal)
Schnelles Testen und verproben von Anwender Interaktionen.

Anlegen eines lokalen Showcases
```bash
$ fury init aufgabe2
aufgabe2 created

$ fury run aufgabe2
```

Es wird ein Unterverzeichnis angelegt mit dem Namen aufgabe2. Darin ist eine base.html und eine base.js.

## fury.network

- Browser basierte Entwicklungsumgebung
- Zugriff auf das Business Objekt
- Interaktionen mit Anwendern
- Showcase Entwicklung

## STROMDAO Business Object

- Abstraktionsschicht zur Energy Blockchain
- Bibliothek für Energiewirtschaftliche Prozesse
- Konsenssystem
- https://www.npmjs.com/package/stromdao-businessobject


```js
// read
node.mpr().then(function (mpr) {
  mpr.readings($('#address').val())
    .then(function (reading) {
      console.info('reading: ', {
        time: reading.time.toNumber(), power: reading.power.toNumber()
      })
      /* ... */
    })
})

// store
node.mpr().then(function (mpr) {
  mpr.storeReading($('#reading').val())
    .then(function (txhash) {
      $('#result_update').html(txhash)
    })
})
```

Das Business Objekt wird mit node angesteuert. Es ist bereits initialisiert, so dass jede Instanz eine eigene Adresse und einen eigenen privaten Schlüssel besitzt.

Im Objekt gibt es verschiedene Domains. Hier wird Meter-Point-Reading (mpr) verwendet. Diese Domains entsprechend meist sogenannten Smart-Contracts in der Blockchain.

In diesem Aufruf entspricht readings einem Methodenaufruf im Smart Contract.

## Stromkonto (Balancing contract)

- Blockchain (Tokens), zeigen Besitz an (= kein Konzept für Schulden).
- Datentyp ist immer Integer (Ganzzahl).
- Ein Stromkonto zeigt gefilterte Transaktionen an.

### AUFGABE 3: VERBRAUCHSBUCHUNG

`$ stromdao-mp store --auto 69256 ZAEHLER1337 1234`
Öffnen einer Fury Instanz für das Stromkonto.
Durchführung der Zählerablesungen.
Kontrolle der Abrechnung.

Noteworthy
Das Business Objekt abstrahiert die Blockchain und den Energiemarkt.
Das Stromkonto ist ein Kontenbuch für Energieabrechnungen.
In der Energy Blockchain existieren vorgefertigte Smart Contracts.

## Tarifentwicklung

- Ein Stromliefervertrag besteht aus einer Vielzahl von Buchungen auf einem Stromkonto
- Buchungen werden auf Basis eines Eingangsvektors (Settlement Objekt) vorgenommen

```bash
$ stromdao store -f 03-fury-material/BusinessObject-MeterPointOperation/settlement_sample.js --de 39110 test 15000

Node 0x259267731fe8BC7738f5C94Bd305798A480ED798

Settlement { tarif: 
   { '196c1b596da6f09e8576bd0ab0a6f3b7': 
      { GeoKey: '196c1b596da6f09e8576bd0ab0a6f3b7',
        Zipcode: '39110',
        City: 'Magdeburg',
        District: '',
        CustomCode: '',
        UsageStart: 1,
        UsageEnd: 100000,
        BpNet: 95.8044,
        BpGross: 114.00723599999999,
        BpMonthlyNet: 7.9837,
        BpMonthlyGross: 9.5006,
        UpNet: 22.6854,
        UpGross: 26.995626,
        UphNet: 0,
        UphGross: 0,
        BoNet: 0,
        BoGross: 0,
        BoNewNet: 0,
        BoNewGross: 0,
        BoInstantNet: 0,
        BoInstantGross: 0,
        BoPercent: 0,
        Net: '39106001',
        Additions: '',
        Total: 776.3664,
        TotalWoBonus: 923.8752,
        TotalNet: 776.3664,
        TotalNetWoBonus: 776.3664,
        TotalGross: 923.8752,
        TotalGrossWoBonus: 923.8752 } },
  zipcode: '39110',
  BpGross: 1140072360,
  UpGross: 2699562.6,
  account: '0x259267731fe8BC7738f5C94Bd305798A480ED798',
  node_account: '0x0D7a2427D57A2a6bC002e77F5Cc58633a144b907',
  node_wallet: '0x6F7728c73AacE483eDcC7d4030DF3271465fDb41',
  start: 
   [ BigNumber { _bn: <BN: 5b242e8d> },
     BigNumber { _bn: <BN: 2af8> },
     time: BigNumber { _bn: <BN: 5b242e8d> },
     power: BigNumber { _bn: <BN: 2af8> } ],
  end: 
   [ BigNumber { _bn: <BN: 5b242f97> },
     BigNumber { _bn: <BN: 3a98> },
     time: BigNumber { _bn: <BN: 5b242f97> },
     power: BigNumber { _bn: <BN: 3a98> } ],
  cost: 10807866,
  base: 4000 }
```
```bash
stromdao store -f 03-fury-material/BusinessObject-MeterPointOperation/settlement_peruse.js --de 39110 test 16000
```
