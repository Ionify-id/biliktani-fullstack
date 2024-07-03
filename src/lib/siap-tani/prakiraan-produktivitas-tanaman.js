const plant = [
  {
    name: "Bayam",
    rendemen: 2,
  },
  {
    name: "Kangkung",
    rendemen: 2.85,
  },
  {
    name: "Kemangi",
    rendemen: 2.4,
  },
];

function calculateLuasBersih(jumlahBedeng, lebar, panjang) {
  const luasBersih = jumlahBedeng * lebar * panjang;
  return luasBersih;
}

function calculatePopulasi(luasBersih, jarakTanaman) {
  const perhitungan1 = 1 * jarakTanaman * (1 * jarakTanaman);
  const totalPopulasi = perhitungan1 * luasBersih;
  return totalPopulasi;
}

function calculatePrakiraanProduktivitas(rendemen, populasi) {
  const rendemenGram = rendemen * populasi;
  const rendemenKilogram = rendemenGram / 1000;
  return rendemenKilogram;
}

export {
  plant,
  calculateLuasBersih,
  calculatePopulasi,
  calculatePrakiraanProduktivitas,
};
