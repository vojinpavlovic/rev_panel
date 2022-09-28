import * as Style from './style'

import Logo from '../../Components/Logo'
import TrailerVideo from '../../Components/TrailerVideo'

const dashboard = () => {
    return (
        <div className={Style.Wrapper}>
            <div className={Style.ContentBody}>
                <div className={Style.LeftContentBody}>
                    <div className={Style.MenuRow}>
                        <Logo/>
                    </div>
                    <div className={Style.TrailerRow}>
                        <p>Revolucija Roleplay Sezona 3 Trailer</p>
                        <TrailerVideo/>
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