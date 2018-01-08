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

commander.command('account create').action(() => create())
commander.command('account delegate <username>').action(() => delegate())
commander.command('account send <amount> <recipient>').action(() => send())
commander.command('account stats').action(() => stats())
commander.command('account status <address>').action(() => status())
commander.command('account vanity <string>').action(() => vanity())
commander.command('account vote <username>').action(() => vote())

commander.command('message sign <message>').action(() => sign())
commander.command('message verify <message> <publickey>').action(() => verify())

commander.command('connect <network>').action(() => connect())
commander.command('connect node <node>').action(() => connectNode())
commander.command('disconnect').action(() => disconnect())

if (!process.argv.slice(2).length) {
  commander.outputHelp()

  process.exit()
}

commander.parse(process.argv)
