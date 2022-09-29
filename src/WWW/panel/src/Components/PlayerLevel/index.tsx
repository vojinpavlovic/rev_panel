import * as Style from './style'

import GunIcon from '../../Static/Images/gun-icon.png';
import { useState } from 'react';

import { motion } from 'framer-motion';

const PlayerLevel = (): JSX.Element => {
    const [ fill, setFill ] = useState<Number>(0)
    
    setTimeout(() => {
        setFill(60)
    }, 1500) // Test

    return (
        <motion.div
            className={Style.Wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {fill > 0 && 
                <motion.h1 
                    className={Style.XPText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                        <XP current={1300} needed={3200}/>
                </motion.h1>
            }


            {fill > 0 && 
                <motion.h1 
                    className={Style.LevelText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Level current={7}/>
                </motion.h1> 
            }

            <div className={Style.Line}></div>

            <motion.div
                className={Style.FillLine} 
                animate={{width: `${fill}%`}}
                transition={{ ease: "easeOut", duration: 0.2 }}
            /> 

            {fill > 0 && 
                <motion.img 
                    className={Style.Icon} 
                    initial={{ opacity: 0 }}
                    animate={{left: `${fill}%`, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    //style={{left: `${fill}%`}} 
                    src={GunIcon} 
                    alt="level-gun-icon"
                />
            }
        </motion.div>
    )
}

const XP = ({current, needed}: {current: number, needed:number}): JSX.Element => <>
    XP {current} / <span className={Style.XPTextSpan}>{needed}</span>
</>

const Level = ({current}: {current: number}): JSX.Element => <>
    Level {current} <span className={Style.LevelTextSeperator}>{">>"}</span> <span className={Style.LevelTextNext}>{current + 1}</span>
</>

export default PlayerLevel;