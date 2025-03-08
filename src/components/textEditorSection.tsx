import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Code from "@tiptap/extension-code"
import BulletList from "@tiptap/extension-bullet-list"
import { Button } from '@mantine/core';
import TurndownService from "turndown"
import { TextSelection } from '@tiptap/pm/state';

const turndownService = new TurndownService({headingStyle : "atx",});

    // Remove <p> tags inside <li> because mantine rich text editor is fun
    // Filter checks for ol and increments rewrite list element number
const listCounters = new Map<Node, number>();
turndownService.addRule("tight-list", {
  filter: ["li"],
  replacement: function (content, node) {
    const cleanedContent = node.innerHTML.replace(/<\/?p>/g, "").trim();
    let prefix = "* ";

    if (node.parentElement?.nodeName === "OL") {
      if (!listCounters.has(node.parentElement)) {
        listCounters.set(node.parentElement, 1);
      }

      prefix = `${listCounters.get(node.parentElement)}. `;
      listCounters.set(node.parentElement, listCounters.get(node.parentElement)! + 1);
    }

    return `${prefix}${cleanedContent}\n`;
  },
});

  //TODO Bugfix .md output. Implementation halfway there but certain features are not appearing in .md viewer (Obsidian)
    // Correctly converting... headings, bold, italics, underline, bullet list, numbered list, code, quote, linebreak and link
    // Problems converting... strikethrough, subscript, superscript, and highlight
  //TODO Save existing text content to local storage to persist through sessions.
const TextEditorSection = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      Code,
      BulletList,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    editorProps: {
        attributes: {
            class: 'h-full prose prose-sm focus:outline-none text-left',
          }
      },
  });

  const handleSaveText = async (text: string) => {
    const textDoc = document.createElement("a");
    textDoc.download = "note.md";
    console.log("Html before made md -> \n", text)
    const markdownText = turndownService.turndown(text);
    const textBlob = new Blob([markdownText], {type: "application/json"})
    textDoc.href = URL.createObjectURL(textBlob);
    textDoc.addEventListener('click', () => {
      setTimeout(() => URL.revokeObjectURL(textDoc.href), 30 * 1000)
    })
    textDoc.click();

    
  }

  return (
    <div className='w-full h-full  m-4'>
    <RichTextEditor 
        className='flex flex-col h-full'
        classNames={{
            content: 'flex-grow h-full overflow-y-auto p-4 list-disc list-inside', // Target the actual content-editable div    content: "list-disc list-inside", // Applies proper bullet list styling
        }} 
        editor={editor}
    >
      <RichTextEditor.Toolbar className='flex justify-center' sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <Button className='text-green-400 bg-neutral-700' onClick={() => handleSaveText(editor.getHTML())}>Save</Button>
        </RichTextEditor.ControlsGroup>

      </RichTextEditor.Toolbar>

      

      <RichTextEditor.Content className=' h-full flex-grow overflow-y-scroll cursor-text'/>
    </RichTextEditor>
    </div>
  );
}
export default TextEditorSection;