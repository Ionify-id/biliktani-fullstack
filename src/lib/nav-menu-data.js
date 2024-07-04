// icon nav menu
import BerandaIcon from "@/assets/nav-icon/icon-beranda.png";
import ActiveBerandaIcon from "@/assets/nav-icon/icon-beranda-active.png";
import SiapTaniIcon from "@/assets/nav-icon/icon-siap-tani.png";
import ActiveSiapTaniIcon from "@/assets/nav-icon/icon-siap-tani-active.png";
import RawatTaniIcon from "@/assets/nav-icon/icon-rawat-tani.png";
import ActiveRawatTaniIcon from "@/assets/nav-icon/icon-rawat-tani-active.png";
import BinaTaniIcon from "@/assets/nav-icon/icon-bina-tani.png";
import ActiveBinaTaniIcon from "@/assets/nav-icon/icon-bina-tani-active.png";
import CatatanIcon from "@/assets/nav-icon/icon-catatan.png";
import ActiveCatatanIcon from "@/assets/nav-icon/icon-catatan-active.png";

// icon pelaksana
import DikbudIcon from "@/assets/pelaksana-icon/icon-dikbud.png";
import KampusMerdekaIcon from "@/assets/pelaksana-icon/icon-kampus-merdeka.png";
import PPKOIcon from "@/assets/pelaksana-icon/icon-ppko.png";
import IPBIcon from "@/assets/pelaksana-icon/icon-ipb.png";
import HimatetaIcon from "@/assets/pelaksana-icon/icon-himateta.png";
import AgritechIcon from "@/assets/pelaksana-icon/icon-agritech.png";

const navMenu = [
  {
    mainMenu: {
      image: BerandaIcon,
      imageActive: ActiveBerandaIcon,
      altImage: "beranda menu icon",
      title: "Beranda",
      startPath: "/",
    },
  },
  {
    mainMenu: {
      image: SiapTaniIcon,
      imageActive: ActiveSiapTaniIcon,
      altImage: "siap tani menu icon",
      title: "Siap tani",
      startPath: "/siap-tani",
    },
    subMenu: [
      {
        href: "/siap-tani/kalkulator-pupuk",
        title: "Kalkulator pupuk",
      },
      {
        href: "/siap-tani/prakiraan-produktivitas-tanaman",
        title: "Prakiraan produktivitas tanaman",
      },
      {
        href: "/siap-tani/informasi-tanaman",
        title: "Informasi tanaman",
      },
      {
        href: "/siap-tani/prakiraan-waktu-panen",
        title: "Prakiraan waktu panen",
      },
    ],
  },
  {
    mainMenu: {
      image: RawatTaniIcon,
      imageActive: ActiveRawatTaniIcon,
      altImage: "rawat tani menu icon",
      title: "Rawat tani",
      startPath: "/rawat-tani",
    },
    subMenu: [
      {
        href: "/rawat-tani/informasi-hama",
        title: "Informasi hama",
      },
      {
        href: "/rawat-tani/kebutuhan-air-tanaman",
        title: "Kebutuhan air tanaman",
      },
      {
        href: "/rawat-tani/drainase-lahan-tanaman",
        title: "Drainase lahan tanaman",
      },
    ],
  },
  {
    mainMenu: {
      image: BinaTaniIcon,
      imageActive: ActiveBinaTaniIcon,
      altImage: "bina tani menu icon",
      title: "Bina tani",
      startPath: "/bina-tani",
    },
  },
  // {
  //   mainMenu: {
  //     image: CatatanIcon,
  //     imageActive: ActiveCatatanIcon,
  //     altImage: "catatan menu icon",
  //     title: "Catatan",
  //     startPath: "/catatan",
  //   },
  // },
];

const pelaksanaData = [
  { image: DikbudIcon, alt: "kemendikbud icon" },
  { image: KampusMerdekaIcon, alt: "kampus merdeka icon" },
  { image: PPKOIcon, alt: "PPKO icon" },
  { image: IPBIcon, alt: "IPB icon" },
  { image: HimatetaIcon, alt: "Himateta icon" },
  { image: AgritechIcon, alt: "agritech icon" },
];

export { navMenu, pelaksanaData };
