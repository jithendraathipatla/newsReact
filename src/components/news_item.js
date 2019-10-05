import React from 'react';
import Newslistitem from './news_item_list';
const news_item = (props) => {
    return (
        <div>
            <Newslistitem  className="card" newsitems={props.news} id={props.news.id}/>
        </div>
    );
};

export default news_item;