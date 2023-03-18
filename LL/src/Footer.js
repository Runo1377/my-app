export default function Footer () {
    return (<>
        <footer>
            <div className="container grid-4col">
                <div className="cell"><img src="Logo.svg" alt="Little Lemon" /></div>
                <div className="cell">
                    <h3>Links</h3>
                    <ul>
                        <li className="f-links"><a href="/">Home</a></li>
                        <li className="f-links"><a href="/">About</a></li>
                        <li className="f-links"><a href="/">Menu</a></li>
                        <li className="f-links"><a href="/">Reservations</a></li>
                        <li className="f-links"><a href="/">Order Online</a></li>
                        <li className="f-links"><a href="/">Login</a></li>
                    </ul>
                </div>
                <div className="cell">
                    <h3>Contact</h3>
                    <p>111 Lemony Way<br />Lemonopolis, CA 91111</p>
                    <p>(555) 555-5555</p>
                    <p>Hello@LittleLemon.com</p>
                </div>
                <div className="cell">
                    <h3>Socials</h3>
                    <ul>
                        <li className="social-links"><a href="/">Facebook</a></li>
                        <li className="social-links"><a href="/">Instagram</a></li>
                        <li className="social-links"><a href="/">Twitter</a></li>
                        <li className="social-links"><a href="/">YouTube</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>)
}