import { motion} from "framer-motion";

export default function MarieArtStudio() {
    return (
        <motion.div className="giancodelab-motion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            >
            <h1>Marie's Art Studio</h1>
            <p>Welcome to Marie's Art Studio! Here, I share my artistic projects, experiments, and tutorials.</p>
            <p>Explore my latest work in digital art, painting, and more.</p>
            <p>Feel free to reach out if you have any questions or collaboration ideas!</p>
        </motion.div>
    );
    }