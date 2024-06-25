import ImageUlatGrayak from "@/assets/informasi-hama/ulat-grayak.jpg";
import ImageKutuDaun from "@/assets/informasi-hama/kutu-daun.jpg";
import ImageWereng from "@/assets/informasi-hama/wereng.jpg";
import ImageSiput from "@/assets/informasi-hama/siput.jpg";
import ImageGanjur from "@/assets/informasi-hama/ganjur.png";
import ImageBercakDaun from "@/assets/informasi-hama/bercak-daun.jpg";
import ImageHawarDaun from "@/assets/informasi-hama/hawar-daun.jpg";

const informasiHama = [
  {
    id: "ulat-grayak",
    nama: "Ulat Grayak",
    image: ImageUlatGrayak,
    tanamanTerkena: [
      "Kucai",
      "Bayam",
      "Kemangi",
      "Jagung",
      "Tebu",
      "Sorgum",
      "Padi",
      "Kangkung",
    ],
    ciriTanaman: [
      "Kuncup daun berlubang-lubang",
      "Banyak kotoran larva",
      "Bagian-bagian daun mengalami kerusakan",
      "Dapat memakan habis daun sampai tersisa pelepah daun",
      "Tanaman dapat melepuh",
    ],
    caraPencegahan: [
      "Memastikan tanah dalam kondisi yang baik",
      "Menggunakan benih bibit tanaman yang baik agar terbebas dari penyakit",
      "Dilakukan penyemprotan pemberantas hama di waktu yang tepat",
    ],
    penanganan: ["Penyemprotan insektisida"],
  },
  {
    id: "kutu-daun",
    nama: "Kutu Daun",
    image: ImageKutuDaun,
    tanamanTerkena: [
      "Kucai",
      "Bayam",
      "Kemangi",
      "Kubis",
      "Cabai",
      "Seledri",
      "Tomat",
      "Kangkung",
    ],
    ciriTanaman: [
      "Menghisap cairan, tangkai daun bunga dan pucuk tanaman",
      "Pucuk atau daun tanaman keriput",
      "Daun tumbuh tidak normal",
      "Daun keriting",
      "Daun menggulung",
    ],
    caraPencegahan: [
      "Pemilihan bibit yang sehat",
      "Pengendalian gulma sebagai tempat berkembang biaknya kutu daun",
      "Penggunaan tanaman penghalang",
      "Pemberian pupuk yang tepat",
    ],
    penanganan: [
      "Menggunakan pestisida sintetis (perfektion, orthene, anthio, dan supracide 25 WP)",
      "Penyemprotan pestisida nabati (daun pepaya)",
    ],
  },
  {
    id: "wereng",
    nama: "Wereng",
    image: ImageWereng,
    tanamanTerkena: ["Bayam", "Kemangi", "Padi", "Teh"],
    ciriTanaman: ["Daun menguning", "Tanaman mati", "Kering"],
    caraPencegahan: [
      "Pemilihan bibit tanaman yang baik",
      "Pergiliran tanaman",
      "Memperluas jarak tanam",
      "Hindari kondisi tanah yang tergenang air dalam waktu yang lama",
      "Pengaturan pemberian air secara optimal",
      "Pemupukan seimbang",
      "Penyiangan gulma",
    ],
    penanganan: [
      "Penggunaan pestisida organik seperti dari daun sirsak dengan campuran bawang putih",
      "Pemupukan",
      "Penggunaan insektisida",
      "Pemangkasan tanaman",
    ],
  },
  {
    id: "siput",
    nama: "Siput (Bekicot)",
    image: ImageSiput,
    tanamanTerkena: [
      "Kucai",
      "Bayam",
      "Kemangi",
      "Cabai",
      "Kentang",
      "Tebu",
      "Padi",
      "Kangkung",
    ],
    ciriTanaman: [
      "Batang dan daun rusak",
      "Terdapat kotoran hitam pada batang atau daun",
      "Terdapat cangkang siput yang tertinggal",
      "Tanaman sulit tumbuh",
    ],
    caraPencegahan: [
      "Menjaga kebersihan tanaman",
      "Membuat tanaman lebih tinggi",
      "Penggunaan insektisida ramah lingkungan",
    ],
    penanganan: [
      "Pengambilan siput bekicot secara berkala",
      "Penggunaan pestisida ramah lingkungan",
    ],
  },
  {
    id: "ganjur",
    nama: "Ganjur",
    image: ImageGanjur,
    tanamanTerkena: ["Kucai", "Padi", "Bawang", "Kangkung"],
    ciriTanaman: [
      "Pertumbuhan daun terhambat",
      "Tanaman kerdil",
      "Daun mengalami kelainan bentuk",
      "Daun layu dan menggulung",
      "Tanaman kering",
    ],
    caraPencegahan: [
      "Pemilihan bibit tanaman yang baik",
      "Lokasi tanaman yang tepat",
      "Kebersihan lahan dijaga",
      "Jarak tanam yang cukup luas",
      "Lakukan pemupukan yang seimbang",
      "Kosongkan lahan beberapa minggu atau bulan dalam periode antar musim tanam",
    ],
    penanganan: [
      "Menanam banyak tanaman yang bunga agar banyak serangga datang sehingga serangga mampu mengusirnya",
      "Lakukan pemberian insektisida secara akurat",
    ],
  },
  {
    id: "bercak-daun",
    nama: "Bercak Daun",
    image: ImageBercakDaun,
    tanamanTerkena: [
      "Kucai",
      "Bayam",
      "Kemangi",
      "Selada",
      "Terong",
      "Paprika",
      "Kubis",
      "Brokoli",
      "Kembang kol",
      "Kangkung",
    ],
    ciriTanaman: [
      "Timbulnya bercak-bercak putih pada daun",
      "Daun melepuh terutama pada sisi bawah",
    ],
    caraPencegahan: [
      "Pangkas daun yang sudah menguning",
      "Bersihkan tanaman dari gulma",
      "Lakukan rotasi tanaman",
      "Lakukan penyiraman secara tepat",
    ],
    penanganan: [
      "Pemangkasan daun pada tanaman yang sudah terkena penyakit",
      "Oleskan fungisida",
    ],
  },
  {
    id: "hawar-daun",
    nama: "Hawar Daun",
    image: ImageHawarDaun,
    tanamanTerkena: ["Jagung", "Kangkung", "Bayam", "Padi"],
    ciriTanaman: [
      "Terdapat goresan luka pada daun",
      "Terdapat lubang pada daun",
      "Terdapat bercak-bercak pada daun",
      "Daun dapat menguning",
    ],
    caraPencegahan: [
      "Jarak tanam yang cukup luas",
      "Pengairan berselang (hindari penggenangan terus menerus)",
      "Pemupukan seimbang",
      "Sebelum penanaman gulma inang harus dibersihkan",
      "Sediakan penutup seperti plastik untuk menghindari panas yang menyengat",
      "Hindari menanam tumbuhan dengan tumbuhan lain yang rentan terkena hawar daun",
    ],
    penanganan: [
      "Penambahan dolomit pada lahan",
      "Air yang menggenang dikurangi",
      "Penyemprotan pestisida",
      "Sanitasi lahan pergiliran tanaman yang bukan inang patogen",
    ],
  },
];

function getAllHama() {
  return informasiHama.map((hama) => ({
    id: hama.id,
    nama: hama.nama,
    image: hama.image,
  }));
}

function getDetailHama(id) {
  return informasiHama.find((hama) => hama.id === id);
}

export { getAllHama, getDetailHama };
