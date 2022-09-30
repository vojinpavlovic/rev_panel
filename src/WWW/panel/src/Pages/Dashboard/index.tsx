import * as Style from './style'

import CharacterImage from '../../Static/Images/character.png'

import Logo from '../../Components/Logo'
import TrailerVideo from '../../Components/TrailerVideo'
import UpdateLogCard from '../../Components/UpdateLogCard'
import Menu from '../../Components/Menu'
import PlayerLevel from '../../Components/PlayerLevel'
import Avatar from '../../Components/Avatar'
import SmokeMotion from '../../Components/SmokeMotion'

import { CardType } from '../../Types/UpdateLogTypes'

import { motion} from "framer-motion";


const Dashboard = () => {
    const updateLogData: Array<CardType> = [
        {date: new Date(), title: "Dodani novi automobili u auto salonu..."},
        {date: new Date(), title: "Popravljen Carry sistem i ispadanje iz automobila..."},
        {date: new Date(), title: "Popravljeni sitni bugovi i optimizacija..."}
    ]

    
    return (
        <div className={Style.Wrapper}>
            <div className={Style.ContentBody}>
                <SmokeMotion/>
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
                <RightContentBody/>
            </div>
        </div>
    )
}

const RightContentBody = () => {
    return (
        <div className={Style.RightContentBody}>
            <motion.img
                className={`${Style.CharacterImage}`}
                src={CharacterImage}
                />
            <div className={Style.AvatarRow}>
                <Avatar/>    
            </div>    
        </div>
    )
}

export default Dashboard;