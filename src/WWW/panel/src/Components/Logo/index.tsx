import logoImg from '../../Static/Images/logo-horizontal.png';

import { motion } from 'framer-motion';

const logo = () => <motion.img 
    animate={{y: [-200, 10, 0]}}
    transition={{delay: 0.55}}
    src={logoImg} 
    alt="logo"
/>

export default logo;