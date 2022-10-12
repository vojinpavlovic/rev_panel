import { motion } from 'framer-motion';

import VehicleFallback from '../../Static/Images/vehicle-fallback.png'

const Style = {
    VehicleCard : `
        select-none
        hover:cursor-default
        my-5
        bg-gradient-to-t
        xl:bg-gradient-to-r
        from-transparent
        to-dark-transparent
        hover:to-dark
        hover:duration-5000
        rounded-xl
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
        group
    `
}

const VehicleCard = ({name, img, plate, engineHP}: {name:string, img: string, plate: string, engineHP: number}): JSX.Element => {
    return (
        <motion.div
            whileHover={{rotateY: 0}}
            className={Style.VehicleCard}
        >
            <img onError={({currentTarget}) => { currentTarget.onerror = null; currentTarget.src=VehicleFallback }} className="w-80 mx-10" src={img} alt={`vehicle-car-${plate}`}/>
            <div className="w-full">
                <div className="relative my-2">
                    <h1 className="group-hover:text-7xl duration-300 block w-full z-0 bottom-0 -top-8 right-3 absolute text-6xl font-bold opacity-5">{name}</h1>
                    <h1 className="group-hover:text-5xl duration-1000 font-bold text-4xl">{name}</h1>
                </div>
                <p className="my-1 text-md font-bold"><span className="opacity-60 font-normal">Tablice</span> {plate}</p>
                <p className="my-1 text-md font-bold"><span className="opacity-60 font-normal">Garaza</span> {plate}</p>
                <p className="my-1 text-md font-bold">
                    <span className="opacity-60 font-normal">Motor </span> 
                    {engineHP} 
                    <span className="opacity-60 text-md font-normal"> / 1000</span>
                </p>
            </div>
        </motion.div>
    )
}

export default VehicleCard;