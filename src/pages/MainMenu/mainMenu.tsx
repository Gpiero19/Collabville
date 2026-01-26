import { Link } from "react-router-dom";


export default function MainMenu() {
    return (
        <div>
        <h1>Collabville: A Town of Two Creators ❤</h1>
        <div>
            <ul style={{ listStyle: 'none' }}>
                <li><Link to="/MarieArtStudio">Marie Art Studio</Link></li>
                <li><Link to="/GianCodeLab">Gian's Code Lab</Link></li>
                <li><Link to="/Collabville">Collabville</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </ul>
        </div>
        </div>
        );
}