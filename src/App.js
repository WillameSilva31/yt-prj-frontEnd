import Header from "./components/header";
import Menu from "./components/menu";
import { useState } from 'react';
import { initialValue} from "./contexts/menuUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Inscription from "./pages/inscription";
import Library from "./pages/library";
import Categories from "./components/Categories";
import { SignUpStorage, UserStorage } from "./contexts/UserContext";
import Login from "./pages/login";
import MyAccount from "./pages/myAccount";
import SignUp from "./pages/signup";
import DropDownMenu from "./components/DropDownMenu";
import Upload from "./pages/upload";
import { VideoStorage  } from "./contexts/UploadVideoContext";
import Search from "./pages/search/search";
import { SearchContextProvider } from "./contexts/searchContext";




function App() {
  const [openDropMenu, setOpenDropMenu] = useState(false);
  


  return (
    <VideoStorage>
      <UserStorage>
          <SignUpStorage>
            <BrowserRouter>
            <div className="App">
                <Header openDropMenu={openDropMenu} setOpenDropMenu={setOpenDropMenu}/>
                <div style={{width:'100%', display:'flex'}}>
                    <Menu/>
                    <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
                        <DropDownMenu openDropMenu={openDropMenu} setOpenDropMenu={setOpenDropMenu}  />
                        <Categories />
                        <div style={{width:'100%',padding:'0px 20px', boxSizing: "border-box", display:"flex",justifyContent:'center'}}> 
                            <Routes>
                              <Route path="/" element={<Home/>}/>
                              <Route path="/shorts" element={<Shorts/>}/>
                              <Route path="/inscription" element={<Inscription/>}/>
                              <Route path="/library" element={<Library/>} />
                              <Route path="/login" element={<Login/>}/>
                              <Route path="/signup" element={<SignUp/>}/>
                              <Route path="/Upload" element = {<Upload/>}/>
                              <Route path="/myaccount" element={<MyAccount/>}/>
                              <Route path="/search" element={<Search/>}/>
                            </Routes>
                        </div>
                    </div>  
                </div>
            </div>       
            </BrowserRouter>
          </SignUpStorage>
        </UserStorage>  
      </VideoStorage>
  );
}

export default App;
