/* global suite, test */

const assert = require('assert');
const vscode = require('vscode');
const RunCommand = require('../src/runCommand/RunCommand');

suite("RunCommand", function () {
    const config = {
        options: [],
        cwd: vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.path : "~",
        command: "echo Hello"
    };

    test("it creates RunCommand instances", () => {
        new RunCommand(config);
    });

    test("it runs the command provided and returns Hello\\n", function (done) {
        const runCommand = new RunCommand(config);
        runCommand.runCommand().then(function (result) {
            assert.equal(result, "Hello\n");
            done();
        });
    });
});
