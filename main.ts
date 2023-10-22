import { Editor, Plugin } from 'obsidian';

export default class HelloWorldPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'get-selected-text',
            name: 'Get selected text',
            // Editor callback reference: https://docs.obsidian.md/Plugins/Editor/Editor
            editorCallback: (editor: Editor) => this.boldSelectedText(editor),
            hotkeys: [
                {
                    modifiers: ["Mod", "Shift"],
                    key: "b"
                }
            ]
        });

        console.log('Hello world');
    }

    async boldSelectedText(editor) {
        // Simple replace text reference: https://docs.obsidian.md/Plugins/Editor/Editor
        let original = editor.getSelection();

        let bolded = `**${original}**`;

        editor.replaceSelection(bolded);

        console.log(`Selected text:\n${original}\nNew text:\n${bolded}`);
    }
}
