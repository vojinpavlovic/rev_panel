import { motion } from 'framer-motion'
import logo from '../../Static/Images/logo-horizontal.png';

const style = `
    flex
    flex-col
    w-screen
    h-screen
    bg-dark
    justify-center
    items-center
    text-white
    text-center
`

const Loading = () => {
    return (
        <div className={style}>
            <motion.img 
                src={logo}
                alt="logo"
                animate={{
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    ease: "easeIn",
                    repeat: Infinity,
                    duration: 2
                }}
            />
            <motion.p 
                className='w-full my-10 opacity-60'
                animate={{
                    left: [0, 180, 0],
                    opacity: [0.4, 0.6, 0.4]
                }}
                transition={{
                    ease: "easeIn",
                    repeat: Infinity,
                    duration: 1
                }}
            >
                Ucitavanje...
            </motion.p>
        </div>
    )
}

export default Loading