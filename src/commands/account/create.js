const chalk = require('chalk')
const arkjs = require('arkjs')

const create = () => {
  const passphrase = require("bip39").generateMnemonic();

  console.log(chalk.blue("Seed    - private:"), passphrase);
  console.log(chalk.blue("WIF     - private:"), arkjs.crypto.getKeys(passphrase).toWIF());
  console.log(chalk.blue("Address - public :"), arkjs.crypto.getAddress(arkjs.crypto.getKeys(passphrase).publicKey));
}

module.exports = {
  create
}
