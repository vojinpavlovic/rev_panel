import { motion } from 'framer-motion'
const style = "w-24 h-24 hover:cursor-pointer flex flex-col justify-center items-center p-5 text-2xl text-center font-bold rounded-xl border-4 border-dark-transparent hover:border-red-600 group"

const StatCard = ({val, desc, delay}: {val:string | number, desc: string, delay?:number}) => {
    return (
        <motion.div
            animate={{x: [70, 0], transition: {delay: delay ? delay : 0.5}}}
            whileHover={{scale: 1.0}}
            className='opacity-40 w-24 h-24 hover:cursor-pointer flex flex-col justify-center items-center p-5 text-2xl text-center font-bold rounded-xl border-4 border-dark-transparent  group'
        >
            <h1 className='group-hover:font-black  duration-300'>{val ? val : ""}</h1>
            <p className='text-sm font-normal'>{desc ? desc : ""}</p>
        </motion.div>
    )
}

export default StatCard