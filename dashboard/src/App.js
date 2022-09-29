import '../src/Assets/css/app.css';

import ContentWrapper from "./Views/ContentWrapper/ContentWrapper"
import Sidebar from './components/Sidebar/Sidebar';
import Error404 from './components/Error404/Error404';
import { Routes, Route } from "react-router-dom";


//se encargan de los estilos
function App() {
  return (
    <div className="App">
      <div id="wrapper">

        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">

          <ContentWrapper />

        </div>
      </div>


    </div>
  );
}

export default App;
