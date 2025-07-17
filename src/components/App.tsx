import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";
import Category from "./Category";
import About from "./About";
import Catalog from "./Catalog";
import Delivery from "./Delivery";
import Reviews from "./Reviews";
import Contacts from "./Contacts";
import ItemDetail from "./ItemDetail";

const basename = "/butovka";

function App() {
  return (
    <Router basename={basename}>
    {/* <Router> */}
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:slug" element={<Category />} />
        <Route path="/:slug/:id" element={<ItemDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
