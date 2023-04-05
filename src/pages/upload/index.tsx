import { ButtonIcon, Container, FieldInput, Input, InputDate, Label, Text, Title } from "./styles";
import { useContext,useState } from "react";
import { VideoUpContext } from "../../contexts/UploadVideoContext";


function Upload() {
    const {handleVideoUp} = useContext(VideoUpContext)
    const [user_id,setUser_id] = useState('');
    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');
    

    

    
    return(
        
        <Container>
            <Title> Upload do Vídeo </Title>
            <FieldInput>
            <Label>Id do usuário</Label>
            <Input value={user_id} onChange={(e)=> setUser_id(e.target.value)} placeholder="seu id de usuário" />
            </FieldInput>
            <FieldInput>
            <Label>Título do vídeo</Label>
            <Input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="ex:Fábio se machucando jogando bola" />
            </FieldInput>
            <FieldInput>
            <Label> Descrição </Label>
            <Text value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="ex:fui jogar bola na rua e acabou não dando muito certo"/>
            </FieldInput>
            
            <ButtonIcon onClick={()=>handleVideoUp(user_id, title, description)}> postar vídeo </ButtonIcon>
        </Container>
    )
}

export default Upload;
