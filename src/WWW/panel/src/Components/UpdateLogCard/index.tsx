import * as Style from './style';
import { CardType } from '../../Types/UpdateLogTypes';
import EyeIcon from '../../Static/Images/eye-icon.png'

const UpdateLogCard = ({date, title}: CardType) => (
    <div className={Style.Card}>
        <div>
            <p className={Style.DateText}>{date.toLocaleDateString("en-US")}</p>
            <h1 className={Style.TitleText}>{title}</h1>
        </div>
        
        <button className={Style.ViewButton}>
            <img  src={EyeIcon} alt="view update log"/>
        </button>
    </div>
)

export default UpdateLogCard;