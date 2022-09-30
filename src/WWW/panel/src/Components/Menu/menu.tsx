import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

import * as Style from './style';

import HamburgerButton from "./hamburger-btn";

const MenuFull = ({onClick, show}: {onClick: Dispatch<SetStateAction<Boolean>>, show: Boolean}): JSX.Element => {
    return (
        <motion.div 
            layout
            className={Style.Menu} 
            style={{ height: show ? "100vh" : "0" }}
        >
                <div className={Style.MenuContent}>
                    {show && <HamburgerButton onClick={() => onClick(true)} show={show}/>}
                </div>
        </motion.div>
    )
}

export default MenuFull;