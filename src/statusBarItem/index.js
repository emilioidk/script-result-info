'use strict';
const config = require('./../config');
const StatusBarItem = require('./StatusBarItem');

const statusBarItem = new StatusBarItem(config.statusBarItem);

module.exports = statusBarItem;
