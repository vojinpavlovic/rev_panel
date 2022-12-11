//import * as Style from './style';
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import BgImg from '../../Static/Images/update-log-banner.png'

const Style = {
    "Wrapper": `
        w-screen 
        h-screen 
        bg-black-opacity-70
        fixed 
        z-9999 
        left-0 
        top-0
        flex
        justify-center
        items-center
    `,
    "Container": `
        w-4/12
        h-[60vh]
        rounded-lg
        bg-dark-brown
        overflow-scroll
        overflow-x-hidden
        relative
    `,
    "Banner": `
        rounded-lg
    `,
    "Header": `
        mx-[3em]
        my-10
    `,
    "Title": `
        text-lg
        font-black
    `,
    "Date": `
        text-md
        opacity-50
    `,
    "Text": `
        my-3
        text-sm
        opacity-50
        leading-6
    `
}

const UpdateLogContainer = ({onClick}: {onClick: Dispatch<SetStateAction<Boolean>>}) => {
    const destroy = () => {
        onClick(false)
    }

    return ( 
        <motion.div className={Style.Wrapper} onClick={destroy}>
            <motion.div className={Style.Container}>
                <div className="relative overflow-hidden">
                    <motion.img className={Style.Banner} src={BgImg}></motion.img>
                    <div className="bg-gradient-to-t from-dark-brown to-transparent h-24 -py-10 left-0 bottom-0 w-screen absolute"></div>
                </div>
                <motion.div className={Style.Header}>
                    <p className={Style.Date}>27.01.2022</p>
                    <h1 className={Style.Title}>Sezona 3 je tu.</h1>
                    <p className={Style.Text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </motion.div>
                <div className="bg-gradient-to-t from-dark-brown to-transparent h-24 -py-10 left-0 bottom-0 w-screen sticky"></div>
            </motion.div>
        </motion.div>
    )
}

export default UpdateLogContainer;