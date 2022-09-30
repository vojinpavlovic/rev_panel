import * as Style from './style';

const url = "http://mcf.rs/upload/Movie/Galleries/2022-05/s2267_0270_marketingSelect_comp2k_v01.1145_R.jpeg"
const user: {firstname: string, lastname: string, job: string, job_grade: string} = {firstname: "Sogo", lastname: "Lisica", job: "Djido Mova", job_grade: "Lesinar"}
const Avatar = () => (
    <div className={Style.Wrapper}>
        <img className={Style.Image} src={url} alt="steam-icon"/>
        <div className={Style.UserInfoWrapper}>
            <p className={Style.Name}>{user.firstname} {user.lastname}</p>
            <p className={Style.Job}>{user.job}, {user.job_grade}</p>
        </div>
    </div>
)

export default Avatar;