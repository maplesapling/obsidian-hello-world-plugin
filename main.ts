import { Editor, Plugin } from 'obsidian';

export default class HelloWorldPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'get-selected-text',
            name: 'Get selected text',
            // Reference: https://docs.obsidian.md/Plugins/Editor/Editor
            editorCallback: (editor: Editor) => this.getSelectedText(editor),
            hotkeys: [
                {
                    modifiers: ["Mod", "Shift"],
                    key: "b"
                }
            ]
        });

        console.log('Hello world');
    }

    async getSelectedText(editor) {
        let selection = editor.getSelection();

        console.log(`Selected text:\n${selection}`);
    }
}
