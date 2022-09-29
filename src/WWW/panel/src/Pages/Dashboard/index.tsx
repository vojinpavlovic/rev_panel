import * as Style from './style'

import Logo from '../../Components/Logo'
import TrailerVideo from '../../Components/TrailerVideo'
import UpdateLogCard from '../../Components/UpdateLogCard'
import Menu from '../../Components/Menu'
import PlayerLevel from '../../Components/PlayerLevel'

import { CardType } from '../../Types/UpdateLogTypes'

import { motion } from "framer-motion";

const dashboard = () => {
    const updateLogData: Array<CardType> = [
        {date: new Date(), title: "Dodani novi automobili u auto salonu..."},
        {date: new Date(), title: "Popravljen Carry sistem i ispadanje iz automobila..."},
        {date: new Date(), title: "Popravljeni sitni bugovi i optimizacija..."}
    ]

    return (
        <div className={Style.Wrapper}>
            <div className={Style.ContentBody}>
                <div className={Style.LeftContentBody}>
                    <div className={Style.MenuRow}>
                        <Menu/>
                        <Logo/>
                    </div>
                    <div className={Style.TrailerRow}>
                        <p>Revolucija Roleplay Sezona 3 Trailer</p>
                        <TrailerVideo/>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={Style.PlayerLevelRow}
                    >
                        <PlayerLevel/>
                    </motion.div>
                    
                    <motion.div 
                        className={Style.UpdateLogRow}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h1 className={Style.UpdateLogRowTitle}>📜 Update Log</h1>
                        { updateLogData.map(x => <UpdateLogCard key={`${x.date}/${x.title}`} date={x.date} title={x.title}/>) }
                    </motion.div>
                </div>
                
                <div className={Style.RightContentBody}>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                    <p>No content yet</p>
                </div>
            </div>
        </div>
    )
}


export default dashboard;