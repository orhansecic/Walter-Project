import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Article = (props) =>{
    if(!props.article){
        return(
            <Link to="/">Returning Back to Landing Page</Link>
        );
    }else{
        return(
            <div>
                <h1>Title: {props.article.title}</h1>
                <h4>Description: {props.article.description}</h4>
                <img src="{props.article.urlToImage" alt="Not Found!"/>
                <p>Date: {props.article.publishedAt}</p>
                <p>Content: {props.article.content}</p>
                <p>Author: {props.article.author}</p>
                <p>Source: {props.article.source.name}</p>
                <Link to="/">Landing Page</Link>
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