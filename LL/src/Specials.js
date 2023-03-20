export default function Specials () {
    return (<>
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
    </>)
}