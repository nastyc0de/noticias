import React,{Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Newlist from './components/NewList';


function App() {
  // define the category and news
  const [category, setCategory] = useState('');
  const [news_article, setNews] = useState([])

  useEffect(() => {
    const getAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=47ce9dcf727d4b1d9ee4bbf162a27837`;
      const answer = await fetch(url);
      const news = await answer.json();

      setNews(news.articles);
    }
    getAPI();
  }, [category]);
  
  return (
    <Fragment>
      <Header
       titulo="Busca tus noticias"
      />
    <div className="container blue-grey">
        <Form
          setCategory={setCategory}
        />
        <Newlist
          news_article={news_article}
        />
    </div>
    </Fragment>
    
    
  );
}

export default App;
