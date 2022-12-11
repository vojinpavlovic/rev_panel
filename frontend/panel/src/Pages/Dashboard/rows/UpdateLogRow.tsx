import { motion} from "framer-motion";

import * as Style from '../style'
import UpdateLogCard from "../../../Components/UpdateLogCard";

// Types
import { CardType } from "../../../Types/UpdateLogTypes";

const updateLogData: Array<CardType> = [
    {date: new Date(), title: "Sezona 3 Beta Remastered"},
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
        {
            updateLogData.length <= 3 && <p className="text-xs opacity-60 text-center">Nema vise logova</p>
        }
    </motion.div>   
)

export default UpdateLogRow;