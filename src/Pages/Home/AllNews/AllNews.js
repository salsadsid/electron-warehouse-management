import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Login/Loading/Loading';
import News from '../News/News';
// import './AllNews.css'
const AllNews = () => {
    
    const { data: news, isLoading } = useQuery('news', () => fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=deef0aff2e6e45ecae6754841a394650`).then(res => res.json(),{retry: 5})
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container my-4'>
            <h1 className='text-center my-4'>Top News</h1>
            <div className="row g-2 g-lg-2">
                {
                    news.articles.map(singlenews => <News
                        
                        singlenews={singlenews}
                    ></News>)
                }
            </div>
        </div >
    );
};

export default AllNews;