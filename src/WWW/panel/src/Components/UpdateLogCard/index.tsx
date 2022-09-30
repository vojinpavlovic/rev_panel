import * as Style from './style';
import { CardType } from '../../Types/UpdateLogTypes';
import EyeSVG from '../../Components/SVG/EyeSVG';

import { motion } from "framer-motion";

const UpdateLogCard = ({date, title}: CardType) => (
    <motion.div
        className={Style.Card}
        whileHover={{scale: 1.05}}
    >
        <div>
            <p className={Style.DateText}>{date.toLocaleDateString("en-US")}</p>
            <h1 className={Style.TitleText}>{title}</h1>
        </div>

        <button className={Style.ViewButton}>
            <EyeSVG/>
        </button>
    </motion.div>
)

export default UpdateLogCard;