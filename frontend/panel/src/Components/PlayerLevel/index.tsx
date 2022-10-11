import * as Style from './style'
import * as Motion from './motion'

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/Store';

const PlayerLevel = (): JSX.Element => {
    const { level } = useSelector((state: RootState) => state.user.user)

    const [ fill, setFill ] = useState<number>(0)
    
    useEffect(() => setFill(getPercentage(level.xp, level.needXP)), [level.xp, level.needXP])

    return (
        <Motion.Wrapper>
            <>
            {fill > 0 && <Motion.XP><XP current={level.xp} needed={level.needXP}/></Motion.XP>}
            {fill > 0 && <Motion.Level><Level current={level.level}/></Motion.Level>}
            <div className={Style.Line}></div>
            <Motion.FillLine fill={fill}/>
            {fill > 0 && <Motion.Icon fill={fill - 1}/>}
            </>
        </Motion.Wrapper>
    )
}

const getPercentage = (got: number, want: number): number => (got * 100) / want;

const XP = ({current, needed}: {current: number, needed:number}): JSX.Element => <>
    XP {current} / <span className={Style.XPTextSpan}>{needed}</span>
</>

const Level = ({current}: {current: number}): JSX.Element => <>
    Level {current} <span className={Style.LevelTextSeperator}>{">>"}</span> <span className={Style.LevelTextNext}>{current + 1}</span>
</>

export default PlayerLevel;