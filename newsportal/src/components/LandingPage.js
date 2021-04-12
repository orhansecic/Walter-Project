import React from 'react';
import {connect} from 'react-redux';
import { topHeadlinesAction } from '../redux/actions';
import TopHeadlineCard from './TopHeadlineCard.js';


class LandingPage extends React.Component{
    state = {
        visible: 20,
    }
    componentDidMount(){
        this.props.topHeadlinesAction();
    }

    topHeadlinesMap(){
        return this.props.topHeadlines.slice(0, this.state.visible).map((article) => {
            return <TopHeadlineCard key={article.url} article={article}/>
        })
    }
    onButtonClick = () =>{
        this.setState({
            visible: 100,
        })
    }

    render(){
        if(this.state.visible === 100){
            return(
                <div>
                    <div className="ui four stackable cards">
                        {this.topHeadlinesMap()}
                    </div>
                </div>
            );
            
        }
        return(
            <div>
                <div className="ui three stackable cards">
                    {this.topHeadlinesMap()}
                </div>
                <div className="ui teal center aligned segment">
                <div className="ui large teal animated button" onClick={this.onButtonClick}>
                        <div className="visible content">Load All</div>
                        <div className="hidden content">
                        <i className="sync icon"></i>
                        </div>
                    </div>
                </div>
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