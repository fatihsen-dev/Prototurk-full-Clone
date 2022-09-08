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
