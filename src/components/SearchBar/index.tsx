import { SearchContainer,SearchBar ,SearchInput, SearchButton, ButtonContainer, ButtonIcon} from "./styles";
import { useState, useContext,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Mic from "../../assets/microphone.png";
import Lupa from "../../assets/lupa.png";
import { VideoUpContext } from "../../contexts/UploadVideoContext";
import { SearchContext } from "../../contexts/searchContext";



function SearchContent() {

    const Navigate = useNavigate();
    const {search, setSearch} = useContext(SearchContext)
    
    console.log(search);
    return(

        <SearchContainer>
                    <SearchBar>
                        <SearchInput placeholder="Pesquisar" value={search} type="text" id="search" name="search" onChange={(e)=> setSearch(e.target.value)}/>
                    </SearchBar >
                    <SearchButton>
                        <ButtonIcon alt="" src={Lupa} typeof="submit" onClick={()=>Navigate('/search') }  />
                    </SearchButton>
                    <ButtonContainer margin=' 0 0 0 10px'>
                        <ButtonIcon alt="" src={Mic}/>
                    </ButtonContainer>
                </SearchContainer>
    )
}

export default SearchContent;