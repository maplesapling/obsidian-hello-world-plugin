import { Editor, Plugin } from 'obsidian';
// SearchCursor, EditorPosition

export default class HelloWorldPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'get-selected-text',
            name: 'Get selected text',
            editorCallback: (editor: Editor) => this.expandSelection(editor),
            // Reference for editor callback: https://docs.obsidian.md/Plugins/Editor/Editor
            hotkeys: [
                {
                    modifiers: ["Mod", "Shift"],
                    key: "b"
                }
            ]
        });

        console.clear();

        console.log('Hello world');
    }

    async expandSelection(editor) {
        let fromCursor = editor.getCursor('from');
        let toCursor = editor.getCursor('to');
        // Reference for Editor class: https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts

        let fromLineNumber = fromCursor.line;
        let toLineNumber = toCursor.line;

        let fromLineContent = editor.getLine(fromLineNumber);
        let toLineContent = editor.getLine(toLineNumber);

        console.log(`fromCursor: ${JSON.stringify(fromCursor, null, 4)}`);
        console.log(`toCursor: ${JSON.stringify(toCursor, null, 4)}`);
        console.log(`From line number: ${fromLineNumber}`);
        console.log(`From line content:\n${fromLineContent}`);
        console.log(`To line number: ${toLineNumber}`);
        console.log(`To line content:\n${toLineContent}`);

        fromCursor.ch -= 2;
        toCursor.ch += 2;

        if (fromCursor.ch < 0)
            fromCursor.ch = 0;

        editor.getDoc().setSelection(fromCursor, toCursor);

        console.log('Expand selection completed');

        // let lineNumber = editor.lastLine();

        // let lineContent = editor.getLine(lineNumber);

        // console.log(`Type of editor: ${editor.constructor.name}`);
        // console.log(`Type of from Cursor: ${fromCursor.constructor.name}`);
        // if (SearchCursor.prototype.isPrototypeOf(fromCursor))
        //     console.log('fromCursor is a SearchCursor');
        // if (EditorPosition.prototype.isPrototypeOf(fromCursor))
        //     console.log('fromCursor is a EditorPosition');
        // if (fromCursor instanceof EditorPosition)
        //     console.log('fromCursor is a EditorPosition');
    }

    async boldSelectedText(editor) {
        function logCursorPosition(editor) {
            let fromCursor = editor.getCursor('from')
            let fromOffset = editor.posToOffset(fromCursor);
            let toOffset   = editor.posToOffset(editor.getCursor('to'));
            console.log(`From: ${fromOffset}, To: ${toOffset}`);
            // Reference for posToOffset(): https://forum.obsidian.md/t/get-current-text-selection/23436/4
        }

        let original = editor.getSelection();

        let bolded = `**${original}**`;

        let fromCursor = editor.getCursor('from')
        let fromOffset = editor.posToOffset(fromCursor);
        let toOffset   = editor.posToOffset(editor.getCursor('to'));

        logCursorPosition(editor);

        let newFromOffset = fromOffset - 2;
        let newToOffset   = toOffset + 2;

        // editor.replaceSelection(bolded);

        console.log(`Setting from ${newFromOffset} to ${newToOffset}`);

        // editor.focus();
        editor.setCursor(newFromOffset, newToOffset);
        // Reference for CodeMirror setCursor: https://stackoverflow.com/questions/33394855/how-to-set-cursor-position-in-codemirror-editor

		//let selection = this.getLineUnderCursor(editor);
		editor.getDoc().setSelection(newFromOffset, newToOffset);

        console.log(`Selected text:\n${original}\nNew text:\n${bolded}`);
        // Reference for simple text replacement: https://docs.obsidian.md/Plugins/Editor/Editor

        logCursorPosition(editor);
    }
}
