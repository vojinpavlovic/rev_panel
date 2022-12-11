import { motion } from "framer-motion";
import fetchAPI from "../../Helpers/fetchAPI";
import userReducer from '../../Features/User/UserSlice';
import { useDispatch } from "react-redux";

const Navbar = ({show}: {show: Boolean}) => show ? <Menu/> : <></>

const Menu = () => {
    return (
        <motion.div
            className="absolute h-40 w-fit"
            initial={{ scale: 0 }}
            animate={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
        >
            <motion.div className="
                my-14 
                bg-gradient-to-r 
                to-dark-transparent
                from-accounts-from-rgba 
                backdrop-blur-md
                drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)]
                w-64 flex flex-col gap-3 py-6 px-4
                rounded-md z-40 list-none font-bold text-xs">
                    <Item text="Pocetna" src="https://revolucija-roleplay.com"/>
                    <Item text="Prodavnica" src="https://store.revolucija-roleplay.com"/>
                    <LogOffButton/>
            </motion.div>
        </motion.div>
    );
}

const LogOffButton = () => {
    const logout = async () => {
        const result = await fetchAPI({endpoint: "api/auth/logout"});
            console.log(result)
        if (result.status) {
            window.open("https://revolucija-roleplay.com/prijava", '_self', 'noopener,noreferrer');
        }
    }

    return(
        <motion.button 
        onClick={logout}
        className="text-xs bg-red-transparent py-4 rounded-md hover:bg-red-600 duration-300">
            Odjavi se
        </motion.button>
    );
}


const Item = ({text, src} : {text:string, src: string}) => {
    const openBlankTab = (url: string): void => {
        window.open(url, '_self', 'noopener,noreferrer');
    };

    return (
        <motion.button 
            onClick={() => openBlankTab(src)}
            className="border 
            rounded-md 
            border-red-500 w-full text-center py-3 opacity-60 
            hover:cursor-pointer hover:bg-dark 
            text-white font-bold select-none
            " whileHover={{opacity: 1}}>
            {text}
        </motion.button>
    )
}

export default Navbar