import * as Style from './style'

import UpdateLogCard from '../../Components/UpdateLogCard'
import SmokeMotion from '../../Components/SmokeMotion'

import { CardType } from '../../Types/UpdateLogTypes'

import { motion} from "framer-motion";

import MenuRow from './rows/MenuRow'
import TrailerRow from './rows/TrailerRow'
import PlayerRow from './rows/PlayerRow'
import AvatarRow from './rows/AvatarRow'
import CharacterRow from './rows/CharacterRow'
import PlayerAccountsRow from './rows/PlayerAccountsRow';
import UpdateLogRow from './rows/UpdateLogRow';

const Dashboard = () => {
    document.title = `${document.title} - Dashboard`

    return (
        <motion.div animate={{opacity: [0, 1]}} className={Style.Wrapper}>
            <div className={Style.ContentBody}>
                <LeftContentBody/>
                <RightContentBody/>
            </div>
        </motion.div>
    )
}

const LeftContentBody = () => {
    return (
        <>
            <SmokeMotion/>
            <div className={Style.LeftContentBody}>
                <MenuRow/>
                <TrailerRow/>
                <PlayerRow/> 
                <UpdateLogRow/>             
            </div>
        </>
        
    )
}

const RightContentBody = () => {
    return (
        <motion.div className={Style.RightContentBody}>
            <CharacterRow/>
            <AvatarRow/>
            <PlayerAccountsRow/>
        </motion.div>
    )
}

export default Dashboard;