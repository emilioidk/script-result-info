'use strict';
const vscode = require('vscode');

const config = {
    runCommand: {
        options: [],
        cwd: vscode.workspace.workspaceFolders[0].uri.path ,
        command: 'git describe --dirty="-$USER"'
    }
}

module.exports = config;
