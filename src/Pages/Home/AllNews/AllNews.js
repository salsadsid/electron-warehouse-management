import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Login/Loading/Loading';
import News from '../News/News';
// import './AllNews.css'
const AllNews = () => {
    
    const { data: news, isLoading } = useQuery('news', () => fetch(`https://electron.onrender.com/news`).then(res => res.json(),{retry: 5})
    )
    console.log(news)
    if (isLoading || !news[0]?.articles?.length) {
        return <Loading></Loading>
    }
    return (
        <div className='container my-4'>
            <h1 className='text-center my-4'style={{ fontFamily: "'Gugi', monospace" }}>Top News</h1>
            <div className="row g-2 g-lg-2">
                {
                    news[0]?.articles?.map(singlenews => <News
                        
                        singlenews={singlenews}
                    ></News>)
                }
            </div>
        </div >
    );
};

export default AllNews;