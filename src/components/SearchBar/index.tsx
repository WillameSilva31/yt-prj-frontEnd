import { SearchContainer,SearchBar ,SearchInput, SearchButton, ButtonContainer, ButtonIcon} from "./styles";
import { useState, useContext,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Mic from "../../assets/microphone.png";
import Lupa from "../../assets/lupa.png";




function SearchContent() {

    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    
    const HandleRedirect = () => {
        if(!search) return;

        navigate({
            pathname:'/search',
            search: `?search=${search}`
        })
    }
    console.log(search);
    return(

        <SearchContainer>
                    <SearchBar>
                        <SearchInput placeholder="Pesquisar" value={search} type="text" id="search" name="search" onChange={(e)=> setSearch(e.target.value)}/>
                    </SearchBar >
                    <SearchButton>
                        <ButtonIcon alt="" src={Lupa} typeof="submit" onClick={HandleRedirect}  />
                    </SearchButton>
                    <ButtonContainer margin=' 0 0 0 10px' >
                        <ButtonIcon alt="" src={Mic}/>
                    </ButtonContainer>
                </SearchContainer>
    )
}

export default SearchContent;