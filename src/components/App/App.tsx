import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Main from "../Main";
import Navigation from "../Navigation";
import "./App.css";
import ItemDetails from "../ItemDetails";

const basename = "/butovka";

function App() {
  return (
    <Router basename={basename}>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
