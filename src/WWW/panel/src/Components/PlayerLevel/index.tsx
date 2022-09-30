import * as Style from './style'
import * as Motion from './motion'

import { useEffect, useState } from 'react';

const PlayerLevel = (): JSX.Element => {
    const [ fill, setFill ] = useState<number>(0)
    
    useEffect(() => setFill(60), [])

    return (
        <Motion.Wrapper>
            <>
            {fill > 0 && <Motion.XP><XP current={1300} needed={3200}/></Motion.XP>}
            {fill > 0 && <Motion.Level><Level current={7}/></Motion.Level>}
            <div className={Style.Line}></div>
            <Motion.FillLine fill={fill}/>
            {fill > 0 && <Motion.Icon fill={fill - 1}/>}
            </>
        </Motion.Wrapper>
    )
}

const XP = ({current, needed}: {current: number, needed:number}): JSX.Element => <>
    XP {current} / <span className={Style.XPTextSpan}>{needed}</span>
</>

const Level = ({current}: {current: number}): JSX.Element => <>
    Level {current} <span className={Style.LevelTextSeperator}>{">>"}</span> <span className={Style.LevelTextNext}>{current + 1}</span>
</>

export default PlayerLevel;