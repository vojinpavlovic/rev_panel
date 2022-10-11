import * as Style from './style';
import { motion } from 'framer-motion';

import ChildrenProp from "../../Types/ChildrenProp";

export const Card = ({children}: ChildrenProp) => (
    <motion.div className={Style.Card} whileHover={{scale: 1.05}}>
        {children}
    </motion.div>
)