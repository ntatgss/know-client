#!/usr/bin/env node

const commander = require('commander')

const { create } = require('./commands/account/create')
const { delegate } = require('./commands/account/delegate')
const { send } = require('./commands/account/send')
const { stats } = require('./commands/account/stats')
const { status } = require('./commands/account/status')
const { vanity } = require('./commands/account/vanity')
const { vote } = require('./commands/account/vote')
const { sign } = require('./commands/message/sign')
const { verify } = require('./commands/message/verify')
const { connect } = require('./commands/network/connect')
const { connectNode } = require('./commands/network/connect-node')
const { disconnect } = require('./commands/network/disconnect')

commander
  .version('1.0.0')
  .description('CLI for the ARK Blockchain')
  .command('account create').action(() => create())
  .command('account delegate <username>').action(() => delegate())
  .command('account send <amount> <recipient>').action(() => send())
  .command('account stats').action(() => stats())
  .command('account status <address>').action(() => status())
  .command('account vanity <string>').action(() => vanity())
  .command('account vote <username>').action(() => vote())
  .command('message sign <message>').action(() => sign())
  .command('message verify <message> <publickey>').action(() => verify())
  .command('connect <network>').action(() => connect())
  .command('connect node <node>').action(() => connectNode())
  .command('disconnect').action(() => disconnect())

if (!process.argv.slice(2).length) {
  commander.outputHelp()

  process.exit()
}

commander.parse(process.argv)
