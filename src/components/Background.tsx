import { motion } from "framer-motion";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0f0f11]">

            <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />


            <motion.div
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 30, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-accent-purple/20 blur-[120px]"
            />


            <motion.div
                animate={{
                    x: [0, -40, 40, 0],
                    y: [0, 50, -30, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-accent-orange/15 blur-[120px]"
            />
        </div>
    );
}