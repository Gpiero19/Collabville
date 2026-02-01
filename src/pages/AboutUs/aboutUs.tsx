import './AboutUs.css';
import { FaPerson } from "react-icons/fa6";
import { FaPersonDress } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from 'react';

export default function AboutUs() {
    const [activeModal, setActiveModal] = useState<null | "gp" | "marie">(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            >
            <div className="aboutus-container">
                <h1>About Us</h1>
                <div className="page-container">
                    <div className="description-text text-content">
                        <p>Welcome to Collabville! We are two passionate creators dedicated to building a vibrant community.</p>
                        <p>Our mission is to foster collaboration and creativity among individuals from all walks of life.</p>
                        <p>Join us on this exciting journey as we create, share, and grow together!</p>
                </div>
                <div className="personal-info-container">
                    <div className="icons-container">
                        <FaPerson style={{ fontSize: '48px', color: 'blue' }} 
                        className="logo male"  
                        onClick={() => setActiveModal(activeModal === "gp" ? null : "gp")}/>

                        <FaPersonDress style={{ fontSize: '48px', color: 'pink' }} 
                        className="logo female"
                        onClick={() => setActiveModal(activeModal === "marie" ? null : "marie")}/> 

                    </div>
                    {activeModal && (
                        <div className='info-panel'>
                        {activeModal === "gp" && (
                            <>
                                <h2>About Gian Piero</h2>
                                <p>I am Gian Piero, a passionate developer and creator. I love building innovative solutions and collaborating with others to bring ideas to life.</p>
                            </>
                        )}
                        {activeModal === "marie" && (
                            <>
                                <h2>About Marie</h2>
                                <p>I am Marie, a creative designer. I enjoy crafting beautiful and aesthetic images that blend into the Collabville community.</p>
                            </>
                        )}
                        </div>
                    )}                   
                </div>
                </div>
            </div>
        </motion.div>
    );
    }
