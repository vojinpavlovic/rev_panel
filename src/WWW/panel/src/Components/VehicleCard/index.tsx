import { motion } from 'framer-motion';

import VehicleFallback from '../../../Static/Images/vehicle-fallback.png'

const Style = {
    VehicleCard : `
        select-none
        hover:cursor-default
        my-5
        bg-gradient-to-t
        xl:bg-gradient-to-r
        from-transparent
        to-dark-transparent
        rounded-md
        py-5
        w-full
        h-auto
        flex
        flex-col
        text-center
        xl:flex-row 
        xl:h-60
        xl:text-left
        items-center
    `
}

const VehicleCard = ({name, img, plate, engineHP}: {name:string, img: string, plate: string, engineHP: number}): JSX.Element => {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            className={Style.VehicleCard}
        >
            <img onError={({currentTarget}) => { currentTarget.onerror = null; currentTarget.src=VehicleFallback }} className="w-96" src={img} alt={`vehicle-car-${plate}`}/>
            <div className="w-full">
                <div className="relative my-2">
                    <h1 className="block w-full z-0 bottom-0 -my-2 right-7 absolute text-7xl font-bold opacity-5">{name}</h1>
                    <h1 className="font-bold text-4xl">{name}</h1>
                </div>
                <p className="my-1 text-xl font-bold"><span className="opacity-60 font-normal">Tablice</span> {plate}</p>
                <p className="my-1 text-xl font-bold"><span className="opacity-60 font-normal">Garaza</span> {plate}</p>
                <p className="my-1 text-xl font-bold">
                    <span className="opacity-60 font-normal">Motor </span> 
                    {engineHP} 
                    <span className="opacity-60 text-md font-normal">/ 1000</span>
                </p>
            </div>
        </motion.div>
    )
}

export default VehicleCard;