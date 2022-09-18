import React from 'react';
import './styles.css';
import Header from "../header/header";
import Main from "../pages/main/main";
import Footer from "../footer/footer";

function App() {
  return (
    <div className="app">
      <div className="app__body">
          <Header/>
          <Main/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
