import { useState } from "react";
import BookingForm from "../Components/BookingForm";

export default function BookingTable() {
    const [date, setDate] = useState(new Date());
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");    

    function handleFormSubmit (e) {
        e.preventDefault();
    }
    function handleDateChange (e) {
        setDate(e.target.value);
    }
    function handleTimesChange (e) {
        setTimes(e.target.value);
    }
    function handleGuestsChange (e) {
        setGuests(e.target.value);
    }
    function handleOccasionChange (e) {
        setOccasion(e.target.value);
    }

    return (<>
        <section className="container mb50">
            <BookingForm
               date={date}
               times={times}
               guests={guests}
               occasion={occasion}
               onFormSubmit={handleFormSubmit}
               onDateChange={handleDateChange}
               onTimesChange={handleTimesChange}
               onGuestsChange={handleGuestsChange}
               onOccasionChange={handleOccasionChange}
            />
        </section>
    </>)
}