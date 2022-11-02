import { motion} from "framer-motion";

import * as Style from '../style'
import UpdateLogCard from "../../../Components/UpdateLogCard";

// Types
import { CardType } from "../../../Types/UpdateLogTypes";

const updateLogData: Array<CardType> = [
    {date: new Date(), title: "Dodani novi automobili u auto salonu..."},
    {date: new Date(), title: "Popravljen Carry sistem i ispadanje iz automobila..."},
    {date: new Date(), title: "Popravljeni sitni bugovi i optimizacija..."}
]

const UpdateLogRow = () => (
    <motion.div 
        className={Style.UpdateLogRow}
        animate={{ opacity: [0, 1] }}  
        transition={{delay: 0.2}}>
        <h1 className={Style.UpdateLogRowTitle}>📜 Update Log</h1>
        { 
            updateLogData.map(x => <UpdateLogCard key={`${x.date}/${x.title}`} date={x.date} title={x.title}/>) 
        }
    </motion.div>   
)

export default UpdateLogRow;