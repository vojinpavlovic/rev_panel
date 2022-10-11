import { useSelector } from 'react-redux';
import { RootState } from '../../App/Store';
import * as Style from './style';

const Avatar = () => {
    const { job, firstname, lastname } = useSelector((state: RootState) => state.user.user)
    const { name, avatar } = useSelector((state: RootState) => state.user.steam)

    return (
        <div className={Style.Wrapper}>
            <img className={Style.Image} src={avatar} alt="steam-icon"/>
            <div className={Style.UserInfoWrapper}>
                <p className={Style.Name}>{firstname} {lastname} <span className='text-sm text-gray font-regular'>({name})</span></p>
                <p className={Style.Job}>{job.name ? job.name : ""}{job.position && job.position  !== "Unemployed" ? ", " + job.position : ""}</p>
            </div>
        </div>    
    )
}

export default Avatar;