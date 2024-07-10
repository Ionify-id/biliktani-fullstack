"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const router = useRouter();

  function close(e) {
    if (e.target === overlay.current) {
      router.back();
    }
  }

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 backdrop-blur"
      onClick={close}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-xl">
        {children}
      </div>
    </div>
  );
}
