import { Dispatch, SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';

import * as Style from './style';
import PlaySVG from '../SVG/PlaySVG';

const TrailerVideo = (): JSX.Element => {
    const [ showTrailer, setShowTrailer ] = useState<Boolean>(false)

    return (
        <motion.div 
            animate={{opacity: [0, 1]}} 
            transition={{delay: 0.2}} 
            className={Style.TrailerVideo}
        >
            {showTrailer && <ShowTrailer onClick={setShowTrailer}/>} 
            <button onClick={() => setShowTrailer(true)}>
                <PlaySVG/>
            </button>
        </motion.div>
    )
}

const ShowTrailer = ({onClick}: {onClick: Dispatch<SetStateAction<Boolean>>}): JSX.Element => {
    const destroy = () => {
        onClick(false)
    }

    return (
        <div className={Style.VideoShow} onClick={destroy}>
                <iframe
                    className='rounded-md'
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${"iCpta-l8fCA"}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
        </div>
    )
}

export default TrailerVideo;