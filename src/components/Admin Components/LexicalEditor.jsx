import React, { useEffect, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { ListNode, ListItemNode } from "@lexical/list";

import { $generateHtmlFromNodes } from "@lexical/html";

import { Toolbar } from "./LexicalToolbar";
import "../../styles/Admin Styles/LexicalEditor.css";

export const LexicalEditor = ({ initialHTML = "", onChange }) => {
  const theme = {
    paragraph: "editor-paragraph",
    text: {
      bold: "editor-bold",
      italic: "editor-italic",
      underline: "editor-underline",
    },
  };

  const editorConfig = {
    namespace: "BlogEditor",
    theme,
    onError(error) {
      console.error("Lexical error:", error);
    },
    nodes: [ListNode, ListItemNode],
  };

  const handleEditorChange = (editorState, editor) => {
    editor.update(() => {
      const html = $generateHtmlFromNodes(editor, null);
      onChange(html);
    });
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <Toolbar />
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor-input" />}
      />
      <HistoryPlugin />
      <ListPlugin />
      <OnChangePlugin onChange={handleEditorChange} />
    </LexicalComposer>
  );
};
