#!/bin/sh

sudo apt-get install --no-install-recommends yarn
yarn --version

yarn add express > /dev/null
yarn add socket.io > /dev/null
yarn add async > /dev/null
yarn add stromdao-bo-mpo > /dev/null
yarn add fury.network > /dev/null
yarn add stromdao-businessobject > /dev/null
yarn add browserify > /dev/null

yarn add ava --dev
yarn add snazzy --dev
yarn add standard --dev

rm -Rf public/
mkdir public
cd public
git clone https://github.com/energychain/fury.network
git clone https://github.com/energychain/fury.mithrill
git clone https://github.com/energychain/fury.erzeuger
git clone https://github.com/energychain/fury.mieter
git clone https://github.com/energychain/stromkonto
