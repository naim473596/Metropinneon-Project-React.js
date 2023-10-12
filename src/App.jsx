
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./assets/Component/Navbar";
import About from "./assets/Component/About";
import Blog from './Blog';
import FAQ from './assets/Component/FAQ';
import Surveys from "./assets/Component/Surveys";
import Login from "./assets/Component/Login";
import Home from "./assets/Component/Home";
import Footer from "./assets/Component/Footer";


function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about us" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/surveys" element={<Surveys/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>



    
    </>
  );
}

export default App;
