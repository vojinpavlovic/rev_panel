import * as Style from './style'

import GunIcon from '../../Static/Images/gun-icon.png';
import { useState } from 'react';

const PlayerLevel = (): JSX.Element => {
    const [ fill, setFill ] = useState<Number>(0)
    
    setTimeout(() => {
        setFill(60)
    }, 1500) // Test

    return (
        <div className={Style.Wrapper}>
            <h1 className={Style.XPText}>
                <XP current={1300} needed={3200}/>
            </h1>
            <h1 className={Style.LevelText}>
                <Level current={7}/>
            </h1>
            <div className={Style.Line}></div>
            <div className={Style.FillLine} style={{width: `${fill}%`}}></div>
            {fill > 0 && <img className={Style.Icon} style={{left: `${fill}%`}} src={GunIcon} alt="level-gun-icon"/>}
        </div>
    )
}

const XP = ({current, needed}: {current: number, needed:number}): JSX.Element => <>
    XP {current} / <span className={Style.XPTextSpan}>{needed}</span>
</>

const Level = ({current}: {current: number}): JSX.Element => <>
    Level {current} <span className={Style.LevelTextSeperator}>{">>"}</span> <span className={Style.LevelTextNext}>{current + 1}</span>
</>

export default PlayerLevel;