import React from 'react';

const news_item_list = (props) => {
    console.log(props.newsitems);
    const Listitems = props.newsitems.map((list)=>{
        return(
            <div className="card">
            <h1>{list.title}</h1>
            <p>{list.feed}</p>
            <hr></hr>
            </div>
        )
    })
    return (
        <div>
           {Listitems} 
        </div>
    );
};

export default news_item_list;