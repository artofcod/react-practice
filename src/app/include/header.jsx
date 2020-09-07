import React from "react";

export default 
class Header extends React.Component{
    render(){
        return(
        <header id="header">
          <div className="container-fluid">
      
            <div className="logo float-left">
              <h1 className="text-light"><a href="index.html"><span>Siimple</span></a></h1>
              <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
            </div>
      
            <button type="button" className="nav-toggle"><i className="bx bx-menu"></i></button>
            <nav className="nav-menu">
              <ul>
                <li className="active"><a href="#header">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#why-us">Why Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </nav>
      
          </div>
        </header>
        )
    }
}