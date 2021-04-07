import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import myImage from '../images/News.png';

const Article = (props) =>{
    if(!props.article){
        return(
            <Link to="/">Returning Back to Landing Page</Link>
        );
    }else{
        if(!props.article.urlToImage){
            props.article.urlToImage = myImage;
        }
        return(
            <div>
                <h1 style={{textAlign: "center"}}>{props.article.title}</h1>
                <div className="ui divider"></div>
                <div className="ui teal segment">
                    <img className="ui centered huge image"src={props.article.urlToImage} alt="Not Found!"/>
                    <h4>{props.article.description}</h4>
                    <p>{props.article.content}</p>
                    <div style={{textAlign:"center"}}>
                        <span><a href={props.article.url}>Source's Page</a></span>
                    </div>
                    <div className="ui three item menu">
                        <div className="item">Author: {props.article.author}</div>
                        <div className="item">Source: {props.article.source.name}</div>
                        <div className="item">Date: {props.article.publishedAt}</div>
                    </div>

                    <div className="ui segment" style={{textAlign: "center"}}>
                        <Link to="/">
                            <div className="ui teal animated button">
                                <div className="visible content">Return To Landing Page</div>
                                <div className="hidden content">
                                    <i className="left arrow icon"></i>
                                </div>
                            </div>
                        </Link>
                        <Link to="/search">
                            <div className="ui teal animated button">
                                <div className="visible content">Return To Search Page</div>
                                <div className="hidden content">
                                    <i className="left arrow icon"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
        );
    }
};

const mapStateToProps = (state) =>{
    return{
        article : state.article,
    }
}

export default connect (mapStateToProps) (Article);