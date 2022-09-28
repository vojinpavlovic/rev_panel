import * as Style from './style'

import Logo from '../../Components/Logo'

const dashboard = () => {
    return (
        <div className={Style.Wrapper}>
            <div className={Style.ContentBody}>
                <div className={Style.LeftContentBody}>
                    <div className={Style.MenuRow}>
                        <Logo/>
                    </div>
                </div>
                {/*
                <div className={Style.RightContentBody}>
                    <p>No content yet</p>
                </div>
                */}
            </div>
        </div>
    )
}


    

export default dashboard;