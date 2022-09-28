import * as Style from './style';
import { CardType } from '../../Types/UpdateLogTypes';
import EyeSVG from '../../Components/SVG/EyeSVG';

const UpdateLogCard = ({date, title}: CardType) => (
    <div className={Style.Card}>
        <div>
            <p className={Style.DateText}>{date.toLocaleDateString("en-US")}</p>
            <h1 className={Style.TitleText}>{title}</h1>
        </div>

        <button className={Style.ViewButton}>
            <EyeSVG/>
        </button>
    </div>
)

export default UpdateLogCard;