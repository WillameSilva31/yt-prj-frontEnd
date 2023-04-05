import {createContext,useEffect, useState} from 'react';
import api from '../api';


export const VideoUpContext = createContext({} as any);

export const VideoStorage = ({ children }: any) => {
   
    const [videoUp, setVideoUp] = useState(false);
    const [ videoUser, setVideoUser] = useState({});
    
    

    const handleVideoUp = ( user_id:string, title: string, description:string) => {
        
        api.post('/videos/create-videos', {user_id, title, description}).then(({data})=>{
            setVideoUp(true);
            alert('VIDEO CRIADO!')
            
            
        }).catch((error)=>{
            console.log('não foi possível fazer o cadastro',error);
            alert('nao deu pra criar o video')
        })
    }

    

    
    return(
        <VideoUpContext.Provider value ={{videoUp, videoUser, handleVideoUp}}>
            {children}
        </VideoUpContext.Provider>
    )
    
}








