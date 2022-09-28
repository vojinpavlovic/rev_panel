import * as Style from './style';

import PlayIcon from '../../Static/Images/play-icon.png'

const TrailerVideo = () => (
    <div className={Style.TrailerVideo}>
        <button>
            <img src={PlayIcon} alt="Revolucija Roleplay Trailer"/>
        </button>
    </div>
)

export default TrailerVideo;