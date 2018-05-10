'use strict';
const vscode = require('vscode');

const config = {
    runCommand: {
        options: [],
        cwd: vscode.workspace.rootPath,
        command: 'git describe --dirty="-$USER"'
    }
}

module.exports = config;
