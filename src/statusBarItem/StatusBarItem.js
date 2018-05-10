'use strict';
const vscode = require('vscode');

class StatusBarItem {
    constructor(config) {
        this.config = config;
        this.item = vscode.window.createStatusBarItem(config.alignment, config.priority);
        this.item.tooltip = config.tooltip;
        this.item.command = config.command;
    }

    hide() {
        this.item.hide();
    }

    show() {
        this.item.show();
    }

    changeText(text) {
        this.item.text = text;
    }
}

module.exports = StatusBarItem;
