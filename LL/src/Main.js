export default function Main () {
    return(<>
        <main>
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
            <section className="specials container mb50">
                <div className="grid-2col">
                    <div className="cell cell-center"><h2>This Weeks Specials</h2></div>
                    <div className="cell align-right cell-center"><button type="button" className="primary">Online Menu</button></div>
                </div>
                <div className="grid-3col">
                    <article className="cell card">
                        <div className="menu-img">
                            <img src="greek salad.jpg" alt="Greek Salad" />
                        </div>
                        <div className="menu-item">
                            <div className="menu-title">
                                <h3 className="menu-name">Greek Salad</h3>
                                <span className="menu-price secondary-one-txt">$12.99</span>
                            </div>
                            <div className="menu-desc">
                                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            </div>
                            <div>
                                <button className="order primary btn-sm" type="button">Order for Delivery <i className="fa-solid fa-truck"></i></button>
                            </div>
                        </div>
                    </article>
                    <article className="cell card">
                        <div className="menu-img">
                            <img src="Bruchetta.jpg" alt="Bruchetta" />
                        </div>
                        <div className="menu-item">
                            <div className="menu-title">
                                <h3 className="menu-name">Bruchetta</h3>
                                <span className="menu-price secondary-one-txt">$5.99</span>
                            </div>
                            <div className="menu-desc"><p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p></div>
                            <div>
                                <button className="order primary btn-sm" type="button">Order for Delivery <i className="fa-solid fa-truck"></i></button>
                            </div>
                        </div>
                    </article>
                    <article className="cell card">
                        <div className="menu-img">
                            <img src="lemon-dessert1.jpg" alt="Lemon Dessert" />
                        </div>
                        <div className="menu-item">
                            <div className="menu-title">
                                <h3 className="menu-name">Lemon Dessert</h3>
                                <span className="menu-price secondary-one-txt">$12.99</span>
                            </div>
                            <div className="menu-desc"><p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p></div>
                            <div>
                                <button className="order primary btn-sm" type="button">Order for Delivery <i className="fa-solid fa-truck"></i></button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <section className="testimonials yellow-bg">
                <div className="container">
                    <h2 className="align-center mb50">Testimonials</h2>
                    <div className="grid-4col">
                        <article className="cell card">
                            <div className="testi-info">
                                <div className="testi-img"><img src="User-Profile-PNG.png" alt="Placeholder" /></div>
                                <div className="testi-name">
                                    <h3>Person One</h3>
                                    <span className="rating">4.5/5</span>
                                </div>
                            </div>
                            <div className="testi-quote">"The food was amazing!"</div>
                        </article>
                        <article className="cell card">
                            <div className="testi-info">
                                <div className="testi-img"><img src="User-Profile-PNG.png" alt="Placeholder" /></div>
                                <div className="testi-name">
                                    <h3>Person One</h3>
                                    <span className="rating">4.5/5</span>
                                </div>
                            </div>
                            <div className="testi-quote">"The food was amazing!"</div>
                        </article>
                        <article className="cell card">
                            <div className="testi-info">
                                <div className="testi-img"><img src="User-Profile-PNG.png" alt="Placeholder" /></div>
                                <div className="testi-name">
                                    <h3>Person One</h3>
                                    <span className="rating">4.5/5</span>
                                </div>
                            </div>
                            <div className="testi-quote">"The food was amazing! Will tell all my friends about this place."</div>
                        </article>
                        <article className="cell card">
                            <div className="testi-info">
                                <div className="testi-img"><img src="User-Profile-PNG.png" alt="Placeholder" /></div>
                                <div className="testi-name">
                                    <h3>Person One</h3>
                                    <span className="rating">4.5/5</span>
                                </div>
                            </div>
                            <div className="testi-quote">"The food was amazing!"</div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="container grid-2col about">
                <article className="cell middle">
                    <h2>Little Lemon</h2>
                    <p className="city">Chicago</p>
                    <div className="about-txt">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                </article>
                <article className="cell about-img"><img src="Mario and Adrian A.jpg" alt="About Little Lemon" /></article>
            </section>
        </main>
    </>)
}