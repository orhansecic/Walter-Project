import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import myImage from '../images/News.png';
import { selectedArticleAction } from '../redux/actions';

const TopHeadlineCard = (props) =>{
    if(!props.article.urlToImage){
        props.article.urlToImage = myImage;
    }
    return(
        <div className="card">
            <div className="image">
                <img className="ui fluid image"src={props.article.urlToImage} alt="IMG missing"></img>
            </div>
            <div className="content">
                <div className="header">{props.article.title}</div>
                <div className="description">{props.article.description}</div>
            </div>
                <div className="ui bottom attached animated teal button" onClick={()=>{props.selectedArticleAction(props.article)}}>
                    <Link to="/article" style={{ color: 'white' }}>
                        <div className="visible content">Read Full Article</div>
                        <div className="hidden content">
                            <i className="right arrow icon"></i>
                        </div>
                    </Link>
                </div>
            </div>
    );
};

export default connect (null,
    {
        selectedArticleAction: selectedArticleAction,
    }
    ) (TopHeadlineCard);