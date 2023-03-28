import Header from "./components/header";
import Menu from "./components/menu";
import { useState } from 'react';
import { initialValue } from "./contexts/menuUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Inscription from "./pages/inscription";
import Library from "./pages/library";
import Categories from "./components/Categories";
import { UserStorage } from "./contexts/UserContext";
import Login from "./pages/login";

function App() {

  const [openMenu, setOpenMenu] = useState(initialValue.openMenu)


  return (
    <UserStorage>
      <BrowserRouter>
        <div className="App">
          <Header OpenMenu ={openMenu} SetOpenMenu ={setOpenMenu}/>
          <div style={{width:'100%', display:'flex'}}>
            <Menu OpenMenu ={openMenu} setOpenMenu={setOpenMenu}/>
            <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
            <Categories openMenu={openMenu}/>
              <div style={{width:'100%',padding:'10px 20px', boxSizing: "border-box", display:"flex",justifyContent:'center'}}> 
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/shorts" element={<Shorts/>}/>
                  <Route path="/inscription" element={<Inscription/>}/>
                  <Route path="/library" element={<Library/>} />
                  <Route path="/login" element={<Login/>}/>
                </Routes>
                </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
