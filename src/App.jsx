import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

const App = () => {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/search" element={<Search />} />
          <Route path="/company" element={<Navigate to="/about" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
