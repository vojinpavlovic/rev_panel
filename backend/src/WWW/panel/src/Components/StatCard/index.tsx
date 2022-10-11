import { motion } from 'framer-motion'

const StatCard = ({val, desc}: {val:string | number, desc: string}) => {
    return (
        <motion.div
            whileHover={{scale: 1.1, opacity: 1}}
            className='w-24 h-24 hover: cursor-pointer flex flex-col justify-center items-center p-5 text-2xl text-center font-bold rounded-md border-2 border-gray opacity-60'
        >
            <h1>{val ? val : ""}</h1>
            <p className='text-sm font-normal'>{desc ? desc : ""}</p>
        </motion.div>
    )
}

export default StatCard