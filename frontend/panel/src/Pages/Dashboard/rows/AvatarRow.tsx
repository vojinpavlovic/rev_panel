import { motion } from 'framer-motion';

import Avatar from '../../../Components/Avatar';
import * as Style from '../style'

const AvatarRow = (): JSX.Element => {
    return(
        <motion.div 
            animate={{opacity: [0, 1]}} 
            transition={{delay: 0.3}}
            className={Style.AvatarRow}>
            <Avatar/>    
        </motion.div>
    )
}

export default AvatarRow;