import * as Style from './style'

import SmokeMotion from '../../Components/SmokeMotion'

import { motion} from "framer-motion";

import MenuRow from './rows/MenuRow'
import TrailerRow from './rows/TrailerRow'
import PlayerRow from './rows/PlayerRow'
import AvatarRow from './rows/AvatarRow'
import CharacterRow from './rows/CharacterRow'
import PlayerAccountsRow from './rows/PlayerAccountsRow';
import UpdateLogRow from './rows/UpdateLogRow';
import StatCardsRow from './rows/StatCardsRow';
import InventoryRow from './rows/InventoryRow';
import VehiclesRow from './rows/VehiclesRow';

const Dashboard = () => {
    document.title = `${document.title} - Dashboard`

    return (
        <motion.div className={Style.Wrapper}>
            <motion.div className='w-screen h-24 z-50 bg-gradient-to-t from-black fixed bottom-0'></motion.div>
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
            <StatCardsRow/>
            <InventoryRow/>
            <VehiclesRow/>
        </motion.div>
    )
}

export default Dashboard;