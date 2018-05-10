'use strict';
const runCommand = require('./runCommand');
const statusBarItem = require('./statusBarItem');

module.exports = Object.assign({}, runCommand, statusBarItem);
