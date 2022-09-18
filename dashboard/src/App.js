import '../src/Assets/css/app.css';

import ContentWrapper from "./Views/ContentWrapper/ContentWrapper"
import Sidebar from './Components/Sidebar/Sidebar';

//se encargan de los estilos
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <ContentWrapper/>
    </div>
  );
}

export default App;
