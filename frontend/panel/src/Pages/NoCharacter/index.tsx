import { motion } from 'framer-motion'
import SimpleLayout from "../../Components/SimpleLayout";
import Logo from '../../Static/Images/big-logo.png';

const NoCharacter = (): JSX.Element => {
    return (
        <SimpleLayout>
            <motion.img 
                animate={{y: [-100, 0]}}
                className="w-40 h-auto my-10"
                src={Logo} alt="logo"
            />
            <motion.p animate={{opacity:[0, 0.6]}} transition={{delay: 1}} className="text-xs opacity-60 text-center">Desila se greska, vas karakter nije nadjen.</motion.p>
            <motion.p animate={{opacity:[0, 0.6]}} transition={{delay: 1}} className="text-xs opacity-60 w-72 text-center my-5">
                Zao nam je. Morate prethodno napraviti karaktera u igri kako bi ste pristupili panel-u svog igraca.
            </motion.p>
        </SimpleLayout>
    );
}

export default NoCharacter;