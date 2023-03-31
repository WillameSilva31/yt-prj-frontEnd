import {createContext, useEffect, useState} from 'react';
import api from '../api';

export const VideoUpContext = createContext({} as any);

export const VideoStorage = ({ children }: any) => {
   
    const [videoUp, setVideoUp] = useState(false);
    const [ videoUpUser, setVideoUpUser] = useState({});


    const handleVideoUp = ( user_id:string, title: string, description:string) => {
        
        api.post('/videos/upload-video', {user_id, title, description}).then(({data})=>{
            setVideoUp(true);
            alert('VIDEO CRIADO!')
            
        }).catch((error)=>{
            console.log('não foi possível fazer o cadastro',error);
            alert('nao deu pra criar o video')
        })
    }

    
    return(
        <VideoUpContext.Provider value ={{videoUp, videoUpUser, handleVideoUp}}>
            {children}
        </VideoUpContext.Provider>
    )
    
}