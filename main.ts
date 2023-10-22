import { Plugin } from 'obsidian';

export default class HelloWorldPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'get-selected-text',
			name: 'Get selected text',
			callback: () => this.getSelectedText(),
			hotkeys: [
				{
					modifiers: ["Mod", "Shift"],
					key: "b"
				}
			]
		});

		this.addStatusBarItem().setText('Hello world');
	}

	async getSelectedText() {
		this.addStatusBarItem().setText('Get selected text');
	}
}
