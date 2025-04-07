import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import "../../styles/Admin Styles/TiptapEditor.css";

export const TiptapEditor = ({ initialHTML, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    content: initialHTML || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && initialHTML) {
      editor.commands.setContent(initialHTML);
    }
  }, [editor, initialHTML]);

  if (!editor) return null;

  return (
    <div className="tiptap-container">
      <div className="tiptap-toolbar">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor?.isActive("bold") ? "active" : ""}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor?.isActive("italic") ? "active" : ""}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor?.isActive("underline") ? "active" : ""}
        >
          Underline
        </button>
        <button onClick={() => editor.chain().focus().setParagraph().run()}>
          P
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          • List
        </button>
        <button onClick={() => editor.chain().focus().undo().run()}>
          Undo
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          Redo
        </button>
      </div>
      <EditorContent editor={editor} className="tiptap-editor" />
      {/* <div className="tiptap-editor">Editor should be here</div> */}
    </div>
  );
};
