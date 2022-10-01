import * as Style from './style'

import CharacterImage from '../../Static/Images/character.png'

import UpdateLogCard from '../../Components/UpdateLogCard'
import Avatar from '../../Components/Avatar'
import SmokeMotion from '../../Components/SmokeMotion'

import { CardType } from '../../Types/UpdateLogTypes'

import { motion} from "framer-motion";

import MenuRow from './rows/MenuRow'
import TrailerRow from './rows/TrailerRow'
import PlayerRow from './rows/PlayerRow'
import PlayerAccounts from '../../Components/PlayerStats'

const Dashboard = () => {
    document.title = `${document.title} - Dashboard`

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
                    <MenuRow/>
                    <TrailerRow/>
                    <PlayerRow/> 
                    <motion.div className={Style.UpdateLogRow}animate={{ opacity: [0, 1] }}  transition={{delay: 1}}>
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
                className={`${Style.CharacterImage} z-[-2]`}
                src={CharacterImage}
                />
            <div className={Style.AvatarRow}>
                <Avatar/>    
            </div>
            <div>
                <PlayerAccounts/>    
            </div>    
        </div>
    )
}

export default Dashboard;