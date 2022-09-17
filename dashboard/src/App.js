import './App.css';
import Stats from "./components/stats/Stats.jsx"
//se encargan de los estilos
function App() {
  return (
    <div className="App">
      <Stats request="porducts"/>
      <Stats request="users"/>
    </div>
  );
}

export default App;
