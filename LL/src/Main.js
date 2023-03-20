import Specials from "./Specials.js";
import Testimonials from "./Testimonials.js";
import Chicago from "./Chicago.js";
import Hero from "./Hero.js";

export default function Main () {
    return(<>
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <Chicago />
        </main>
    </>)
}