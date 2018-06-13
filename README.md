# Fury Network - Cloud9 IDE
This IDE helps developers to get started with Fury Network Energy Blockchain and [STROMDAO](https://stromdao.de/) digital infrastructure.


[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/stromdao/Lobby) 
  
## Setup c9.io

1. Log into your c9 account at [https://c9.io/login](https://c9.io/login)
2. Create a new Cloud9 Workspace at [https://c9.io/new](https://c9.io/new)
    - Workspace name: `fury-training`
    - Clone from GIT or Mercurial URL: `https://github.com/smuemd/fury-training.git`  
    - Choose a Template: `Blank`

The workspace settings should look like this:
 
![set up screent](https://raw.githubusercontent.com/smuemd/fury-training/master/c9-create-workspace-screen.jpg "Set up screen")


Click `Create workspace` to launch your training environment.
Your training environment should then look like this:

Go to *bash* tab and type  
`/bin/bash ./install.sh `

## Run the installation script

Right-click the file `install.sh` then select `Run` from the context menu

*or*

Open a terminal and type
```bash
/bin/bash ./install.sh
```

Your learning environment should now contain the following files and directories:

```
├── 01-blockchain-demo
├── 02-public-private-key-demo
├── 03-fury-material
├── node_modules
├── public
├── test
├── c9-create-workspace-screen.jpg
├── install.sh
├── LICENSE
├── package.json
├── README.md
├── server.js
└── yarn.lock

```
## Getting Started

Run the `server.js` located in your root folder and point your browser to the displayed URL in console output.


## Pre-Packed tools
 - [stromdao-bo-mpo](https://www.npmjs.com/package/stromdao-bo-mpo)  
Command Line tool required to communicate via energy blockchain.   
Bash Console: `stromdao`   

 - [fury.network cli](https://www.npmjs.com/package/fury.network)  
Command Line tool required to communicate with ipfs backed fury network UI.   
Bash Console: `fury.network`    

## Syllabus
### MeterPoint Reading
Fury URL: https://fury.network/?base=sample_mpo

### Webuser Login
Fury URL: https://fury.network/?base=sample_login

### Digital Asset: MeterPoint Token (Time and Power)
Fury URL: https://fury.network/?base=sample_token

### Digital Asset: Wallet
Fury URL: https://fury.network/?base=sample_wallet

### Distributed Ledger (Stromkonto)
Fury URL: n/a
https://www.stromkonto.net/

### Mithril APP Development
Fury URL: n/a
https://github.com/energychain/fury.mithrill



 
## Links
 - [Stromkonto](https://www.stromkonto.net)
 - [Fury.Network](https://fury.network)
 


