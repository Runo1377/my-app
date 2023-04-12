export default function BookingForm(props) {

    return(<>
        <form className="booking-form" onSubmit={props.onFormSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" value={props.date} onChange={props.onDateChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="times" value={props.timesList} onChange={props.onTimesListChange}>
                {props.listOfTimes}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="res-guests" value={props.guests} onChange={props.onGuestsChange} />
            <label htmlFor="occasion">Occasion</label>
            <select id="res-occasion" name="occasion" value={props.occasion} onChange={props.onOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    </>)
}