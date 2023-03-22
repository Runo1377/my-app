import Specials from "../Components/Specials.js";
import Testimonials from "../Components/Testimonials.js";
import Chicago from "../Components/Chicago.js";
import Hero from "../Components/Hero.js";

export default function Home() {
    return(<>
        <Hero />
        <Specials />
        <Testimonials />
        <Chicago />
    </>)
}