import { MarkdownView, Plugin } from 'obsidian';

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

        console.log('Hello world');
    }

    async getSelectedText() {
        let view = this.app.workspace.getActiveViewOfType(MarkdownView);

        let editor = view.editor;

        let selection = editor.getSelection();

        console.log(`Selected text:\n${selection}`);
    }
}
