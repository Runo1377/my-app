import { useState } from "react";
import BookingForm from "../Components/BookingForm";

export default function BookingTable(props) {
    const [date, setDate] = useState(new Date());
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    function handleFormSubmit (e) {
        e.preventDefault();
    }
    function handleDateChange (e) {
        setDate(e.target.value);
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
               guests={guests}
               occasion={occasion}
               onFormSubmit={handleFormSubmit}
               onDateChange={handleDateChange}
               onGuestsChange={handleGuestsChange}
               onOccasionChange={handleOccasionChange}
               listOfTimes={props.listOfTimes}
               onTimeListChange={props.handleTimeListChange}
            />
        </section>
    </>)
}