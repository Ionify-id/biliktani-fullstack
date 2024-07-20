"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { convertToDateInputFormat } from "@/lib/utils";
import Cookies from "universal-cookie";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

export default function ModalEditJadwal({ data, onSuccess }) {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [prevData, setPrevData] = useState({
    _id: data._id,
    komoditas: data.komoditas,
    jadwal_tanam: convertToDateInputFormat(data.jadwal_tanam),
    jadwal_panen: convertToDateInputFormat(data.jadwal_panen),
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPrevData({
      ...prevData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    const jadwalTanam = new Date(data.jadwal_tanam).toISOString();
    const jadwalPanen = new Date(data.jadwal_panen).toISOString();

    const requestBody = {
      _id: prevData._id,
      komoditas: data.komoditas,
      jadwal_tanam: jadwalTanam,
      jadwal_panen: jadwalPanen,
    };

    try {
      const response = await axios.put("/api/jadwal", requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
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
      console.error("Error saving catatan:", error.message);
    } finally {
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
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
        <DialogDescription>
          Form ini memungkinkan Anda untuk mengubah detail jadwal tanam dan
          panen.
        </DialogDescription>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="komoditas">Komoditas</Label>
            <select
              id="komoditas"
              name="komoditas"
              className="border border-gray-300 rounded-md p-2"
              value={prevData.komoditas}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Tanaman</option>
              <option value="Kemangi">Kemangi</option>
              <option value="Kangkung">Kangkung</option>
              <option value="Bayam">Bayam</option>
            </select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="jadwal_tanam">Jadwal Tanam</Label>
            <input
              type="date"
              id="jadwal_tanam"
              name="jadwal_tanam"
              className="border border-gray-300 rounded-md p-2"
              value={prevData.jadwal_tanam}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="jadwal_panen">Jadwal Panen</Label>
            <input
              type="date"
              id="jadwal_panen"
              name="jadwal_panen"
              className="border border-gray-300 rounded-md p-2"
              value={prevData.jadwal_panen}
              onChange={handleChange}
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
