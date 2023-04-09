import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'


export class News extends Component {

 
    
    constructor(props){
        super(props);
        this.state = {
            articles: [],
           loading: false,
           page : 1

        }
        document.title = `${this.props.category} - AtoZ News`;
           
    }

    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8dbee9fdcc7345ad813e250cc9e8db55&page=1&pagesize=${this.props.pagesize}`
      let data = await fetch(url); //fetch();
      let parsedData = await data.json()

      this.setState({articles: parsedData.articles, totalResult : parsedData.totalResult})
    }

    handlePrevious = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8dbee9fdcc7345ad813e250cc9e8db55&page=${this.state.page - 1 }&pagesize=${this.props.pagesize}`
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page : this.state.page - 1,
        articles : parsedData.articles
      })
    }

    handleNext = async ()=>{
      if(this.state.page + 1>Math.ceil(this.state.totalResult/this.props.pagesize)){

      }
      else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8dbee9fdcc7345ad813e250cc9e8db55&page=${this.state.page + 1 }&pagesize=${this.props.pagesize}`
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page : this.state.page + 1,
        articles : parsedData.articles
      })
    }  

    }

  render() {
    
    return (
      <>
        <div className="container my-4">
          <h1 className="text-centre" style={{marginTop : "90px"}}>Top Headlines - {this.props.category}</h1>
          <div className="row">
            
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:" "} description={element.description?element.description : " "} imageUrl={element.urlToImage} url={element.url}/>
              </div>
            }

            )

            }
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&laquo; Previous</button>
            <button disabled= {this.state.page + 1>Math.ceil(this.state.totalResult/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &raquo;</button>
            </div>
          </div>
        </div>
        <div></div>
      </>
    );
  }
}
News.defaultProps = {
  country : "in",
  pagesize : 9,
  category : "genral"
}

News.propTypes = {
  country : PropTypes.string,
  pagesize : PropTypes.number,
  category : PropTypes.string

}
export default News;

