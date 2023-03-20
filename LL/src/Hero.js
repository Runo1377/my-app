export default function Hero () {
    return(<>
        <section className="hero">
                <div className="container grid-2col">
                    <div className="hero-text cell">
                        <h1 className="yellow-txt">Little Lemon</h1>
                        <p>Chicago</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type="button" className="primary">Reserve A Table</button>
                    </div>
                    <div className="hero-img cell"><img src="hero-img.png" alt="Hero" /></div>
                </div>
            </section>
    </>)
}