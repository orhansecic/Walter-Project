import React from 'react';

import HeaderMain from './HeaderMain.js';
import Content from './Content.js';

class Main extends React.Component{
    render(){
        return(
            <div>
                <HeaderMain />
                <Content />
            </div>
        );
    };
};

export default Main;