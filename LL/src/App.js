import './App.css';
import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from './Main';
import Footer from "./Footer.js";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
