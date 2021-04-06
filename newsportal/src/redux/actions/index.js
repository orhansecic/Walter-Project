// Action Creators and Actions with Thunk

//Axios
import newsAPI from '../../api/newsAPI.js';

const topHeadlinesAction = () =>{
    return  function (dispatch, getState){
        newsAPI.get("/top-headlines")
        .then((value) => {
            dispatch({
                type: "TOP_HEADLINES",
                payload: value.data.articles,
            })
        })
        .catch((err) => {
            console.error(err);
        })
    }
};

export {topHeadlinesAction};

const selectedArticleAction = (article) =>{
    return {
        type: "SELECTED_ARTICLE",
        payload: article,
    }
};

export {selectedArticleAction};
