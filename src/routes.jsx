import { BrowserRouter,Routes,Route } from "react-router";
import Inicio from "./pages/inicio";
import E1 from "./pages/E1";
import E2 from "./pages/E2";
import E3 from "./pages/E3";
import E4 from "./pages/E4";
import E5 from "./pages/E5";
import E6 from "./pages/E6";
import E7 from "./pages/E7";
import E8 from "./pages/E8";
import E9 from "./pages/E9";
import E10 from "./pages/E10";
import E11 from "./pages/E11";
import E12 from "./pages/E12";
import E13 from "./pages/E13";

export default function Navegacao (){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path= "/" element={<Inicio/>}/>
                    <Route path ="/e1" element = {<E1/>}/>
                    <Route path = "/e2" element = {<E2/>}/>
                    <Route path = "/e3" element = {<E3/>}/>
                    <Route path = "/e4" element = {<E4/>}/>
                    <Route path = "/e5" element = {<E5/>}/>
                    <Route path = "/e6" element = {<E6/>}/>
                    <Route path = "/e7" element = {<E7/>}/>
                    <Route path = "/e8" element = {<E8/>}/>
                    <Route path = "/e9" element = {<E9/>}/>
                    <Route path = "/e10" element = {<E10/>}/>
                    <Route path = "/e11" element = {<E11/>}/>
                    <Route path = "/e12" element = {<E12/>}/>
                    <Route path = "/e13" element = {<E13/>}/>
               </Routes>
            </BrowserRouter>
        )
}