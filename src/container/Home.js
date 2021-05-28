import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArticleNews from '../component/Home/ArticleNews';
import GalleryNews from '../component/Home/GalleryNews';
import LatestNews from '../component/Home/LatestNews';
import {latestNews, articleNews} from '../actions';
import PropTypes from 'prop-types'; 


class Home extends Component{
    
    componentDidMount(){ // to invoke
        console.log("Inside the CDM")
        this.props.dispatch(articleNews());
        this.props.dispatch(latestNews());
    }

    render(){
        return(
            <div>
                <LatestNews latestdata={this.props.articledata.latest}/>
                <ArticleNews articleda = {this.props.articledata.artdata}/>
                <GalleryNews/>
            </div>
        );
    }
}

//To receive the state
function mapStateToprops(state){  
    console.log("Inside the MSTP")
    return{
        articledata: state.articles
    }
}

//To dispatch the action - old method of binding the action with the component
Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToprops)(Home);