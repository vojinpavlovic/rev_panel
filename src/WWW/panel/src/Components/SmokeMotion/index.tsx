import { motion, useTransform, useMotionValue } from "framer-motion";

const SmokeMotion = () => (
    <div className="fixed w-screen h-screen z-[-1]">
        <motion.img  
            className="absolute right-0 right-0 top-0"               
            animate={{y: [null, -30, -10, 0], x: [null, 100, 300, 0],scale: [null, 0.95, 1.05, 1.0]}}
            transition={{ duration: 15, repeat: Infinity }}
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-img/images/smoke-2.png"
        />

        <motion.img  
            className="absolute right-0 top-0 blur-md"               
            animate={{y: [null, 10, -10, 0], x: [0, -100, 0], scale: [null, 10, 1, 10]}}
            transition={{ duration: 30, repeat: Infinity }}
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-img/images/smoke-3.png"
        />    
        <motion.img  
            className="absolute right-0 top-0"               
            animate={{y: [null, 10, -30, 0], x: [null, 100, -100, 0], scale: [1.5, 2.05, 1.5]}}
            transition={{ duration: 15, repeat: Infinity }}
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-img/images/smoke-4.png"
        />    
    </div>
)

export default SmokeMotion