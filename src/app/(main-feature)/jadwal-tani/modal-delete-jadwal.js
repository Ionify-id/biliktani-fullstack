"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useToast } from "@/components/ui/use-toast";

export default function ModalDeleteJadwal({ id, onSuccess }) {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(token);

    const requestBody = { _id: id };

    try {
      const response = await axios.delete("/api/jadwal", {
        data: requestBody,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onSuccess();
      toast({
        description: response.data.meta.message,
      });
    } catch (error) {
      console.error(error);
      toast({
        description: error.message,
      });
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
          <Button
            className="bg-red-700/70 rounded-xl mx-auto hover:bg-red-500"
            onClick={handleSubmit}
          >
            Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
