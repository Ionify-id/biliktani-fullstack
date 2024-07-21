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
  const populasi = luasBersih / jarakTanaman;
  return populasi;
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
