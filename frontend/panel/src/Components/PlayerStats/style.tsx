export const Wrapper = `
    items-center
    justify-center
    w-full 
    flex
    flex-col
    gap-5

    xl:items-left
    xl:justify-start
    xl:flex-row
    xl:gap-10
    xl:mx-5
`

export const HourContainer = `
    w-11/12
    md:w-10/12
    xl:w-4/12 
    2xl:w-3/12
    h-16
    rounded-lg
    backdrop-blur-sm
    bg-gradient-to-r 
    to-dark-transparent
    from-accounts-from-rgba 
    drop-shadow-[0_35px_35px_rgba(0,0,0,0.9)]
    flex
    justify-center
    items-center
    cursor-default
    select-none
`

export const AccountContainer = `
    w-11/12
    md:w-10/12
    h-60
    p-6
    items-center
    gap-10
    rounded-lg
    backdrop-blur-sm
    bg-gradient-to-r 
    from-accounts-from-rgba 
    to-dark-transparent
    drop-shadow-[0_35px_35px_rgba(0,0,0,0.9)]
    
    flex
    justify-center
    flex-col

    xl:flex-row
    xl:justify-between
    xl:h-16
    xl:w-7/12 
    cursor-default
    select-none
`