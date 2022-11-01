import { motion } from 'framer-motion';
import ItemFallback from '../../Static/Images/empty-box.png';

const Style = {
    InventoryCard : `
        relative
        w-28 
        h-28
        flex 
        justify-center
        items-center 
        border-2
        border-dark-line
        group
        select-none
    `,
    Name: `
        absolute
        bottom-0
        text-xs
        text-center
        w-10/12
        text-bold
        text-gray
        group-hover:text-white
        duration-200
    `,
    Count: `
        absolute
        top-0
        right-2
        text-gray
        text-md
        font-bold
        group-hover:text-white
        duration-200
    `,
    ItemImg: `
        w-[45px] 
        h-auto 
        block
    `
}

const InventoryCard = ({name, count, img = ""}: {name?: string, count?: number, img?: string}): JSX.Element => {
    return (
        <motion.div
            className={Style.InventoryCard}
        >
            {(name && count) &&
                <>
                <h1 className={Style.Name}>{name}</h1>
                <img className={Style.ItemImg} src={img}  alt="empty-item"/>
                <p className={Style.Count}>{count}x</p>
                </>
            }
        </motion.div>
    )
}

export default InventoryCard;