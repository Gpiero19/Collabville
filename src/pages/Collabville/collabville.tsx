import { motion } from "framer-motion";

export default function Collabville() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            >
            <h1>Collabville</h1>
            <p>Welcome to Collabville! This is a shared space where Gian and Marie collaborate on projects, share ideas, and create something amazing together.</p>
            <p>Explore our joint projects, experiments, and tutorials.</p>
            <p>Feel free to reach out if you have any questions or collaboration ideas!</p>
        </motion.div>
    );
    }