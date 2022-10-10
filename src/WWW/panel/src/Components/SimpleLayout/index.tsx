import { motion } from 'framer-motion'
import ChildrenProp from '../../Types/ChildrenProp'
import SmokeMotion from '../SmokeMotion'
import BackArrow from '../SVG/BackArrow'

const style = `
    flex
    flex-col
    justify-center
    items-center
    text-white
    h-screen
    w-screen
    relative
`

const SimpleLayout = ({children}: ChildrenProp): JSX.Element => {
    return (
        <motion.div animate={{opacity: [0, 1]}} className={style}>
            <motion.button className='absolute left-5 top-5 flex justify-center items-center gap-5 opacity-70 hover:opacity-100 duration-300'>
                <BackArrow/> Pocetna
            </motion.button>
            <SmokeMotion/>
            {children}
            <p className='absolute bottom-2 text-xs'>Sva prava zadrzana @ Revolucija Roleplay</p>
        </motion.div>
    )
}


export default SimpleLayout