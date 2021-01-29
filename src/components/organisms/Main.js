import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Header from "./Header";
import Footer from "./Footer";

Main.propTypes = {
    
};

function Main(props) {
    return (
        <div class="c-app">
        <Sidebar/>
        <div className="c-wrapper c-fixed-components">
        <Header/>
          <div className="c-body">
            <main className="c-main">
              <div className="container-fluid">
                {props.children}
                <div className="fade-in" />
              </div>
            </main>
          <Footer/>
          </div>
        </div>
      </div>
    );
}

export default Main;