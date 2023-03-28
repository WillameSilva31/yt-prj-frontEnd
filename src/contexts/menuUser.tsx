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

export const MenuContext = createContext<UserMenuContextType>(initialValue);


export const  UserMenuProvider = ({children}:UserMenuContextTypeIprops) => {
    const [openMenu, setOpenMenu] = useState(false)

    return(
        <MenuContext.Provider value={{openMenu, setOpenMenu}}>
           {children} 
        </MenuContext.Provider>
    )
}
