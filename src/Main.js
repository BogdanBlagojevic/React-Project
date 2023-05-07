import React, {Component} from 'react';
import {
Routes,    
Route,
NavLink,
HashRouter
} from "react-router-dom";
import logo from "./img/logo.png"
import Pocetna from "./Pocetna";
import ONama from "./ONama";
import Kontakt from "./Kontakt";

class Main extends Component{
render(){
return(
<HashRouter>
    <header>

 <a href="#" class="logo">Web izrada<img src={logo} ></img></a>
<ul className='navbar'>
<li><NavLink to="/">Pocetna</NavLink></li>
<li><NavLink to="/ONama">O Nama</NavLink></li>
<li><NavLink to="/Kontakt">Kontakt</NavLink></li>

</ul>
</header>

<div className="content">
    <Routes>

<Route exact  path="/" element={<Pocetna />}></Route>
<Route path="/ONama" element={<ONama />}></Route>
<Route path="/Kontakt" element={<Kontakt/>}></Route>
</Routes>
</div>



</HashRouter>
);
}
}
export default Main;