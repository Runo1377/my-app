import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Menu from './Pages/Menu';
import BookingTable from './Pages/BookingTable';

export default function Main() {
    return(<>
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path='/reserve-a-table' element={<BookingTable />}></Route>
            </Routes>
        </main>
    </>)
}