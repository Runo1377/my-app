export default function Header(props) {
    return(<>
        <header className="container flex-center">
            <div className="logo flex-item"><img src="Logo.svg" alt="Little Lemon" /></div>
            {props.children}
        </header>
    </>)
}