import "./App.css";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menus/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Kuidas from "./Components/Kuidas/Kuidas";
import Hinnad from "./Components/Hinnad/Hinnad";
import Kontakt from "./Components/Kontakt/Kontakt";
import Muugitingimused from "./Components/Muugitingimused/Muugitingimused";
import Lovebook from "./Components/Lovebook/Lovebook";
import SavedImage from "./Components/SavedImage";
function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/kuidastellida" element={<Kuidas />} />
            <Route path="/hinnad" element={<Hinnad />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/muugitingimused" element={<Muugitingimused />} />
            <Route path="/createlovebook" element={<Lovebook />} />
            <Route path="/saveimage" element={<SavedImage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
