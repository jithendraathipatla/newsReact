import React, { useState } from 'react';
import './App.css';
import Header from "./components/header";
import Newsitem from "./components/news_item"
import JSON from './db.json';
function App() {
  const [news,setnews] = useState(JSON);
  const [filtered,setfiltered] = useState([]);
  const HeaderKeywords = (e) => {
    let datafiltering = news.filter((item)=>{
         return item.title.indexOf(e.target.value) > -1;
    });
    setfiltered(datafiltering);
  }
  return (
    console.log(news),
    <div>
    <div className="App">
      <Header keywords1={HeaderKeywords}/>
    </div>
    <Newsitem news={filtered.length == 0 ? JSON : filtered}/>
    </div>
  );
}

export default App;
