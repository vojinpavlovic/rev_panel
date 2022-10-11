import { motion } from 'framer-motion';

const Style = {
    InventoryCard : `
        w-28 
        h-28
        flex 
        justify-center
        items-center 
        border-2
        border-dark-line
    ` 
}

const InventoryCard = ({name}: {name?: string}): JSX.Element => (
    <motion.div
        className={Style.InventoryCard}
    >
        <h1>{name}</h1>
    </motion.div>
)

export default InventoryCard;