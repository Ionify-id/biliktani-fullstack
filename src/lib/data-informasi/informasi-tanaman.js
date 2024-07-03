import ImageBayam from "@/assets/informasi-tanaman/bayam.png";
import ImageKemangi from "@/assets/informasi-tanaman/kemangi.png";
import ImageKangkung from "@/assets/informasi-tanaman/kangkung.png";
import ImageKucai from "@/assets/informasi-tanaman/kucai.png";
import ImagePakcoy from "@/assets/informasi-tanaman/pakcoy.png";
import ImageCaisim from "@/assets/informasi-tanaman/caisim.jpg";

const informasiTanaman = [
  {
    id: "kemangi",
    nama: "Kemangi",
    latin: "Ocimum basilicum",
    image: ImageKemangi,
    detailTanaman: {
      keluarga: "Lamiaceae",
      genus: "Ocimum",
      estimasiWaktuPanen: "25-30 hari setelah tanam",
      kedalamanPengolahanTanah: "15-20 cm",
      pemupukanDasar: "Kompos atau pupuk kandang",
      jenisHamaPenyakit: ["Kutu daun", "Lalat putih", "Jamur", "Busuk akar"],
      kondisiTerbaik: {
        suhuIdeal: "18-30°C",
        kelembabanUdara: "50-60%",
        kelembabanTanah: "Lembab tetapi tidak becek, sekitar 60-70%",
        nutrisiTanah: "1200-1500 PPM (Parts Per Million)",
        cahaya: "Sinar matahari langsung 6-8 jam per hari",
        pHTanah: "6.0-7.5",
      },
      deskripsiTanaman: `
        Kemangi (Ocimum basilicum) adalah tanaman herba yang memiliki daun berbentuk oval dan berwarna hijau terang. Daun kemangi dikenal dengan aroma khas yang kuat, sering dibandingkan dengan campuran jeruk nipis dan cengkeh. Tanaman ini berasal dari Asia Tenggara dan India, tetapi sekarang telah tersebar luas dan dibudidayakan di banyak negara.
        \n\n
        Kemangi sering digunakan dalam kuliner sebagai bumbu dan penyedap dalam berbagai hidangan, seperti lalapan, salad, pasta, dan sup. Selain itu, kemangi memiliki berbagai manfaat kesehatan berkat kandungan antioksidan, vitamin, dan mineralnya. Tanaman ini juga digunakan dalam aromaterapi untuk meredakan stres dan meningkatkan suasana hati. Kemangi tumbuh baik di iklim tropis dengan tanah yang subur dan penyiraman yang cukup.
        \n\n
        Kemangi adalah tumbuhan tahunan yang tumbuh tegak dengan cabang yang banyak. Tanaman ini berbentuk perdu yang tingginya dapat mencapai 100 cm. Bunganya tersusun di tandan yang tegak. Daunnya panjang, tegak, berbentuk taji atau bulat telur, berwarna hijau muda dan berbau harum. Ujung daun bisa tumpul atau bisa juga tajam, panjangnya mencapai 5 cm. Permukaan bergerigi atau juga rata. Wanginya seperti cengkih dan rasanya pahit.`,
      manfaat: [
        "Antioksidan: Kandungan antioksidan dalam kemangi membantu melawan radikal bebas dan mencegah kerusakan sel.",
        "Anti-inflamasi: Senyawa dalam kemangi memiliki sifat anti-inflamasi yang dapat membantu mengurangi peradangan.",
        "Pencernaan: Kemangi dapat membantu meningkatkan kesehatan pencernaan dan meredakan masalah pencernaan.",
        "Antibakteri: Minyak esensial kemangi memiliki sifat antibakteri yang dapat membantu melawan infeksi.",
      ],
      caraPenanaman: [
        "Persiapan benih: Pilih benih kemangi yang berkualitas. Rendam benih dalam air hangat selama 12-24 jam untuk mempercepat perkecambahan.",
        "Penanaman: Tanam benih dengan kedalaman 0.5-1 cm di tanah yang telah diolah dan diperkaya dengan kompos atau pupuk organik.",
        "Jarak tanam: Beri jarak antar tanaman sekitar 20-30 cm agar pertumbuhan optimal dan tidak saling berebut nutrisi.",
        "Penyiraman awal: Siram tanah secara merata setelah menanam benih untuk memastikan kelembaban yang cukup bagi benih yang baru ditanam.",
      ],
      caraPerawatan: [
        "Penyiraman: Siram tanaman secara rutin, jaga agar tanah tetap lembab tetapi tidak becek.",
        "Penyiraman sebaiknya dilakukan pada pagi atau sore hari.",
        "Pemupukan lanjutan: Beri pupuk organik atau kompos setiap 2-3 minggu sekali untuk mendukung pertumbuhan tanaman yang sehat.",
        "Pengendalian hama/penyakit: Periksa tanaman secara rutin untuk mendeteksi hama atau penyakit. Gunakan insektisida atau fungisida alami jika diperlukan untuk menghindari kerusakan tanaman.",
        "Penyiangan: Lakukan penyiangan secara berkala untuk menghilangkan gulma yang dapat mengganggu pertumbuhan tanaman kemangi.",
        "Pemangkasan: Pangkas daun yang sudah tua atau rusak untuk merangsang pertumbuhan tunas baru dan menjaga bentuk tanaman tetap rapi.",
      ],
    },
  },
  {
    id: "kangkung",
    nama: "Kangkung Daun",
    latin: "Ipomoea aquatica",
    image: ImageKangkung,
    detailTanaman: {
      keluarga: "Convolvulaceae",
      genus: "Ipomoea",
      estimasiWaktuPanen: "20-25 hari setelah tanam",
      kedalamanPengolahanTanah: "10-15 cm",
      pemupukanDasar: "Kompos atau pupuk kandang",
      jenisHamaPenyakit: [
        "Kutu daun",
        "Ulat grayak",
        "Penyakit layu",
        "Bercak daun",
      ],
      kondisiTerbaik: {
        suhuIdeal: "20-30°C",
        kelembabanUdara: "70-80%",
        kelembabanTanah: "Lembab hingga basah",
        nutrisiTanah: "1000-1500 PPM (Parts Per Million)",
        cahaya: "Sinar matahari langsung 6-8 jam per hari",
        pHTanah: "6.0-7.0",
      },
      deskripsiTanaman: `
        Kangkung (Ipomoea aquatica) adalah tanaman sayuran hijau yang umum ditemukan di kawasan Asia Tenggara. Tanaman ini dikenal dengan pertumbuhannya yang cepat dan kemampuannya untuk tumbuh di berbagai kondisi lahan, baik yang berair maupun yang lembab.\n\n`,
      manfaat: [
        "Vitamin A: Baik untuk kesehatan mata dan sistem kekebalan tubuh.",
        "Vitamin C: Antioksidan yang membantu meningkatkan daya tahan tubuh.",
        "Zat Besi: Penting untuk pembentukan sel darah merah dan mencegah anemia.",
        "Serat: Membantu pencernaan dan mencegah sembelit.",
      ],
      caraPenanaman: [
        "Persiapan benih: Pilih benih kangkung yang berkualitas.",
        "Penanaman: Tanam benih dengan kedalaman 0.5-1 cm di tanah yang telah diolah.",
        "Jarak tanam: Beri jarak antar tanaman sekitar 10-15 cm agar pertumbuhan optimal.",
        "Penyiraman awal: Siram tanah secara merata setelah menanam benih.",
      ],
      caraPerawatan: [
        "Penyiraman: Siram tanaman secara rutin, jaga agar tanah tetap lembab tetapi tidak becek.",
        "Pemupukan lanjutan: Beri pupuk organik setiap 2-3 minggu sekali.",
        "Pengendalian hama/penyakit: Periksa tanaman secara rutin untuk mendeteksi hama atau penyakit, gunakan insektisida atau fungisida alami jika diperlukan.",
        "Penyiangan: Lakukan penyiangan secara berkala untuk menghilangkan gulma yang dapat mengganggu pertumbuhan tanaman.",
        "Pemangkasan: Pangkas daun yang sudah tua atau rusak untuk merangsang pertumbuhan tunas baru.",
      ],
    },
  },
  {
    id: "kucai",
    nama: "Kucai Daun",
    latin: "Allium schoenoprasum",
    image: ImageKucai,
    detailTanaman: {
      keluarga: "Amaryllidaceae",
      genus: "Allium",
      estimasiWaktuPanen: "60-90 hari setelah tanam",
      kedalamanPengolahanTanah: "15-20 cm",
      pemupukanDasar: "Kompos atau pupuk kandang",
      jenisHamaPenyakit: [
        "Thrips",
        "Kutu daun",
        "Ulat",
        "Penyakit embun tepung",
      ],
      kondisiTerbaik: {
        suhuIdeal: "15-25°C",
        kelembabanUdara: "60-70%",
        kelembabanTanah: "Lembab tetapi tidak becek",
        nutrisiTanah: "800-1200 PPM (Parts Per Million)",
        cahaya: "Sinar matahari langsung 4-6 jam per hari",
        pHTanah: "6.0-7.0",
      },
      deskripsiTanaman: `
        Kucai (Allium tuberosum) adalah tanaman herba dari keluarga bawang (Alliaceae) yang sering digunakan dalam masakan Asia. Tanaman ini memiliki daun panjang, pipih, dan berwarna hijau tua, serta bunga kecil berwarna putih yang mekar dalam kelompok. Kucai memiliki rasa yang lembut, mirip dengan bawang putih, tetapi tidak sekuat itu.
        \n\n
        Kucai berdaun pipih dan bunganya berwarna putih.Aroma kucai lebih dekat ke bawang putih. Daunnya beraroma tajam dan pekat. Bunga kucai dapat digunakan pula sebagai rempah penyedap.`,
      manfaat: [
        "Vitamin A dan C: Antioksidan yang baik untuk kesehatan mata dan sistem kekebalan tubuh.",
        "Kalsium dan Zat Besi: Penting untuk kesehatan tulang dan pembentukan sel darah merah.",
      ],
      caraPenanaman: [
        "Persiapan benih: Pilih benih kucai yang berkualitas.",
        "Penanaman: Tanam benih dengan kedalaman 0.5-1 cm di tanah yang telah diolah.",
        "Jarak tanam: Beri jarak antar tanaman sekitar 15-20 cm agar pertumbuhan optimal.",
        "Penyiraman awal: Siram tanah secara merata setelah menanam benih.",
      ],
      caraPerawatan: [
        "Penyiraman: Siram tanaman secara rutin, jaga agar tanah tetap lembab tetapi tidak becek.",
        "Pemupukan lanjutan: Beri pupuk organik setiap 2-3 minggu sekali.",
        "Pengendalian hama/penyakit: Periksa tanaman secara rutin untuk mendeteksi hama atau penyakit, gunakan insektisida atau fungisida alami jika diperlukan.",
        "Penyiangan: Lakukan penyiangan secara berkala untuk menghilangkan gulma yang dapat mengganggu pertumbuhan tanaman.",
        "Pemangkasan: Pangkas daun yang sudah tua atau rusak untuk merangsang pertumbuhan tunas baru.",
      ],
    },
  },
  {
    id: "bayam",
    nama: "Bayam Daun Cabut",
    latin: "Amaranthus spp.",
    image: ImageBayam,
    detailTanaman: {
      keluarga: "Amaranthaceae",
      genus: "Amaranthus",
      estimasiWaktuPanen: "20-25 hari setelah tanam",
      kedalamanPengolahanTanah: "15-20 cm",
      pemupukanDasar: "Kompos atau pupuk kandang",
      jenisHamaPenyakit: ["Kutu daun", "Ulat", "Penyakit layu", "Bercak daun"],
      kondisiTerbaik: {
        suhuIdeal: "18-30°C",
        kelembabanUdara: "50-60%",
        kelembabanTanah: "Lembab tetapi tidak becek, sekitar 60-70%",
        nutrisiTanah: "800-1000 PPM (Parts Per Million)",
        cahaya: "Sinar matahari langsung 6-8 jam per hari",
        pHTanah: "6.0-7.5",
      },
      deskripsiTanaman: `
        Bayam (Amaranthus spp.) adalah tanaman sayuran berdaun hijau yang populer di seluruh dunia karena nilai gizinya yang tinggi dan kemudahan dalam penanaman. Bayam memiliki daun yang lebar dan berwarna hijau terang, serta batang yang tegak dan berwarna hijau atau kemerahan.
        \n\n
        Bayam adalah tumbuhan yang biasa ditanam untuk dikonsumsi daunnya sebagai sayuran hijau. Tumbuhan ini berasal dari Amerika tropik namun sekarang tersebar ke seluruh dunia. Tumbuhan ini dikenal sebagai sayuran sumber zat besi yang penting bagi tubuh. Kandungan besi pada bayam relatif lebih tinggi daripada sayuran daun lain (besi merupakan penyusun sitokrom, protein yang terlibat dalam fotosintesis) sehingga berguna bagi penderita anemia.`,
      manfaat: [
        "Vitamin A: Baik untuk kesehatan mata dan kulit.",
        "Vitamin C: Meningkatkan sistem kekebalan tubuh.",
        "Zat Besi: Penting untuk pembentukan sel darah merah dan mencegah anemia.",
        "Antioksidan: Melawan radikal bebas dan mencegah kerusakan sel.",
      ],
      caraPenanaman: [
        "Persiapan benih: Pilih benih bayam yang berkualitas.",
        "Penanaman: Tanam benih dengan kedalaman 0.5-1 cm di tanah yang telah diolah.",
        "Jarak tanam: Beri jarak antar tanaman sekitar 10-15 cm agar pertumbuhan optimal.",
        "Penyiraman awal: Siram tanah secara merata setelah menanam benih.",
      ],
      caraPerawatan: [
        "Penyiraman: Siram tanaman secara rutin, jaga agar tanah tetap lembab tetapi tidak becek.",
        "Pemupukan lanjutan: Beri pupuk organik setiap 2-3 minggu sekali.",
        "Pengendalian hama/penyakit: Periksa tanaman secara rutin untuk mendeteksi hama atau penyakit, gunakan insektisida atau fungisida alami jika diperlukan.",
        "Penyiangan: Lakukan penyiangan secara berkala untuk menghilangkan gulma yang dapat mengganggu pertumbuhan tanaman.",
        "Pemangkasan: Pangkas daun yang sudah tua atau rusak untuk merangsang pertumbuhan tunas baru.",
      ],
    },
  },
  {
    id: "pakcoy",
    nama: "Pakcoy",
    latin: "Brassica rapa subsp. chinensis",
    image: ImagePakcoy,
    detailTanaman: {
      keluarga: "Brassicaceae",
      genus: "Brassica",
      estimasiWaktuPanen: "30-45 hari setelah tanam",
      kedalamanPengolahanTanah: "15-20 cm",
      pemupukanDasar: "Kompos atau pupuk kandang",
      jenisHamaPenyakit: ["Kutu daun", "Ulat", "Penyakit layu", "Bercak daun"],
      kondisiTerbaik: {
        suhuIdeal: "18-25°C",
        kelembabanUdara: "60-70%",
        kelembabanTanah: "Lembab tetapi tidak becek",
        nutrisiTanah: "1000-1200 PPM (Parts Per Million)",
        cahaya: "Sinar matahari langsung 4-6 jam per hari",
        pHTanah: "6.0-7.0",
      },
      deskripsiTanaman: `
        Pakcoy atau bok choy (Brassica rapa Kelompok Chinensis; suku sawi-sawian atau Brassicaceae) merupakan jenis sayuran yang populer. Jenis sayuran ini mudah tumbuh di dataran rendah maupun dataran tinggi. Bila ditanam pada suhu sejuk tumbuhan ini akan cepat berbunga. Karena biasanya dipanen seluruh bagian tubuhnya (kecuali akarnya), sifat ini kurang disukai. Pakcoy memiliki sifat antioksidan, antimikroba, dan antikanker. Pakcoy mengandung biomolekul, yakni vitamin C, aldehida, keton, flavonoid, selenium, karotenoid, dan glukosinolat.
        \n\n
        Pakcoy, juga dikenal sebagai sawi pakcoy atau bok choy, adalah tanaman sayuran hijau yang berasal dari Asia Timur. Tanaman ini termasuk dalam keluarga Brassicaceae (suku kubis-kubisan) dan sering digunakan dalam masakan Asia, terutama dalam masakan Tionghoa.`,
      manfaat: [
        "Kandungan Nutrisi: Kaya akan vitamin A, C, dan K, serta mineral seperti kalsium dan zat besi.",
        "Serat: Baik untuk pencernaan dan menjaga kesehatan jantung.",
      ],
      caraPenanaman: [
        "Persiapan benih: Pilih benih pakcoy yang berkualitas.",
        "Penanaman: Tanam benih dengan kedalaman 0.5-1 cm di tanah yang telah diolah.",
        "Jarak tanam: Beri jarak antar tanaman sekitar 20-30 cm agar pertumbuhan optimal.",
        "Penyiraman awal: Siram tanah secara merata setelah menanam benih.",
      ],
      caraPerawatan: [
        "Penyiraman: Siram tanaman secara rutin, jaga agar tanah tetap lembab tetapi tidak becek.",
        "Pemupukan lanjutan: Beri pupuk organik setiap 2-3 minggu sekali.",
        "Pengendalian hama/penyakit: Periksa tanaman secara rutin untuk mendeteksi hama atau penyakit, gunakan insektisida atau fungisida alami jika diperlukan.",
        "Penyiangan: Lakukan penyiangan secara berkala untuk menghilangkan gulma yang dapat mengganggu pertumbuhan tanaman.",
        "Pemangkasan: Pangkas daun yang sudah tua atau rusak untuk merangsang pertumbuhan tunas baru.",
      ],
    },
  },
  {
    id: "caisim",
    nama: "Caisim",
    latin: "Brassica rapa var. chinensis",
    image: ImageCaisim,
    detailTanaman: {
      keluarga: "Brassicaceae",
      genus: "Brassica",
      estimasiWaktuPanen: "30-40 hari setelah tanam",
      kedalamanPengolahanTanah: "10-15 cm",
      pemupukanDasar: "Kompos atau pupuk kandang",
      jenisHamaPenyakit: ["Kutu daun", "Ulat", "Penyakit layu", "Bercak daun"],
      kondisiTerbaik: {
        suhuIdeal: "18-25°C",
        kelembabanUdara: "60-70%",
        kelembabanTanah: "Lembab tetapi tidak becek",
        nutrisiTanah: "1000-1200 PPM (Parts Per Million)",
        cahaya: "Sinar matahari langsung 4-6 jam per hari",
        pHTanah: "6.0-7.0",
      },
      deskripsiTanaman: `
        Tanaman caisim (Brassica rapa var. parachinensis), juga dikenal sebagai sawi hijau atau sawi caisim, adalah sayuran daun hijau yang termasuk dalam keluarga Brassicaceae. Caisim memiliki daun hijau mengkilap dengan tangkai yang tipis dan renyah. Tumbuhan ini tumbuh cepat dan bisa dipanen dalam 30-40 hari setelah tanam. Caisim mengandung banyak nutrisi penting seperti vitamin A, C, dan K, serta serat dan mineral seperti kalsium dan zat besi. Caisim sering digunakan dalam berbagai masakan Asia, termasuk tumisan, sup, dan sebagai bahan utama dalam hidangan seperti mie atau nasi goreng.`,
      manfaat: [
        "Sumber Vitamin: Caisim kaya akan vitamin A dan C yang baik untuk kesehatan mata dan sistem kekebalan tubuh.",
        "Antioksidan: Mengandung antioksidan yang membantu melawan radikal bebas dan mencegah kerusakan sel.",
        "Pencernaan: Serat dalam caisim membantu memperlancar sistem pencernaan dan mencegah sembelit.",
        "Kesehatan Tulang: Kandungan kalsium dalam caisim berkontribusi pada kesehatan tulang dan gigi.",
      ],
      caraPenanaman: [
        "Persiapan benih: Rendam benih caisim dalam air selama 24 jam sebelum ditanam.",
        "Penanaman: Tanam benih dengan kedalaman 0.5-1 cm di tanah yang telah diolah.",
        "Jarak tanam: Beri jarak antar tanaman sekitar 10-15 cm agar pertumbuhan optimal.",
        "Penyiraman awal: Siram tanah secara merata setelah menanam benih.",
      ],
      caraPerawatan: [
        "Penyiraman: Siram tanaman secara rutin, jaga agar tanah tetap lembab tetapi tidak becek.",
        "Pemupukan lanjutan: Beri pupuk organik setiap 2-3 minggu sekali.",
        "Pengendalian hama/penyakit: Periksa tanaman secara rutin untuk mendeteksi hama atau penyakit, gunakan insektisida atau fungisida alami jika diperlukan.",
        "Penyiangan: Lakukan penyiangan secara berkala untuk menghilangkan gulma yang dapat mengganggu pertumbuhan tanaman.",
        "Pemangkasan: Pangkas daun yang sudah tua atau rusak untuk merangsang pertumbuhan tunas baru.",
      ],
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
