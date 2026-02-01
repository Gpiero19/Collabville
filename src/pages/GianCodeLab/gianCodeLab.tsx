import "./gianCodeLab.css";
import samuraigif from '/assets/samurai.gif';
import { motion } from "framer-motion";

export default function GianCodeLab() {
    return (
        <motion.div className="giancodelab-motion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ rotate: 720, scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            >
            <div className="codelab-container">
                <h1 className="codelab-title">Gian's Code Lab</h1>
                <div className="container">
                    {/* <div className="tenor-gif-embed" data-postid="2461104302247665708" data-share-method="host" data-aspect-ratio="1.33155" data-width="100%"><a href="https://tenor.com/view/developer-gif-2461104302247665708"></a>Coding GIF <a href="https://tenor.com/search/developer-gifs"></a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
                    <div className="description-text text-content">
                        <p>Welcome to Gian's Code Lab! Here, I share my coding projects, experiments, and tutorials.</p>
                        <p>Explore my latest work in web development, software engineering, and more.</p>
                        <p>Feel free to reach out if you have any questions or collaboration ideas!</p>
                    </div>
                    <div className="gif-container">
                        <img className="gian-gif" src={samuraigif} alt="Gian's Samurai GIF" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
    }