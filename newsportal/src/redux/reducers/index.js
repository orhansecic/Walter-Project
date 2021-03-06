// Reducers
import {combineReducers} from 'redux';

const topHeadlinesReducer = (topHeadlines = [], action) =>{
    switch(action.type){
        case "TOP_HEADLINES":
            return action.payload;
        default:
            return topHeadlines;
    }
};

const selectedArticleReducer = (article = null, action) =>{
    switch(action.type){
        case "SELECTED_ARTICLE":
            return action.payload;
        default: 
            return article;
    }
}

const searchedArticlesReducer = (searchedArticles = [], action) =>{
    switch(action.type){
        case "SEARCHED_ARTICLES":
            return action.payload;
        default:
            return searchedArticles;
    }
}

const reducers = combineReducers({
    topHeadlines : topHeadlinesReducer,
    article: selectedArticleReducer,
    searchedArticles: searchedArticlesReducer,
})

export default reducers;