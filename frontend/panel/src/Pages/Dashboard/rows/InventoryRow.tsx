import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../../App/Store';

import InventoryCard from '../../../Components/InventoryCard';

import * as Style from '../style';


const InventoryRow = (): JSX.Element => {
    const { inventory } = useSelector((state: RootState) => state.user.user)

    const inventoryMapper = (): JSX.Element[] => {
        const items: Array<any> = [];
        var counter: number = 0;

        while (counter < 56) {
            if (inventory[counter]) {
                const item = inventory[counter];
                items.push(<InventoryCard key={`item-${item.name}-${counter}`} name={item.name} count={item.count}/>)
            } else {
                items.push(<InventoryCard key={`item-empty-${counter}`}/>)
            }

            counter++;
        }

        return items;
    }


    return (
        <motion.div 
            animate={{opacity: [0, 1]}}
            transition={{delay: 0.8}}
            className={Style.InventoryRow}
        >
            <h1 className={Style.UpdateLogRowTitle}>📦 Inventar</h1>
            <motion.div
                className={Style.InventoryWrapper}
            >
                {inventoryMapper()}
            </motion.div>
        </motion.div>
    )
}

export default InventoryRow