import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

import * as Style from './style';

import HamburgerButton from "./hamburger-btn";

const MenuFull = ({onClick, show}: {onClick: Dispatch<SetStateAction<Boolean>>, show: Boolean}): JSX.Element => {
    if (!show) {
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden"
        return <></>
    }

    document.body.style.overflow = "hidden"

    return (
        <motion.div 
            layout
            className={Style.Menu} 
            
        >
                <motion.div animate={{opacity: [0, 1]}} className={Style.MenuContent}>
                    {show && <HamburgerButton onClick={() => onClick(true)} show={show}/>}
                    <button>Odjavi se</button>
                </motion.div>
                <motion.ul 
                    transition={{delay: 0.2}}
                    animate={{opacity:[0, 1]}}
                    className="flex gap-10 w-fit p-5 rounded-md bg-white text-black"
                >
                    <MenuItem text="Pocenta"/>
                    <MenuItem text="Prodavnica"/>
                    <MenuItem text="Odjavi se"/>
                </motion.ul>
        </motion.div>
    )
}

const MenuItem = ({text} : {text:string}): JSX.Element => (
    <motion.li
        className="opacity-60 hover:cursor-pointer select-none"
        whileHover={{opacity: 1}}
    >
        {text}
    </motion.li>
)

export default MenuFull;