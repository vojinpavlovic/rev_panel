import { motion } from 'framer-motion';

import PlayerAccounts from '../../../Components/PlayerStats'

const PlayerAccountsRow = (): JSX.Element => {
    return(
        <motion.div
            animate={{opacity: [0, 1]}} 
            transition={{delay: 1.2}}
        >
            <PlayerAccounts/>    
        </motion.div>    
    )
}

export default PlayerAccountsRow;