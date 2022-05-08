import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './AllNews.css'
const AllNews = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className='container my-4'>
            <h1 className='text-center my-4'>Top News</h1>
            <div className="news-container">
                {
                    news.map(n => <News
                        key={n._id}
                        n={n}
                    ></News>)
                }
            </div>
        </div >
    );
};

export default AllNews;