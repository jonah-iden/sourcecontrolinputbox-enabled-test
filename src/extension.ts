import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "sourcecontrolinputbox-enabled-test" is now active!');

	const sourceControl: vscode.SourceControl = vscode.scm.createSourceControl('test', 'test scm', vscode.Uri.file('/workspace/theia'));
	console.log('successfully created source Control')
	console.log(sourceControl);

	let disposable = vscode.commands.registerCommand('sourcecontrolinputbox-enabled-test.changeSourceControlBoxEnabled', () => {
		vscode.window.showInformationMessage('changing input box enabled state new');

		sourceControl.inputBox.enabled = !sourceControl.inputBox.enabled;
		console.log('changed scm input box')

	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
