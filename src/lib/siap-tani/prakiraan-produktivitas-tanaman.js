const plant = [
  {
    name: "Bayam",
    rendemen: 20,
  },
  {
    name: "Kangkung",
    rendemen: 50,
  },
  {
    name: "Kemangi",
    rendemen: 10,
  },
];

function calculateLuasBersih(jumlahBedeng, lebar, panjang) {
  const luasBersih = jumlahBedeng * lebar * panjang;
  return luasBersih;
}

function calculatePopulasi(luasBersih, jarakTanaman) {
  const populasi = luasBersih / (jarakTanaman / 100);
  return populasi;
}

function calculatePrakiraanProduktivitas(rendemen, populasi) {
  const rendemenGram = rendemen * populasi;
  const rendemenKilogram = rendemenGram / 1000;
  return rendemenKilogram;
}

function calculateBanyakGabung(produktivitas, tanaman) {
  let pembagi = 0;
  switch (tanaman) {
    case "Bayam":
      pembagi = 10;
      break;
    case "Kangkung":
      pembagi = 7.5;
      break;
    case "Kemangi":
      pembagi = 6.5;
      break;
    default:
      pembagi = 0;
      break;
  }
  return produktivitas / pembagi;
}

export {
  plant,
  calculateLuasBersih,
  calculatePopulasi,
  calculatePrakiraanProduktivitas,
  calculateBanyakGabung,
};
