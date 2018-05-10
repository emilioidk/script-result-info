const vscode = require('vscode');
const config = require('./src/config');
const statusBarItem = require('./src/statusBarItem');
const runCommand = require('./src/runCommand');

function activate(context) {
    console.log('Thanks for installing me!');

    function runCommandAndUpdateStatusBarItem() {
        runCommand.runCommand().then((output) => {
            statusBarItem.changeText(`$(git-commit) ${output}`);
            statusBarItem.show();
        }).catch((output) => {
            vscode.window.showErrorMessage(output);
            statusBarItem.hide();
        });
    }

    let disposable = vscode.commands.registerCommand(config.statusBarItem.command, runCommandAndUpdateStatusBarItem);

    context.subscriptions.push(statusBarItem);
    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
    console.log('Oh...so, you hate me? Ok I go away now :(');
}
exports.deactivate = deactivate;
