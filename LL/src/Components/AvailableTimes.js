import {useState} from "react";

export default function AvailableTimes() {
    const [timeList, setTimeList] = useState(["5:00pm","6:00pm","7:00pm","8:00pm","9:00pm","10:00pm"]);
    const listOfTimes = timeList.map((time) =>
        <option key={time}>{time}</option>
    );

    return (<>{listOfTimes}</>)
}