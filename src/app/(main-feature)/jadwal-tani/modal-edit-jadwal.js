"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";

export default function ModalEditJadwal() {
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
          <Pencil
            width={32}
            height={32}
            color="white"
            className="bg-gray-300/70 p-1 rounded-lg hover:bg-gray-300"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ubah Jadwal</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="komoditas">Komoditas</Label>
            <select
              id="komoditas"
              name="komoditas"
              className="border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Pilih Tanaman</option>
              <option value="Kemangi">Kemangi</option>
              <option value="Kangkung">Kangkung</option>
              <option value="Bayam">Bayam</option>
            </select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <label
              htmlFor="jadwal_tanam"
              className="block text-left font-medium"
            >
              Jadwal Tanam
            </label>
            <input
              type="date"
              id="jadwal_tanam"
              name="jadwal_tanam"
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <label
              htmlFor="jadwal_panen"
              className="block text-left font-medium"
            >
              Jadwal Panen
            </label>
            <input
              type="date"
              id="jadwal_panen"
              name="jadwal_panen"
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              variant="outline"
              className="border-2 border-emerald-800 rounded-xl"
            >
              Simpan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
