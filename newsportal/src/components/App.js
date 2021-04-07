import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//Components
import LandingPage from './LandingPage.js';
import Article from './Article.js';
import Header from './Header.js';
import Search from './Search.js';
import Footer from './Footer.js';

const App = () =>{
    return(
        <div>
            <div className="ui container">
                <BrowserRouter>
                    <Route path="/" component={Header}></Route>
                    <Route path="/" exact component={LandingPage}></Route>
                    <Route path="/article" component={Article}></Route>
                    <Route path="/search" component={Search}></Route>
                </BrowserRouter>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default App;