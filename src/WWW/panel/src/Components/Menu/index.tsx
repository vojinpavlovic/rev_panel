/**
 * Mora da se refactoruje sa ovim onClick eventovima u TS 
 */

import { useState } from 'react';

import HamburgerButton from './hamburger-btn';
import MenuFull from './menu';

const Menu = (): JSX.Element => {
    const [ show, setShow ] = useState<Boolean>(false);

    const reveal = () => {
        setShow(!show);
    }

    return (
        <>
            {!show && <HamburgerButton onClick={reveal} show={show}/>} 
            <MenuFull onClick={reveal} show={show}/>
        </>
    )
}


export default Menu;