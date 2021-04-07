import React from 'react';
import {connect} from 'react-redux';

import {searchedArticlesAction} from '../redux/actions/index.js'
import TopHeadlineCard from './TopHeadlineCard.js';

class Search extends React.Component{
    constructor(props){
        super(props);

        this.input = React.createRef();
    };
    onSubmit = (event) =>{
        event.preventDefault();

        this.props.searchedArticlesAction(this.input.current.value);
    }
    searchedArticlesMap = () =>{
        return this.props.searchedArticles.map((article) => {
            return <TopHeadlineCard key={article.url} article={article} />
        })
    };
    
    onRelevanceClick = () =>{
        this.props.searchedArticlesAction(this.input.current.value, "relevancy");
    }
    onPopularClick = () =>{
        this.props.searchedArticlesAction(this.input.current.value, "popularity");
    }
    onPublishedDateClick = () =>{
        this.props.searchedArticlesAction(this.input.current.value, "publishedAt");
    }
    render(){
        if(!this.input.current){
            return(
                <div>
                    <div className="ui teal segment">
                        <form onSubmit={this.onSubmit}>
                            <label>Search for a topic</label>
                            <div className="ui fluid icon input">
                                <input ref={this.input} type="text" placeholder="Search..."></input>
                                <button><i className="search icon"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className="ui four stackable cards">
                        {this.searchedArticlesMap()}
                    </div>
                </div>
            );
        }
            return(
                <div>
                    <div className="ui teal segment">
                        <form onSubmit={this.onSubmit}>
                            <label>Search for a topic</label>
                            <div className="ui fluid icon input">
                                <input ref={this.input} type="text" placeholder="Search..."></input>
                                <button><i className="search icon"></i></button>
                            </div>
                        </form>
                        <div className="ui text menu">
                            <div className="header item">Sort By</div>
                            <span style={{cursor: "pointer"}} className="item" onClick={this.onRelevanceClick}>
                                Relevance
                            </span>
                            <span style={{cursor: "pointer"}} className="item" onClick={this.onPopularClick}>
                                Popular
                            </span>
                            <span style={{cursor: "pointer"}} className="item" onClick={this.onPublishedDateClick}>
                                Published Date
                            </span>
                        </div>
                    </div>
                    <div className="ui four stackable cards">
                        {this.searchedArticlesMap()}
                    </div>
                </div>
            );
    };
};

const mapStateToProps = (state) =>{
    return {
        searchedArticles : state.searchedArticles,
    }
}

export default connect (mapStateToProps, {searchedArticlesAction : searchedArticlesAction}) (Search);