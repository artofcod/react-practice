import React from 'react';
// import logo from '../logo.svg';
// import './App.css';
// import { a } from 'react-router-dom'

import Header from './include/header';
import Hero from './include/hero';
import Aboutus from './include/aboutus';
import Whyus from './include/whyus';
import Faq from './include/faq';
import Contactus from './include/contactus';
import Footer from './include/footer';

class App extends  React.Component {
  render(){
    return (
      <div>
        
       <Header/>

       <Hero></Hero>
      
        <main id="main">
      
          <Aboutus></Aboutus>
      
          <Whyus></Whyus>
      
          <Faq></Faq>
      
          <Contactus></Contactus>
      
        </main>
      
        <Footer></Footer>

        </div>
    );
  }
}

export default App;
