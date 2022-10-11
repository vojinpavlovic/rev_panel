import { motion} from "framer-motion";

import * as Style from '../style'
import PlayerLevel from "../../../Components/PlayerLevel";

const PlayerRow = (): JSX.Element => (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={Style.PlayerLevelRow}
    >   
        <PlayerLevel/>
    </motion.div>
)

export default PlayerRow;