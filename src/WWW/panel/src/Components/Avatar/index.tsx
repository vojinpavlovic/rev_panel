import { useSelector } from 'react-redux';
import { RootState } from '../../App/Store';
import * as Style from './style';

const url = "http://mcf.rs/upload/Movie/Galleries/2022-05/s2267_0270_marketingSelect_comp2k_v01.1145_R.jpeg"
const Avatar = () => {
    const { firstname, lastname } = useSelector((state: RootState) => state.user.user)

    return (
        <div className={Style.Wrapper}>
            <img className={Style.Image} src={url} alt="steam-icon"/>
            <div className={Style.UserInfoWrapper}>
                <p className={Style.Name}>{firstname} {lastname}</p>
                <p className={Style.Job}>Djido mova, Lesinar</p>
            </div>
        </div>    
    )
}

export default Avatar;