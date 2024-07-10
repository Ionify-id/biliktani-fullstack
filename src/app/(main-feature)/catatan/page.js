"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import TipTap from "@/components/tiptap";

export default function CatatanPage() {
  const [content, setContent] = useState("");
  const handleContentChange = (reason) => setContent(reason);

  return (
    <div className="h-screen flex flex-col items-center p-8">
      <div className="w-full min-h-[300px] max-h-[480px]">
        <form className="flex flex-col space-y-4 w-full h-full">
          <h1 className="font-bold text-xl">Catatan</h1>
          <TipTap
            content={content}
            onChange={(newContent) => handleContentChange(newContent)}
          />
          <div className="flex flex-row space-x-4 justify-center items-center w-full">
            <Button className="bg-emerald-700 rounded-xl text-white hover:bg-emerald-800">
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
