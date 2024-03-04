// Make a article component

import React from 'react';
import '../assets/styles/Article.css';

const Article = ({ article }) => {
  const { title, description, url, urlToImage, source } = article;

    return (
        <div className="article" onClick={
            () => window.open(url, '_blank')
        }>
        <img src={urlToImage} alt={title} />
        <div className='article_details'>
            <h2>
                {title}
            </h2>
            <p>{description}</p>
            <div className='source_publish'>
            <p>{source.name}</p>
            <p>{new Date(article.publishedAt).toDateString()}</p>
            </div>
        </div>
        </div>
    );
}

export default Article;