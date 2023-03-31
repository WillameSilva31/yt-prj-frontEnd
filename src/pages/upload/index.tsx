import { Container, FieldInput } from "./styles";
import { useContext,useState } from "react";
import { VideoUpContext } from "../../contexts/VideoContext";


function Upload() {
    const {handleVideoUp} = useContext(VideoUpContext)
    const [user_id,setUser_id] = useState('');
    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');

    

    
    return(
        
        <Container>
            <h3> Upload do Vídeo </h3>
            <span>Id do usuário</span>
            <FieldInput>
            <input value={user_id} onChange={(e)=> setUser_id(e.target.value)} placeholder="seu id de usuário" />
            </FieldInput>
            <span>Título do vídeo</span>
            <FieldInput>
            <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="ex:Fábio se machucando jogando bola" />
            </FieldInput>
            <span> Descrição </span>
            <FieldInput>
            <textarea value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="ex:fui jogar bola na rua e acabou não dando muito certo"/>
            <button onClick={()=>handleVideoUp(user_id, title, description)}> postar vídeo </button>
            </FieldInput>
        </Container>
    )
}

export default Upload;
