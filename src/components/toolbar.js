"use client";

import React from "react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Underline,
} from "lucide-react";

export default function Toolbar({ editor }) {
  if (!editor) {
    return null;
  }
  return (
    <div className="p-2 flex justify-between items-start gap-4 w-full flex-wrap border-2 border-gray-700 rounded-t-md">
      <div className="flex justify-start items-center gap-2 w-full lg:w-10/12 flex-wrap ">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-emerald-700 text-white p-2 rounded-md"
              : "text-emerald-700 p-2 rounded-md hover:bg-gray-200"
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-emerald-700 text-white p-2 rounded-lg"
              : "text-emerald-700 p-2 rounded-md hover:bg-gray-200"
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-emerald-700 text-white p-2 rounded-lg"
              : "text-emerald-700 p-2 rounded-md hover:bg-gray-200"
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-emerald-700 text-white p-2 rounded-lg"
              : "text-emerald-700 p-2 rounded-md hover:bg-gray-200"
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-emerald-700 text-white p-2 rounded-lg"
              : "text-emerald-700 p-2 rounded-md hover:bg-gray-200"
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-emerald-700 text-white p-2 rounded-lg"
              : "text-emerald-700 p-2 rounded-md hover:bg-gray-200"
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
