import ImageBayam from "@/assets/informasi-tanaman/bayam.png";
import ImageKemangi from "@/assets/informasi-tanaman/kemangi.png";
import ImageKangkung from "@/assets/informasi-tanaman/kangkung.png";
import ImageKucai from "@/assets/informasi-tanaman/kucai.png";
import ImageBayamMerah from "@/assets/informasi-tanaman/bayam-merah.png";
import ImageBayamBrasil from "@/assets/informasi-tanaman/bayam-brasil.png";

const informasiTanaman = [
  {
    id: "bayam",
    nama: "Bayam",
    latin: "Amaranthus tricolor",
    image: ImageBayam,
    detailTanaman: {
      namaTanaman: "Bayam Hijau",
      keluarga: "Amaranthaceae",
      genus: "Amaranthus",
      estimasiWaktuPanen: "25-40 hari setelah tanam",
      kedalamanPengolahanTanah: "15-20 cm",
      pemupukanDasar: [
        "Pupuk kandang dan kompos 10-20 ton per hektar",
        "Pupuk NPK (Nitrogen, Fosfor, Kalium) dengan perbandingan 15:15:15 sebanyak 200-300 kg per hektar",
      ],
      jenisHamaPenyakit: {
        hama: [
          "Kutu daun (Aphids)",
          "Ulat daun (Spodoptera spp.)",
          "Lalat penggorok daun (Liriomyza spp.)",
        ],
        penyakit: [
          "Cendawan daun (Cercospora spp.)",
          "Busuk akar (Rhizoctonia solani)",
        ],
      },
      kondisiTerbaik: {
        suhu: "20-30°C",
        kelembabanUdara: "60-80%",
        kelembabanTanah:
          "Tanah harus dijaga tetap lembab tetapi tidak tergenang air",
        nutrisiTanah: "Tanah subur, kaya bahan organik",
        cahaya: "Sinar matahari penuh (6-8 jam per hari)",
        pHTanah: "6.0-7.5",
      },
    },
  },
  {
    id: "kemangi",
    nama: "Kemangi",
    latin: "Ocimum basilicum",
    image: ImageKemangi,
    detailTanaman: {
      namaTanaman: "Kemangi",
      keluarga: "Lamiaceae",
      genus: "Ocimum",
      estimasiWaktuPanen: "30-40 hari setelah tanam",
      kedalamanPengolahanTanah: "10-15 cm",
      pemupukanDasar: [
        "Pupuk kandang dan kompos 8-15 ton per hektar",
        "Pupuk NPK dengan perbandingan 16:16:16 sebanyak 150-250 kg per hektar",
      ],
      jenisHamaPenyakit: {
        hama: ["Kutu daun (Aphids)", "Ulat grayak (Spodoptera litura)"],
        penyakit: [
          "Cendawan daun (Peronospora spp.)",
          "Busuk batang (Sclerotium rolfsii)",
        ],
      },
      kondisiTerbaik: {
        suhu: "20-35°C",
        kelembabanUdara: "60-85%",
        kelembabanTanah:
          "Tanah harus dijaga tetap lembab tetapi tidak tergenang air",
        nutrisiTanah: "Tanah subur, kaya bahan organik",
        cahaya: "Sinar matahari penuh (6-8 jam per hari)",
        pHTanah: "5.5-7.0",
      },
    },
  },
  {
    id: "kangkung",
    nama: "Kangkung",
    latin: "Ipomoea aquatica",
    image: ImageKangkung,
    detailTanaman: {
      namaTanaman: "Kangkung",
      keluarga: "Convolvulaceae",
      genus: "Ipomoea",
      estimasiWaktuPanen: "25-30 hari setelah tanam",
      kedalamanPengolahanTanah: "10-20 cm",
      pemupukanDasar: [
        "Pupuk kandang dan kompos 10-20 ton per hektar",
        "Pupuk NPK dengan perbandingan 15:15:15 sebanyak 200-300 kg per hektar",
      ],
      jenisHamaPenyakit: {
        hama: [
          "Ulat grayak (Spodoptera litura)",
          "Lalat penggorok daun (Liriomyza spp.)",
        ],
        penyakit: [
          "Cendawan daun (Alternaria spp.)",
          "Busuk akar (Pythium spp.)",
        ],
      },
      kondisiTerbaik: {
        suhu: "20-35°C",
        kelembabanUdara: "60-90%",
        kelembabanTanah:
          "Tanah harus dijaga tetap lembab tetapi tidak tergenang air",
        nutrisiTanah: "Tanah subur, kaya bahan organik",
        cahaya: "Sinar matahari penuh (6-8 jam per hari)",
        pHTanah: "6.0-7.0",
      },
    },
  },
  {
    id: "kucai",
    nama: "Kucai",
    latin: "Allium tuberosum",
    image: ImageKucai,
    detailTanaman: {
      namaTanaman: "Kucai",
      keluarga: "Amaryllidaceae",
      genus: "Allium",
      estimasiWaktuPanen: "60-75 hari setelah tanam",
      kedalamanPengolahanTanah: "15-20 cm",
      pemupukanDasar: [
        "Pupuk kandang dan kompos 8-15 ton per hektar",
        "Pupuk NPK dengan perbandingan 12:12:17 sebanyak 200-250 kg per hektar",
      ],
      jenisHamaPenyakit: {
        hama: ["Thrips", "Lalat daun (Phytomyza gymnostoma)"],
        penyakit: [
          "Bercak daun (Alternaria porri)",
          "Busuk leher akar (Phytophthora porri)",
        ],
      },
      kondisiTerbaik: {
        suhu: "15-25°C",
        kelembabanUdara: "70-85%",
        kelembabanTanah:
          "Tanah harus dijaga tetap lembab tetapi tidak tergenang air",
        nutrisiTanah: "Tanah subur, kaya bahan organik",
        cahaya: "Sinar matahari penuh (4-6 jam per hari)",
        pHTanah: "6.0-7.0",
      },
    },
  },
  {
    id: "bayam-merah",
    nama: "Bayam Merah",
    latin: "Amaranthus tricolor",
    image: ImageBayamMerah,
    detailTanaman: {
      namaTanaman: "Bayam Merah",
      keluarga: "Amaranthaceae",
      genus: "Amaranthus",
      estimasiWaktuPanen: "25-40 hari setelah tanam",
      kedalamanPengolahanTanah: "15-20 cm",
      pemupukanDasar: [
        "Pupuk kandang dan kompos 10-20 ton per hektar",
        "Pupuk NPK dengan perbandingan 15:15:15 sebanyak 200-300 kg per hektar",
      ],
      jenisHamaPenyakit: {
        hama: [
          "Kutu daun (Aphids)",
          "Ulat daun (Spodoptera spp.)",
          "Lalat penggorok daun (Liriomyza spp.)",
        ],
        penyakit: [
          "Cendawan daun (Cercospora spp.)",
          "Busuk akar (Rhizoctonia solani)",
        ],
      },
      kondisiTerbaik: {
        suhu: "20-30°C",
        kelembabanUdara: "60-80%",
        kelembabanTanah:
          "Tanah harus dijaga tetap lembab tetapi tidak tergenang air",
        nutrisiTanah: "Tanah subur, kaya bahan organik",
        cahaya: "Sinar matahari penuh (6-8 jam per hari)",
        pHTanah: "6.0-7.5",
      },
    },
  },
  {
    id: "bayam-brasil",
    nama: "Bayam Brasil",
    latin: "Alternanthera brasiliana",
    image: ImageBayamBrasil,
    detailTanaman: {
      namaTanaman: "Bayam Brasil",
      keluarga: "Amaranthaceae",
      genus: "Alternanthera",
      estimasiWaktuPanen: "30-50 hari setelah tanam",
      kedalamanPengolahanTanah: "15-20 cm",
      pemupukanDasar: [
        "Pupuk kandang dan kompos 10-20 ton per hektar",
        "Pupuk NPK dengan perbandingan 15:15:15 sebanyak 200-300 kg per hektar",
      ],
      jenisHamaPenyakit: {
        hama: ["Kutu daun (Aphids)", "Ulat daun (Spodoptera spp.)"],
        penyakit: [
          "Cendawan daun (Cercospora spp.)",
          "Busuk akar (Rhizoctonia solani)",
        ],
      },
      kondisiTerbaik: {
        suhu: "20-30°C",
        kelembabanUdara: "60-80%",
        kelembabanTanah:
          "Tanah harus dijaga tetap lembab tetapi tidak tergenang air",
        nutrisiTanah: "Tanah subur, kaya bahan organik",
        cahaya: "Sinar matahari penuh (6-8 jam per hari)",
        pHTanah: "6.0-7.5",
      },
    },
  },
];

function getAllTanaman() {
  return informasiTanaman.map((tanaman) => ({
    id: tanaman.id,
    nama: tanaman.nama,
    latin: tanaman.latin,
    image: tanaman.image,
  }));
}

function getDetailTanaman(id) {
  return informasiTanaman.find((tanaman) => tanaman.id === id);
}

export { getAllTanaman, getDetailTanaman };
