import { motion } from 'framer-motion'
import SimpleLayout from "../../Components/SimpleLayout";
import SteamIcon from '../../Components/SVG/SteamIcon';
import Logo from '../../Static/Images/big-logo.png';

const Auth = (): JSX.Element => {
    const openInNewTab = (url: string): void => {
        window.open(url, '_self', 'noopener,noreferrer');
    };

    return (
        <SimpleLayout>
            <motion.img 
                animate={{y: [-100, 0]}}
                className="w-40 h-auto my-10"
                src={Logo} alt="logo"
            />
            <motion.h1 animate={{x: [-100, 0]}} className="text-2xl font-black my-2 text-center">
                PRIJAVITE SE
            </motion.h1>
            <motion.h2 animate={{x: [100, 0]}} className="opacity-60 text-center">
                Pratite informacije vaseg karaktera sada i na web-u
            </motion.h2>
            <motion.button
                animate={{y: [100, 0]}} 
                className="border-2 border-red-600 flex gap-5 items-center justify-center py-3 px-6 my-10 rounded-2xl hover:bg-red-600"
                whileHover={{scale: 1.1}}
                onClick={() => openInNewTab('http://sogolisica:3001/api/auth/steam')}
            >
                <SteamIcon/> 
                <p>
                    Prijavi se putem Steam-a
                </p>
            </motion.button>
            <motion.p animate={{opacity:[0, 0.6]}} transition={{delay: 1}} className="text-xs opacity-60 text-center">Ovaj sajt nije udruzen sa Valve corp.</motion.p>
            <motion.p animate={{opacity:[0, 0.6]}} transition={{delay: 1}} className="text-xs opacity-60 w-72 text-center my-5">
                Prijavom putem Steam-a delite vas Steam 
                identifikacioni broj sa Revolucija Roleplay 
                kako bi smo Vas mogli identifikovati na serveru.
            </motion.p>
        </SimpleLayout>
    );
}

export default Auth;