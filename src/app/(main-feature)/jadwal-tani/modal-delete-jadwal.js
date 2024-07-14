"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function ModalDeleteJadwal() {
  const [open, setOpen] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button>
          <Trash2
            width={32}
            height={32}
            color="white"
            className="bg-red-500/70 p-1 rounded-lg hover:bg-red-500"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Hapus Jadwal</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Apakah anda yakin ingin menghapus jadwal ini?
        </DialogDescription>
        <DialogFooter>
          <Button className="bg-red-700/70 rounded-xl mx-auto hover:bg-red-500">
            Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
