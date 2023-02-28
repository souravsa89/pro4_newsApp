import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import news from "./News.module.css";
// import propTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
// import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [apiChange, setapiChange] = useState("");

  const handleChange = (e) => {
    setapiChange(e.target.value);
    console.log(e.target.value);
    updateNews();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNews();
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?q=${apiChange}&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    // console.log(parsedData)
    // console.log(parsedData.articles)
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  return (
    <div>
      <h1 className={news.cat_headline}>
        Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
        Headlines
      </h1>
      <div className={news.form}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Search articles"
            type="text"
            name="text"
            value={apiChange}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className={news.main_div}>
          <div className={news.container}>
            {articles.map((element) => {
              return (
                <div key={element.url} className={news.column_news}>
                  <NewsItem
                    author={element.author}
                    date={element.publishedAt}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
