import { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Menu from './Pages/Menu';
import BookingTable from './Pages/BookingTable';


export default function Main() {
    const [availableTimes, setAvailableTimes] = useState(["5:00pm","6:00pm","7:00pm","8:00pm","9:00pm","10:00pm"]);
    const listOfTimes = availableTimes.map((time) =>
        <option key={time}>{time}</option>
    );

    function updateTimes() {
        return ["5:00pm","6:00pm","7:00pm","8:00pm","9:00pm","10:00pm"]
    }
    function initializeTimes() {

    }

    function handleTimeListChange(e) {
        setAvailableTimes(e.target.value);
    }
    return(<>
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path='/reserve-a-table' element={<BookingTable listOfTimes={listOfTimes} onTimeListChange={handleTimeListChange} />}></Route>
            </Routes>
        </main>
    </>)
}