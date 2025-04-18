import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Main from "../Main";
import Navigation from "../Navigation";
import "./App.css";
import ItemDetails from "../ItemDetails";

function App() {
  return (
    <Router>
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
