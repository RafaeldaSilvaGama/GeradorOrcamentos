import React from "react";
import "./styles.css";
import logo from "../../assets/logo_orca_facil.jpeg";
import search from "../../assets/search.png";
import menu_bar from '../../assets/menu_bar.png'


const header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />

      <div className="search-box">
        <input type="text" placeholder="Busca" />
        <img src={search} alt="" className="search-icon" />
      </div>

      <ul>
        <li>Home</li>
        <li>Serviços</li>
        <li>Suporte</li>
        <li>Sobre</li>
      </ul>

      <div className="menu-bar">
        <img src={menu_bar} alt="" className="menu-bar-img"/>
      </div>



    </div>

    
  );
};

export default header;
