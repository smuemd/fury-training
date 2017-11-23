#!/bin/sh

npm install express >/dev/null
npm install socket.io >/dev/null
npm install async >/dev/null
npm install -g stromdao-bo-mpo >/dev/null
npm install -g fury.network >/dev/null
npm install --save stromdao-businessobject >/dev/null
npm install -g browserify >/dev/null

rm -Rf public/
mkdir public
cd public
git clone https://github.com/energychain/fury.network .
git clone https://github.com/energychain/fury.mithrill
git clone https://github.com/energychain/fury.erzeuger
git clone https://github.com/energychain/fury.mieter
git clone https://github.com/energychain/stromkonto
