import Navbar from "./Navbar";
import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png";

function App() {
  return (
    <div>
      <Navbar />
      <div id="accueil">
        <Banner>
          <img src={logo} alt="Glow Box" className="glow-logo" />
          <div>
            <h1 className="glow-title">Glow Box</h1>
            <p className="glow-subtitle">
              Trouve le bon soin pour ta peau : hydratation et protection en un coup d'œil
            </p>
          </div>
        </Banner>
      </div>
      <ShoppingList />
    </div>
  );
}

export default App;