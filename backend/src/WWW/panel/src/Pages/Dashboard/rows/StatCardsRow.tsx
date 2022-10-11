import { motion } from 'framer-motion';
import * as Style from '../style';
import StatCard from "../../../Components/StatCard";

const StatCardsRow = (): JSX.Element => {

    return (
        <motion.div
            animate={{opacity: [0, 1]}}
            transition={{delay: 1.5}} 
            className={Style.StatCardsRow}
        >
            <StatCard val={23} desc="Ubistva"/> 
            <StatCard val={10} desc="Smrti"/> 
            <StatCard val={"600M"} desc="Potroseno"/> 
            <StatCard val={"20X"} desc="Pljackao"/> 
            <StatCard val={"40X"} desc="Zatvoren"/> 
        </motion.div>
    )
}

export default StatCardsRow;