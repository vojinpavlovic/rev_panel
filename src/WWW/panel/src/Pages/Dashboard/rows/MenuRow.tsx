import * as Style from '../style'
import Logo from '../../../Components/Logo'
import Menu from '../../../Components/Menu'

const MenuRow = (): JSX.Element => (
    <div className={Style.MenuRow}>
        <Menu/>
        <Logo/>
    </div>
)

export default MenuRow;