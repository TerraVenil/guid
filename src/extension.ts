'use strict';

import * as vscode from 'vscode';
import { v4 as uuidv4 } from 'uuid';

export function activate(context: vscode.ExtensionContext) {
    const generateGuid = (lowercase) => () => {
        let textEditor = vscode.window.activeTextEditor;

        vscode.window.activeTextEditor.edit(builder => {
            textEditor.selections.forEach(sel => {
                let result = uuidv4();
                if (!lowercase) {
                    result = result.toUpperCase();
                }
                builder.replace(sel, result);
            })
        });
	}
	
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.guid', generateGuid()));
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.guid_lowercase', generateGuid(true)));
}

export function deactivate() {
}