import Sidebar from "./sidebar/Sidebar";
import routes from "../routes/routes";
import { useRoutes } from "react-router-dom";

function Main({ style, deAktiveSidebar, darkTheme, setDarkTheme }) {
  return (
    <div className='main flex-1 flex relative'>
      <Sidebar
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        style={style}
        deAktiveSidebar={deAktiveSidebar}
      />
      {useRoutes(routes)}
    </div>
  );
}

export default Main;
