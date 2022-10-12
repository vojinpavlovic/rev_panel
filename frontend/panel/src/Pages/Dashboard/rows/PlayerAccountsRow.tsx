import { motion } from 'framer-motion';

import PlayerAccounts from '../../../Components/PlayerStats'

const PlayerAccountsRow = (): JSX.Element => {
    return(
        <motion.div
            animate={{opacity: [0, 1]}} 
            transition={{delay: 0.4}}
        >
            <PlayerAccounts/>    
        </motion.div>    
    )
}

export default PlayerAccountsRow;