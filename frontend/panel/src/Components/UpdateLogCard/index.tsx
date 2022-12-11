import { useState } from 'react';

import * as Style from './style';
import { CardType } from '../../Types/UpdateLogTypes';
import EyeSVG from '../../Components/SVG/EyeSVG';

import { motion } from "framer-motion";
import UpdateLogContainer from '../UpdateLogContainer';

const UpdateLogCard = ({date, title}: CardType) => {
    const [ showContainer, setShowContainer] = useState<Boolean>(false)
 
    

    return (
        <>
        {showContainer && <UpdateLogContainer onClick={setShowContainer}/>}
        <motion.div className={Style.Card} whileHover={{scale: 1.05}}>
            <div className='h-full w-full'>
                <p className={Style.DateText}>{date.toLocaleDateString("en-US")}</p>
                <h1 className={Style.TitleText}>{title}</h1>
            </div>

            <button className={Style.ViewButton} onClick={() => setShowContainer(true)}>
                <EyeSVG/>
            </button>
        </motion.div>
        </>
    )
}  

export default UpdateLogCard;