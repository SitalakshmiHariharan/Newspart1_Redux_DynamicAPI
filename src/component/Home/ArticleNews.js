import React from 'react';
import {Link} from 'react-router-dom';


const ArticleNews = (props) => {
    console.log("Inside the component-article")
    const RenderArticle = ({articledata}) => {
        if(articledata){
            return articledata.map((item) => {
                return(
                    <Link to="" className="item">
                        <div className="left">
                            
                        </div>
                        <div className="right">
                            <h3> {item.title}</h3>
                            <div className="category-tags">
                                {item.category}
                            </div>
                            <div className="tags">
                                <span>
                                    <i className="fa fa-eye">{item.views}</i>
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-up">
                                        {item.likes}
                                    </i>
                                </span>                               
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div className="other-news">
            <h2> ARTICLE NEWS </h2>
            <div className="other-news-item">
            {RenderArticle(props)}
            </div>            
        </div>
    )
}

export default ArticleNews;