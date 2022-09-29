/**
 * Mora da se refactoruje sa ovim onClick eventovima u TS 
 */

import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react';

import * as Style from './style';

const Menu = (): JSX.Element => {
    const [ show, setShow ] = useState<Boolean>(false);

    const reveal = () => {
        setShow(!show);
    }

    return (
        <>
            <MenuFull onClick={reveal} show={show}/>
            <HamburgerMenuButton onClick={reveal} show={show}/>
        </>
    )
}

const HamburgerMenuButton = ({onClick, show}: {onClick: MouseEventHandler<HTMLButtonElement>, show: Boolean}): JSX.Element => {
    const rotateX = show ? "rotate-45 absolute" : "rotate-0"
    const rotateY = show ? "-rotate-45" : "rotate-0"

    return (
        <button className={Style.HamburgerButton} onClick={onClick}>
            <span className={`${Style.HamburgerButtonSpan} ${Style.HamburgerButtonSpanWide} ${rotateX}`}></span>
            {!show && <span className={`${Style.HamburgerButtonSpan} ${Style.HamburgerButtonSpanNormal}`}></span>}
            <span className={`${Style.HamburgerButtonSpan} ${Style.HamburgerButtonSpanWide} ${rotateY}`}></span>
        </button>
    );
}

const MenuFull = ({onClick, show}: {onClick: Dispatch<SetStateAction<Boolean>>, show: Boolean}): JSX.Element => {
    const height = show ? "100vh" : "0vh";
    const top = show ? "0" : "-10%";

    return (
        <div className={Style.Menu} style={{height: height, top: top}}>
            <div className={Style.MenuContent}>
                <HamburgerMenuButton onClick={() => onClick(true)} show={show}/>
            </div>
        </div>
    )
}


export default Menu;