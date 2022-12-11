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
            <p className=' bg-dark-brown p-2 z-50 rounded-md shadow-xl'>Statistika ce se azurirati prvi put 15.12.2022</p>
            <StatCard val={0} desc="Ubistva" delay={0.4}/> 
            <StatCard val={0} desc="Smrti" delay={1}/> 
            <StatCard val={""} desc="Potroseno" delay={1}/> 
            <StatCard val={""} desc="Pljackao" delay={1.4}/> 
            <StatCard val={""} desc="Zatvoren" delay={1.4}/> 
        </motion.div>
    )
}

export default StatCardsRow;