const chalk = require('chalk')

const delegate = () => {
  console.log(chalk.blue('Hello World!'))
}

module.exports = {
  delegate
}
