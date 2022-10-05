import { motion } from 'framer-motion'
import ChildrenProp from '../../Types/ChildrenProp'

const style = `
    flex
    flex-col
    justify-center
    items-center
    text-white
`

const SimpleLayout = ({children}: ChildrenProp): JSX.Element => {
    return (
        <motion.div animate={{opacity: [0, 1]}} className={style}>
            {children}
        </motion.div>
    )
}

export default SimpleLayout