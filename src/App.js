import "./App.css";
import Navbar from "./components/NavBar";
import Body from "./components/Body";
import Welcome from "./components/Welcome";
import ItemListContainer from "./components/ItemListContainer";
import Contador from "./components/Contador";

function App() {
  return (
    <>
      <Navbar />
      <Welcome greeting="Profe" />
      <ItemListContainer title='Capacitaciones Ser Impersonal'/>
      <Contador/>
      <Body/>
    </>
  );
}

export default App;