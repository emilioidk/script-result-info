'use strict';
const config = require('./../config');
const RunCommand = require('./RunCommand');

const runCommand = new RunCommand(config.runCommand);

module.exports = runCommand;
