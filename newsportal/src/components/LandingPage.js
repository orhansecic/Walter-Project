import React from 'react';
import {connect} from 'react-redux';
import { topHeadlinesAction } from '../redux/actions';
import TopHeadlineCard from './TopHeadlineCard.js';

class LandingPage extends React.Component{
    componentDidMount(){
        this.props.topHeadlinesAction();
    }

    topHeadlinesMap(){
        return this.props.topHeadlines.map((article) => {
            return <TopHeadlineCard key={article.url} article={article}/>
        })
    }

    render(){
        return(
            <div>
                <h1>Landing Page!</h1>
                <div className="ui four stackable cards">
                    {this.topHeadlinesMap()}
                </div>
                {console.log(this.props.topHeadlines)}
            </div>
        );
    };
};

const mapStateToProps = (state) =>{
    return{
        topHeadlines : state.topHeadlines,
    }
}

export default connect (mapStateToProps,
    {
        topHeadlinesAction: topHeadlinesAction,
    }
    ) (LandingPage);