import { useSelector } from 'react-redux';
import { RootState } from '../../App/Store';
import KFormatter from '../../Utils/KFormatter';
import BankMoneyIcon from '../SVG/BankMoneyIcon';
import BlackMoneyIcon from '../SVG/BlackMoneyIcon';
import ControllerIcon from '../SVG/ControllerIcon';
import MoneyIcon from '../SVG/MoneyIcon';
import * as Style from './style';


const PlayerStats = () => {
    const { accounts } = useSelector((state: RootState) => state.user.user)

    return (
        <div className={Style.Wrapper}>
            <div className={Style.HourContainer}>
                <div className="flex justify-center items-center gap-2 text-xl font-bold">
                    <ControllerIcon/>
                    <p>450<span className="text-gray text-sm"> sati na server</span></p>
                </div>
            </div>
            <div className={Style.AccountContainer}>
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
            </div>
        </div>
    );
}

export default PlayerStats;