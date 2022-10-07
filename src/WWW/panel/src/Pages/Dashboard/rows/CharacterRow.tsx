import { motion } from 'framer-motion';

import * as Style from '../style'
import CharacterImage from '../../../Static/Images/character.png'

const CharacterRow = (): JSX.Element => {
    return(
        <motion.img
            animate={{opacity: [0, 1]}} 
            transition={{delay: 1}}
            className={`${Style.CharacterImage} z-[-2]`}
            src={CharacterImage}
        />
    )
}

export default CharacterRow;