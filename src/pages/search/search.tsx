
import { useState,useContext,useEffect } from "react";
import { Container } from "./styles";
import api from "../../api";

function Search() {
  const [videos, setVideos] = useState([])

  useEffect(()=> {load()},[])

  async function load() {
    try {
      const response = await api.get('/videos/search')
      setVideos(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return(
    <div>
      <div className="tabs">
        resultados
      </div>
      <div className="content">
        
      </div>
    </div>
  )
}
export default Search;

