import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, url } = props;
    return (
      <>
        <div className="container my-4">
          <div className="card">
            <img src={!imageUrl? "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="title">{title}</h5>
              <p className="description">{description}</p>
              <a href={url} target = "_blank" className="btn btn-sm btn-dark">
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default NewsItem;
