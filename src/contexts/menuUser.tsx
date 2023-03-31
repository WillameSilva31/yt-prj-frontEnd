import { createContext, ReactNode, useState } from "react";

type UserMenuContextTypeIprops = {
    children: ReactNode,
    
}

type UserMenuContextType = {
    openMenu: boolean,
    setOpenMenu: (newState: boolean) => void
}

export const initialValue = {
    openMenu: false,
    setOpenMenu: () => {}
}

export const menuContext = createContext<UserMenuContextType>(initialValue);


export const  UserMenuProvider = ({children}:UserMenuContextTypeIprops) => {
    const [openMenu, setOpenMenu] = useState(false)

    return(
        <menuContext.Provider value={{openMenu, setOpenMenu}}>
           {children} 
        </menuContext.Provider>
    )
}


