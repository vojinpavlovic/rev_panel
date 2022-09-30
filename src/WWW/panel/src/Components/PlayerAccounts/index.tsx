import BankMoneyIcon from '../SVG/BankMoneyIcon';
import BlackMoneyIcon from '../SVG/BlackMoneyIcon';
import ControllerIcon from '../SVG/ControllerIcon';
import MoneyIcon from '../SVG/MoneyIcon';
import * as Style from './style';

const PlayerAccounts = () => {
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
                    $450k
                </div>
                <div className="flex gap-2 text-xl font-bold">
                    <BlackMoneyIcon/>
                    $738
                </div>
                <div className="flex gap-2 text-xl font-bold">
                    <BankMoneyIcon/>
                    $1.485k
                </div>
            </div>
        </div>
    );
}

export default PlayerAccounts;