import * as Style from './style';

const Menu = (): JSX.Element => {
    return <HamburgerMenuButton/>
}

const HamburgerMenuButton = (): JSX.Element => (
    <button className={Style.HamburgerButton}>
        <span className={`${Style.HamburgerButtonSpan} ${Style.HamburgerButtonSpanWide}`}></span>
        <span className={`${Style.HamburgerButtonSpan} ${Style.HamburgerButtonSpanNormal}`}></span>
        <span className={`${Style.HamburgerButtonSpan} ${Style.HamburgerButtonSpanWide}`}></span>
    </button>
)

export default Menu;