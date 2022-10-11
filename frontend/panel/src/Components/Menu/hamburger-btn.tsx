import { MouseEventHandler } from "react";
import { motion } from "framer-motion";

import * as Style from "./style";

const HamburgerButton = ({onClick, show}: {onClick: MouseEventHandler<HTMLButtonElement>, show: Boolean}): JSX.Element => {
    const rotateX = show ? "rotate-45 absolute" : "rotate-0"
    const rotateY = show ? "-rotate-45" : "rotate-0"

    return (
        <motion.button animate={{opacity: [0, 1]}} className={Style.HamburgerButton} onClick={onClick}>
            <span className={`${Style.HamburgerButtonSpan} ${Style.HamburgerButtonSpanWide} ${rotateX}`}></span>
            {!show && <span className={`${Style.HamburgerButtonSpan} ${Style.HamburgerButtonSpanNormal}`}></span>}
            <span className={`${Style.HamburgerButtonSpan} ${Style.HamburgerButtonSpanWide} ${rotateY}`}></span>
        </motion.button>
    );
}

export default HamburgerButton;