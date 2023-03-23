import {Link} from "react-router-dom";
export default function Nav () {
    return(<>
        <nav className="flex-item">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><a href="/">Order Online</a></li>
                <li><Link to="/reserve-a-table">Reserve A Table</Link></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    </>)
}