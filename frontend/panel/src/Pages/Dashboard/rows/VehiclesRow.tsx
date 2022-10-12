import { motion } from "framer-motion"
import { useSelector } from "react-redux";
import { RootState } from "../../../App/Store";

import * as Style from '../style';
import VehicleCard from "../../../Components/VehicleCard";

const VehiclesRow = (): JSX.Element => {
    const { vehicles } = useSelector((state: RootState) => state.user.user)

    const generateVehicles = () => {
        var vehiclesData: JSX.Element[] = [];

        for (let i=0; i<vehicles.length; i++) {
            const x: any = vehicles[i];
            const element = <VehicleCard name={x.name} img={x.img} plate={x.plate} engineHP={x.engineHP}/>
            vehiclesData.push(element);
        }

        return vehiclesData;
    }

    return (
        <motion.div
            animate={{opacity: [0, 1]}}
            transition={{delay: 1}}
            className={Style.VehiclesRow}
        >
            <h1 className={Style.UpdateLogRowTitle}>🚗 Automobili ({vehicles.length})</h1>
            {generateVehicles()}
        </motion.div>
    )
}

export default VehiclesRow