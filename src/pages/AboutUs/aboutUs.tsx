import './AboutUs.css';
import { FaPerson } from "react-icons/fa6";
import { FaPersonDress } from "react-icons/fa6";

export default function AboutUs() {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to Collabville! We are two passionate creators dedicated to building a vibrant community.</p>
            <p>Our mission is to foster collaboration and creativity among individuals from all walks of life.</p>
            <p>Join us on this exciting journey as we create, share, and grow together!</p>
            <FaPerson style={{ fontSize: '48px', color: 'blue' }} className="logo male" />
            <FaPersonDress style={{ fontSize: '48px', color: 'pink' }} className="logo female" />
        </div>
    );
    }
