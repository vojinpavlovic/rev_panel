import * as Style from './style';
import GunIcon from '../../Static/Images/gun-icon.png';
import { motion } from 'framer-motion';
import ChildrenProp from '../../Types/ChildrenProp';

export const Wrapper = ({children}: ChildrenProp): JSX.Element => (
    <motion.div
        className={Style.Wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {children}
    </motion.div>
)

export const XP = ({children}: ChildrenProp): JSX.Element => (
    <motion.h1 
        className={Style.XPText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        exit={{ opacity: 0 }}
    >
        {children}
    </motion.h1>
)


export const Level = ({children}: ChildrenProp): JSX.Element => (
    <motion.h1 
        className={Style.LevelText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        exit={{ opacity: 0 }}
    >
        {children}
    </motion.h1>
)

export const FillLine = ({fill}: {fill: Number}): JSX.Element => (
    <motion.div
        className={Style.FillLine} 
        animate={{width: `${fill}%`}}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.8 }}
    /> 
)

export const Icon = ({fill}: {fill: Number}): JSX.Element => (
    <motion.img 
        className={Style.Icon} 
        initial={{ opacity: 0 }}
        animate={{left: `${fill}%`, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.8 }}
        src={GunIcon} 
        alt="level-gun-icon"
    />
)