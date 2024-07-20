"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import TipTap from "@/components/tiptap";
import axios from "axios";
import Cookies from "universal-cookie";
import { useToast } from "@/components/ui/use-toast";

export default function CatatanModal() {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const router = useRouter();
  const { toast } = useToast();

  const [submissionLoading, setSubmissionLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  async function getCatatan() {
    setLoading(true);
    try {
      const res = await axios.get("/api/catatan", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setContent(res.data.data.content);
    } catch (error) {
      console.error("Error fetching catatan:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCatatan();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmissionLoading(true);
    const requestBody = { content: content };

    try {
      const response = await axios.post("/api/catatan", requestBody, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log("Data saved:", response.data);
    } catch (error) {
      console.error("Error saving catatan:", error);
    } finally {
      toast({
        description: "Berhasil menyimpan catatan",
      });
      setSubmissionLoading(false);
    }
  }

  function close(e) {
    e.preventDefault();
    router.back();
  }

  return (
    <Modal>
      <div className="min-w-[600px] max-w-[840px] min-h-[480px] max-h-[600px]">
        <form
          className="flex flex-col space-y-4 w-full h-full my-auto"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-xl">Catatan</h1>
          {loading && <p>Loading...</p>}
          {content !== null && (
            <TipTap content={content} onChange={handleContentChange} />
          )}
          <div className="flex flex-row space-x-4 justify-center items-center w-full">
            <Button
              variant="outline"
              className="border border-2 border-black rounded-xl text-black hover:bg-emerald-700/5"
              onClick={close}
            >
              Tutup
            </Button>
            <Button
              className="bg-emerald-700 rounded-xl text-white hover:bg-emerald-800"
              type="submit"
            >
              {submissionLoading ? "Loading..." : "Simpan"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
