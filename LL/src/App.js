import './App.css';
import Header from "./Header.js";
import Nav from "./Nav.js";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Menu from './Pages/Menu';
import Footer from "./Footer.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
