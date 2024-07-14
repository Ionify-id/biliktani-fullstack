"use client";

import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import ModalTambahJadwal from "./modal-tambah-jadwal";
import ModalEditJadwal from "./modal-edit-jadwal";
import ModalDeleteJadwal from "./modal-delete-jadwal";

export const plantations = [
  {
    id: 1,
    tanggal: "Senin, 3 Januari 2023",
    komoditas: "Padi",
    tanggalPenanaman: "Sabtu, 14 Januari 2023",
    tanggalPanen: "Kamis, 20 Juli 2023",
  },
  {
    id: 2,
    tanggal: "Selasa, 25 April 2023",
    komoditas: "Kentang",
    tanggalPenanaman: "Minggu, 4 Februari 2023",
    tanggalPanen: "Rabu, 9 Agustus 2023",
  },
  {
    id: 3,
    tanggal: "Rabu, 12 Juli 2023",
    komoditas: "Jagung",
    tanggalPenanaman: "Kamis, 23 Februari 2023",
    tanggalPanen: "Jumat, 27 September 2023",
  },
  {
    id: 4,
    tanggal: "Kamis, 5 September 2023",
    komoditas: "Ubi Jalar",
    tanggalPenanaman: "Rabu, 8 Maret 2023",
    tanggalPanen: "Sabtu, 2 November 2023",
  },
  {
    id: 5,
    tanggal: "Jumat, 10 November 2023",
    komoditas: "Kedelai",
    tanggalPenanaman: "Jumat, 14 April 2023",
    tanggalPanen: "Minggu, 10 Desember 2023",
  },
  {
    id: 6,
    tanggal: "Sabtu, 30 Desember 2023",
    komoditas: "Padi",
    tanggalPenanaman: "Minggu, 23 April 2023",
    tanggalPanen: "Senin, 25 Desember 2023",
  },
  {
    id: 7,
    tanggal: "Minggu, 18 Februari 2024",
    komoditas: "Kentang",
    tanggalPenanaman: "Sabtu, 6 Mei 2023",
    tanggalPanen: "Selasa, 20 Februari 2024",
  },
  {
    id: 8,
    tanggal: "Senin, 2 April 2024",
    komoditas: "Jagung",
    tanggalPenanaman: "Minggu, 4 Juni 2023",
    tanggalPanen: "Rabu, 4 April 2024",
  },
  {
    id: 9,
    tanggal: "Selasa, 15 Mei 2024",
    komoditas: "Ubi Jalar",
    tanggalPenanaman: "Rabu, 19 Juli 2023",
    tanggalPanen: "Kamis, 20 Juni 2024",
  },
  {
    id: 10,
    tanggal: "Rabu, 5 Juli 2024",
    komoditas: "Kedelai",
    tanggalPenanaman: "Jumat, 25 Agustus 2023",
    tanggalPanen: "Sabtu, 10 Agustus 2024",
  },
  {
    id: 11,
    tanggal: "Kamis, 9 Agustus 2024",
    komoditas: "Padi",
    tanggalPenanaman: "Senin, 11 September 2023",
    tanggalPanen: "Selasa, 17 September 2024",
  },
  {
    id: 12,
    tanggal: "Jumat, 15 September 2024",
    komoditas: "Kentang",
    tanggalPenanaman: "Minggu, 22 Oktober 2023",
    tanggalPanen: "Rabu, 20 November 2024",
  },
  {
    id: 13,
    tanggal: "Sabtu, 21 Oktober 2024",
    komoditas: "Jagung",
    tanggalPenanaman: "Minggu, 12 November 2023",
    tanggalPanen: "Senin, 8 Januari 2025",
  },
  {
    id: 14,
    tanggal: "Minggu, 26 November 2024",
    komoditas: "Ubi Jalar",
    tanggalPenanaman: "Kamis, 7 Desember 2023",
    tanggalPanen: "Jumat, 7 Februari 2025",
  },
  {
    id: 15,
    tanggal: "Senin, 25 Desember 2024",
    komoditas: "Kedelai",
    tanggalPenanaman: "Jumat, 12 Januari 2024",
    tanggalPanen: "Sabtu, 16 Maret 2025",
  },
  {
    id: 16,
    tanggal: "Selasa, 16 Januari 2025",
    komoditas: "Padi",
    tanggalPenanaman: "Sabtu, 24 Februari 2024",
    tanggalPanen: "Minggu, 27 April 2025",
  },
  {
    id: 17,
    tanggal: "Rabu, 21 Februari 2025",
    komoditas: "Kentang",
    tanggalPenanaman: "Kamis, 6 Maret 2024",
    tanggalPanen: "Jumat, 4 Juli 2025",
  },
  {
    id: 18,
    tanggal: "Kamis, 6 Maret 2025",
    komoditas: "Jagung",
    tanggalPenanaman: "Jumat, 18 April 2024",
    tanggalPanen: "Sabtu, 5 September 2025",
  },
  {
    id: 19,
    tanggal: "Jumat, 4 April 2025",
    komoditas: "Ubi Jalar",
    tanggalPenanaman: "Senin, 27 Mei 2024",
    tanggalPanen: "Selasa, 10 Februari 2026",
  },
  {
    id: 20,
    tanggal: "Sabtu, 3 Mei 2025",
    komoditas: "Kedelai",
    tanggalPenanaman: "Minggu, 7 Juli 2024",
    tanggalPanen: "Senin, 14 April 2026",
  },
];

const columns = [
  { accessorKey: "tanggal", header: "Tanggal" },
  { accessorKey: "komoditas", header: "Komoditas" },
  { accessorKey: "tanggalPenanaman", header: "Tanggal Penanaman" },
  { accessorKey: "tanggalPanen", header: "Tanggal Panen" },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const jadwal = row.original;

      return (
        <div className="flex flex-row gap-x-2">
          <ModalEditJadwal />
          <ModalDeleteJadwal />
        </div>
      );
    },
  },
];

function DataTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default function JadwalTaniPage() {
  return (
    <div className="overflow-y-auto max-h-screen">
      <div className="container">
        <div className="container mx-auto mt-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-emerald-700">Jadwal tani</h1>
          <p>
            Jadwal tani adalah fitur yang dapat digunakan untuk mencatat jadwal
            penanaman dan jadwal panen.
          </p>
        </div>
        <div className="container mx-auto mt-4 p-0 flex flex-col justify-start space-y-4">
          <ModalTambahJadwal />
          <DataTable columns={columns} data={plantations} />
        </div>
      </div>
    </div>
  );
}
