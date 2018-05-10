'use strict';
const { exec } = require('child_process');

class RunCommand {
    constructor(config) {
        this.config = config;
    }

    /**
     * Runs a command in a certain directory and returns the output
     * @returns a Promise that resolves with the output or rejects with the error
     */
    runCommand() {
        return new Promise((res, rej) => {
            exec(`cd ${this.config.cwd} && ${this.config.command}`, this.config.options, (error, stdout, stderr) => {
                if (stdout) {
                    return res(stdout);
                }
                else {
                    return rej(stderr);
                }
            });
        });
    }
}

module.exports = RunCommand;
