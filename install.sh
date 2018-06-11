#!/bin/sh

npm i express -P
npm i socket.io -P
npm i async -P
npm i stromdao-bo-mpo -g
npm i fury.network -P
npm i stromdao-businessobject -P
npm i browserify -P

npm i ava -D
npm i snazzy -D
npm i standard -D

rm -Rf public/
mkdir public
cd public
git clone https://github.com/energychain/fury.network
git clone https://github.com/energychain/fury.mithrill
git clone https://github.com/energychain/fury.erzeuger
git clone https://github.com/energychain/fury.mieter
git clone https://github.com/energychain/stromkonto
