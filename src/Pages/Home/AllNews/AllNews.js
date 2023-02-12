import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Login/Loading/Loading';
import News from '../News/News';
import './AllNews.css'
const AllNews = () => {
    
    const { data: news, isLoading } = useQuery('news', () => fetch(`https://electron.onrender.com/news`).then(res => res.json(),{retry: 5})
    )
    if (isLoading) {
        return <Loading></Loading>
    }
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