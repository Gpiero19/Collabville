import { Link } from "react-router-dom";
import './mainMenu.css';

export default function MainMenu() {
    return (
        <div className="mainmenu-container">
            <h1>Collabville: A Town of Two Creators ❤</h1>
            <div className="links-container">
                <Link className="link-box" to="/marie-art-studio">Marie Art Studio</Link>
                <Link className="link-box" to="/gian-code-lab">Gian's Code Lab</Link>
                <Link className="link-box" to="/collabville">Collabville</Link>
                <Link className="link-box" to="/about-us">About Us</Link>
            </div>
            {/* <button>Back!</button> */}
        </div>
        );
}