const landOptionsData = [
  {
    plantType: "Kemangi",
    tingkatKesuburanTanah: [
      { label: "5.1 - 5.6 = level 1 = 10.000 kg/ha", value: 10000 },
      { label: "5.7 - 6.2 = level 2 = 8.000 kg/ha", value: 8000 },
      { label: "6.3 - 6.9 = level 3 = 6.000 kg/ha", value: 6000 },
    ],
  },
  {
    plantType: "Kangkung",
    tingkatKesuburanTanah: [
      { label: "5.1 - 5.6 = level 1 = 11.000 kg/ha", value: 11000 },
      { label: "5.7 - 6.2 = level 2 = 9.000 kg/ha", value: 9000 },
      { label: "6.3 - 6.9 = level 3 = 7.000 kg/ha", value: 7000 },
    ],
  },
  {
    plantType: "Bayam",
    tingkatKesuburanTanah: [
      { label: "5.1 - 5.6 = level 1 = 12.000 kg/ha", value: 12000 },
      { label: "5.7 - 6.2 = level 2 = 10.000 kg/ha", value: 10000 },
      { label: "6.3 - 6.9 = level 3 = 8.000 kg/ha", value: 8000 },
    ],
  },
];

function calculateLuasBersih(jumlahBedeng, panjangRerata, lebar) {
  const luas = (jumlahBedeng * (panjangRerata * lebar)) / 10000;
  return luas;
}

function calculateKebutuhan(selectedLandOption, luas) {
  const kebutuhan = selectedLandOption * luas;
  return kebutuhan;
}

function calculateKebutuhanBanyakKarung(kebutuhan) {
  const banyakKarung = kebutuhan / 40;
  return banyakKarung;
}

function calculatePrakiraanBiaya(banyakKarung) {
  const biaya = 10000 * banyakKarung;
  return biaya;
}

function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export {
  landOptionsData,
  calculateLuasBersih,
  calculateKebutuhan,
  calculateKebutuhanBanyakKarung,
  calculatePrakiraanBiaya,
  formatRupiah,
};
