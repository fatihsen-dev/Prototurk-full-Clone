import Sidebar from "./sidebar/Sidebar";
import routes from "../routes/routes";
import { useRoutes } from "react-router-dom";

function Main({ style, ActiveSidebar }) {
  return (
    <div className='main flex-1 flex relative'>
      <Sidebar style={style} ActiveSidebar={ActiveSidebar} />
      {useRoutes(routes)}
    </div>
  );
}

export default Main;
