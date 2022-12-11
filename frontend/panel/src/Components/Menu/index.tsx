/**
 * Mora da se refactoruje sa ovim onClick eventovima u TS 
 */

import { useState } from 'react';
import Navbar from '../Nav';

import HamburgerButton from './hamburger-btn';
import MenuFull from './menu';

const Menu = (): JSX.Element => {
    const [ show, setShow ] = useState<Boolean>(false);

    const reveal = () => {
        setShow(!show);
    }

    return (
        <>
            <HamburgerButton onClick={reveal} show={show}/>
            <Navbar show={show}/>
        </>
    )
}


export default Menu;