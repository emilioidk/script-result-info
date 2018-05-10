'use strict';
const vscode = require('vscode');

const config = {
    statusBarItem: {
        alignment: vscode.StatusBarAlignment.Right,
        priority: 80,
        tooltip: 'Run command again',
        command: 'extension.runCommand'
    }
}

module.exports = config;
