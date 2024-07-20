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
import Cookies from "universal-cookie";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

export default function ModalTambahJadwal({ onSuccess }) {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    const jadwalTanam = new Date(data.jadwal_tanam).toISOString();
    const jadwalPanen = new Date(data.jadwal_panen).toISOString();

    const requestBody = {
      komoditas: data.komoditas,
      jadwal_tanam: jadwalTanam,
      jadwal_panen: jadwalPanen,
    };

    try {
      const response = await axios.post("/api/jadwal", requestBody, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      onSuccess();
      toast({
        description: response.data.meta.message,
      });
    } catch (error) {
      toast({
        description: error,
      });
      console.error("Error saving catatan:", error);
    } finally {
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-emerald-800 rounded-xl hover:bg-emerald-700 w-1/6">
          Tambah jadwal
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Jadwal</DialogTitle>
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
              Tambah
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
