"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Toolbar from "./toolbar";

export default function TipTap({ onChange, content }) {
  const handleChange = (newContent) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          "flex flex-col p-4 justify-start border-b-2 border-r-2 border-l-2 border-gray-700 text-black items-start w-full gap-3 font-medium text-md rounded-b-2xl outline-none overflow-y-auto h-[320px]",
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
      console.log(content);
    },
  });

  return (
    <div className="flex flex-col w-full">
      <Toolbar editor={editor} />
      <EditorContent
        style={{
          whiteSpace: "normal",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          wordBreak: "break-all",
        }}
        editor={editor}
        content={content}
      />
    </div>
  );
}
