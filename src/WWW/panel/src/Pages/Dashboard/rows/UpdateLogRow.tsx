import { motion} from "framer-motion";

import * as Style from '../style'
import UpdateLogCard from "../../../Components/UpdateLogCard";

// Types
import { CardType } from "../../../Types/UpdateLogTypes";

const UpdateLogRow = (list: Array<CardType>) => {
    <motion.div 
        className={Style.UpdateLogRow}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
    >
        <h1 className={Style.UpdateLogRowTitle}>📜 Update Log</h1>
        { list.map(x => <UpdateLogCard key={`${x.date}/${x.title}`} date={x.date} title={x.title}/>) }
    </motion.div>
}

export default UpdateLogRow;