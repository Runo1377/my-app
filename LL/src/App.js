import './App.css';
import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { Route, Routes, Link } from "react-router-dom"

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
