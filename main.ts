import { Plugin } from 'obsidian';

export default class HelloWorldPlugin extends Plugin {
	async onload() {
		this.addStatusBarItem().setText('Hello world');
	}
}
