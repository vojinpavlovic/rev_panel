import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/Store';
import KFormatter from '../../Utils/KFormatter';
import BankMoneyIcon from '../SVG/BankMoneyIcon';
import BlackMoneyIcon from '../SVG/BlackMoneyIcon';
import ControllerIcon from '../SVG/ControllerIcon';
import MoneyIcon from '../SVG/MoneyIcon';
import * as Style from './style';

const PlayerStats = () => {
    const { totalTime, accounts } = useSelector((state: RootState) => state.user.user)

    return (
        <div className={Style.Wrapper}>
            <motion.div whileHover={{scale: 1.15}} className={Style.HourContainer}>
                <div className="flex justify-center items-center gap-2 text-xl font-bold">
                    <ControllerIcon/>
                    <p>{totalTime}<span className="text-gray text-sm"> sati na server</span></p>
                </div>
            </motion.div>
            <motion.div whileHover={{scale: 1.15}} className={Style.AccountContainer}>
                <div className="flex gap-2 text-xl font-bold">
                    <MoneyIcon/>
                    ${KFormatter(accounts.money)}
                </div>
                <div className="flex gap-2 text-xl font-bold">
                    <BlackMoneyIcon/>
                    ${KFormatter(accounts.blackMoney)}
                </div>
                <div className="flex gap-2 text-xl font-bold">
                    <BankMoneyIcon/>
                    ${KFormatter(accounts.bank)}
                </div>
            </motion.div>
        </div>
    );
}

export default PlayerStats;