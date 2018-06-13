#!/bin/sh

nvm install v8
nvm alias default 8
npm i -g npm

curl -o- -L https://yarnpkg.com/install.sh | bash

# load lesson 01
rm -Rf 01-blockchain-demo/
mkdir 01-blockchain-demo
cd 01-blockchain-demo
git clone https://github.com/anders94/blockchain-demo.git .
npm install
cd ..

# load lesson 02
rm -Rf 02-public-private-key-demo
mkdir 02-public-private-key-demo
cd 02-public-private-key-demo
git clone https://github.com/anders94/public-private-key-demo.git .
npm install
cd ..

# load static files
rm -Rf public
mkdir public
cd public
git clone https://github.com/energychain/fury.network .

# load additional resources
git clone https://github.com/energychain/fury.mithrill
git clone https://github.com/energychain/fury.erzeuger
git clone https://github.com/energychain/fury.mieter
git clone https://github.com/energychain/stromkonto
cd ..

# install dependencies
npm install

# install cli tools
npm i -g fury.network
npm i -g stromdao-bo-mpo
