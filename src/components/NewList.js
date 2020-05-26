import React from 'react';
import New from '../components/News';

const Newlist = ({news_article}) => (
    <div className="row">
        {news_article.map(new_article => (
            <New
                key={new_article.url}
                new_article={new_article}
            />
        ))}
    </div>
);
 
export default Newlist;