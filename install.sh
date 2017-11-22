#!/bin/sh

npm install express
npm install socket.io
npm install async
npm install -g stromdao-bo-mpo
npm install -g fury.network
npm install --save stromdao-businessobject
npm install -g browserify

mkdir public
cd public
git clone https://github.com/energychain/fury.network .
git clone https://github.com/energychain/fury.mithrill
git clone https://github.com/energychain/fury.erzeuger
git clone https://github.com/energychain/fury.mieter
