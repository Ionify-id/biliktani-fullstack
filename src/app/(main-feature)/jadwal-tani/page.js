"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalTambahJadwal from "./modal-tambah-jadwal";
import ModalEditJadwal from "./modal-edit-jadwal";
import ModalDeleteJadwal from "./modal-delete-jadwal";
import Cookies from "universal-cookie";
import { formatDate } from "@/lib/utils";
import DataTable from "./data-table";

export default function JadwalTaniPage() {
  const [data, setData] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 10;
  const cookies = new Cookies();

  const columns = [
    {
      accessorKey: "updated_at",
      header: "Tanggal",
      cell: ({ getValue }) => formatDate(getValue()),
    },
    {
      accessorKey: "komoditas",
      header: "Komoditas",
    },
    {
      accessorKey: "jadwal_tanam",
      header: "Tanggal Penanaman",
      cell: ({ getValue }) => formatDate(getValue()),
    },
    {
      accessorKey: "jadwal_panen",
      header: "Tanggal Panen",
      cell: ({ getValue }) => formatDate(getValue()),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const jadwal = row.original;
        return (
          <div className="flex flex-row gap-x-2">
            <ModalEditJadwal data={jadwal} onSuccess={handleSuccessAction} />
            <ModalDeleteJadwal
              id={jadwal._id}
              onSuccess={handleSuccessAction}
            />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const token = cookies.get("token");

      if (!token) {
        console.error("No authentication token found");
        return;
      }

      const response = await axios.get("/api/jadwal", {
        params: {
          page: currentPage + 1,
          limit: pageSize,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setData(response.data.data);
      setHasNextPage(response.data.data.length === pageSize);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        // Handle specific Axios errors (e.g., show an error message to the user)
      } else {
        console.error("Error fetching data:", error);
        // Handle other types of errors
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaginationChange = (newPage) => {
    if (newPage >= 0) {
      setCurrentPage(newPage);
    }
  };

  function handleSuccessAction() {
    fetchData();
  }

  return (
    <div className="overflow-y-auto max-h-screen">
      <div className="container mx-auto mt-8 p-4 border-2 rounded-lg border-gray-150">
        <h1 className="text-2xl font-bold text-emerald-700">Jadwal tani</h1>
        <p>
          Jadwal tani adalah fitur yang dapat digunakan untuk mencatat jadwal
          penanaman dan jadwal panen.
        </p>
      </div>
      <div className="container mx-auto mt-4 p-0 flex flex-col justify-start space-y-4">
        <ModalTambahJadwal onSuccess={handleSuccessAction} />
        <DataTable
          columns={columns}
          data={data}
          hasNextPage={hasNextPage}
          currentPage={currentPage}
          onPaginationChange={handlePaginationChange}
          isLoading={isLoading}
          onSuccess={handleSuccessAction}
        />
      </div>
    </div>
  );
}
