import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src = "https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png"/>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>

        </div>
    )
};

export default Header;