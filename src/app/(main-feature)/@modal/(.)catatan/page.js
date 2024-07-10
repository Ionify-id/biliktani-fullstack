"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import TipTap from "@/components/tiptap";

export default function CatatanModal() {
  const router = useRouter();

  const [content, setContent] = useState("");
  const handleContentChange = (reason) => setContent(reason);

  function close(e) {
    e.preventDefault();
    router.back();
  }

  return (
    <Modal>
      <div className="min-w-[600px] max-w-[840px] min-h-[480px] max-h-[600px]">
        <form className="flex flex-col space-y-4 w-full h-full my-auto">
          <h1 className="font-bold text-xl">Catatan</h1>
          <TipTap
            content={content}
            onChange={(newContent) => handleContentChange(newContent)}
          />
          <div className="flex flex-row space-x-4 justify-center items-center w-full">
            <Button
              variant="outline"
              className="border border-2 border-black rounded-xl text-black hover:bg-emerald-700/5"
              onClick={close}
            >
              Tutup
            </Button>
            <Button className="bg-emerald-700 rounded-xl text-white hover:bg-emerald-800">
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
