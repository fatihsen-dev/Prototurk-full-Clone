import Anasayfa from "../page/main/Anasayfa/content/Content";
import Akis from "../page/main/Akis/content/Akis";
import AkisSorular from "../page/main/Akis/content/Sorular";
import AkisCevaplar from "../page/main/Akis/content/Cevaplar";
import AkisMakaleler from "../page/main/Akis/content/Makaleler";
import Kesfet from "../page/main/Kesfet/Kesfet";
import Makaleler from "../page/main/Makaleler/Makaleler";
import SoruCevap from "../page/main/SoruCevap/SoruCevap";
import DersIstekleri from "../page/main/DersIstekleri/DersIstekleri";
import Html from "../page/language/Html";
import Css from "../page/language/Css";
import Javascript from "../page/language/Javascript";
import Php from "../page/language/Php";
import Mysql from "../page/language/Mysql";
import Laravel from "../page/language/Laravel";
import Python from "../page/language/Python";
import Git from "../page/language/Git";
import NotFound from "../page/main/404/NotFound";
import CevaplanmisSorular from "../page/main/SoruCevap/CevaplanmisSorular";
import CozulmemisCevaplar from "../page/main/SoruCevap/CozulmemisSorular";
import Kategoriler from "../page/main/SoruCevap/Kategori";
import Populer from "../page/main/SoruCevap/Populer";
import SizeOzelSorular from "../page/main/SoruCevap/SizeOzelSorular";
import Favorileriniz from "../page/main/SoruCevap/Favorileriniz";

const routes = [
  {
    path: "/",
    element: <Anasayfa />,
  },
  {
    path: "akis",
    element: <Akis />,
    children: [
      {
        path: "",
        element: <AkisSorular />,
      },
      {
        path: "cevaplar",
        element: <AkisCevaplar />,
      },
      {
        path: "makaleler",
        element: <AkisMakaleler />,
      },
    ],
  },
  {
    path: "kesfet",
    element: <Kesfet />,
  },
  {
    path: "makaleler",
    element: <Makaleler />,
  },
  {
    path: "soru-cevap",
    element: <SoruCevap />,
  },
  {
    path: "cevaplanmamis-sorular",
    element: <CevaplanmisSorular />,
  },
  {
    path: "cozulmemis-sorular",
    element: <CozulmemisCevaplar />,
  },
  {
    path: "kategoriler",
    element: <Kategoriler />,
  },
  {
    path: "populer-sorular",
    element: <Populer />,
  },
  {
    path: "takip-ettigim-sorular",
    element: <SizeOzelSorular />,
  },
  {
    path: "favori-sorular",
    element: <Favorileriniz />,
  },
  {
    path: "ders-istekleri",
    element: <DersIstekleri />,
  },
  {
    path: "html",
    element: <Html />,
  },
  {
    path: "css",
    element: <Css />,
  },
  {
    path: "javascript",
    element: <Javascript />,
  },
  {
    path: "php",
    element: <Php />,
  },
  {
    path: "mysql",
    element: <Mysql />,
  },
  {
    path: "laravel",
    element: <Laravel />,
  },
  {
    path: "python",
    element: <Python />,
  },
  {
    path: "git",
    element: <Git />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
