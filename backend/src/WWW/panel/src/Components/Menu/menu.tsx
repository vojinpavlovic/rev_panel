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
            style={{ height: show ? "100vh" : "0" }}
        >
                <motion.div animate={{opacity: [0, 1]}} className={Style.MenuContent}>
                    {show && <HamburgerButton onClick={() => onClick(true)} show={show}/>}
                    <button className="absolute right-5 top-5 opacity-100 text-red-300 hover:opacity-100 hover:text-white duration-300 rounded-md text-2xl py-3 px-5">
                        Odjavi se
                    </button>
                </motion.div>
                <motion.ul 
                    transition={{delay: 0.2}}
                    animate={{opacity:[0, 1]}}
                    className="flex flex-col justify-center items-center h-screen mx-10 gap-10 text-7xl font-bold -translate-y-10"
                >
                    <MenuItem text="Pocenta"/>
                    <MenuItem text="Dashboard"/>
                    <MenuItem text="Prodavnica"/>
                    <MenuItem text="FAQ"/>
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