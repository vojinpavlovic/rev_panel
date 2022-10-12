import { motion } from 'framer-motion';
import * as Style from '../style';
import StatCard from "../../../Components/StatCard";

const StatCardsRow = (): JSX.Element => {

    return (
        <motion.div
            animate={{opacity: [0, 0.7]}}
            transition={{delay: 0.2}} 
            className={Style.StatCardsRow}
        >
            <StatCard val={23} desc="Ubistva" delay={0.4}/> 
            <StatCard val={10} desc="Smrti" delay={1}/> 
            <StatCard val={"600M"} desc="Potroseno" delay={1}/> 
            <StatCard val={"20X"} desc="Pljackao" delay={1.4}/> 
            <StatCard val={"40X"} desc="Zatvoren" delay={1.4}/> 
        </motion.div>
    )
}

export default StatCardsRow;