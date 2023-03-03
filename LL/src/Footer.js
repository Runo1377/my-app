export default function Footer () {
    return (<>
        <footer>
            <div class="column">
                <img src="Logo.svg" alt="Little Lemon Restaurant" />
            </div>
            <div class="column">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservations</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
            <div class="column">
                <p>
                    Address:<br />
                    111 Test Ave.<br />
                    Testing, CA 00000
                </p>
                <p>
                    (555) 555-5555
                </p>
                <p>
                    Hello@LittleLemon.com
                </p>
            </div>
            <div class="column">
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                </ul>
            </div>
        </footer>
    </>)
}