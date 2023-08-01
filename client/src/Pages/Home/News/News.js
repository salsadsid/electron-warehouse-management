import React from 'react';
// import './News.css'
const News = ({singlenews}) => {
   
    console.log(singlenews)
    const {description,urlToImage,source,title,publishedAt}=singlenews
    return (
        <div className=' col-lg-6'>
            <div class="card mb-3  mx-auto" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={urlToImage} style={{width:"100%",height:"100%",objectFit:"cover"}} class=" rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title fs-6">{title}</h5>
        <p class="card-text">{description?.slice(0,150) +"..."}</p>
        <p class="card-text"><small class="text-muted">Source: {source.name} Time: {publishedAt.split("T")[0]}</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default News;