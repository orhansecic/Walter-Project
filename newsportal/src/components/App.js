import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//Components
import LandingPage from './LandingPage.js';
import Article from './Article.js';

const App = () =>{
    return(
        <div className="ui container">
            <BrowserRouter>
                <Route path="/" exact component={LandingPage}></Route>
                <Route path="/article" component={Article}></Route>
            </BrowserRouter>
        </div>
        
    );
};

export default App;