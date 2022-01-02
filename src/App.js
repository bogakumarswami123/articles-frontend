import "./App.css";
import React from "react";
import { getArticlesList } from "./Services/articles";
import * as moment from "moment";
import RefreshIcon from "./Assets/refresh.png";

import { SearchInput } from "./components/SearchInput";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
      isSearchInProcess: false,
      searchValue: "",
      publishedDate: "2021-11-26"
    };
  }
  handleSearchChange = async value => {
    let trimmedValue = value.trim();
    this.setState({
      isSearchInProcess: true,
      searchValue: trimmedValue
    });
    let result = await getArticlesList(trimmedValue, this.state.publishedDate);
    this.setState({
      isSearchInProcess: false
    });
    console.log(result);
    if (result.data.articles) {
      this.setState({
        articleList: result.data.articles
      });
    } else if (result.data.data.articles) {
      this.setState({
        articleList: result.data.data.articles
      });
    }
  };
  openLink = link => {
    window.open(link, "_blank");
  };
  componentDidMount() {
    this.handleSearchChange("tesla");
  }

  handleDateChange = value => {
    this.setState(
      {
        publishedDate: value
      },
      () => {
        let searchValue = this.state.searchValue
          ? this.state.searchValue
          : "tesla";
        this.handleSearchChange(searchValue);
      }
    );
  };
  render() {
    return (
      <div className="app-container">
        <div className="heading">Articles</div>
        <div className="App">
          <div className="d-flex">
            <SearchInput
              onChange={event => this.handleSearchChange(event.target.value)}
            />
            <input
              type="date"
              placeholder="From Published Date"
              onChange={event => this.handleDateChange(event.target.value)}
            />
            <button
              onClick={() => this.handleSearchChange(this.state.searchValue)}
              className="refresh-btn"
            >
              <img src={RefreshIcon} alt="" />
              <span>Refresh</span>
            </button>
          </div>
          <div className="articles-list-container">
            {!this.state.isSearchInProcess &&
              this.state.articleList &&
              this.state.articleList.map((article, index) => {
                return (
                  <div
                    className="articles-list-item"
                    key={index}
                    onClick={() => this.openLink(article.url)}
                  >
                    <div className="d-flex">
                      <img src={article.urlToImage} alt="" />
                      <div>
                        <h4>{article.title}</h4>
                        <h6>Author: {article.author}</h6>
                        <h6>
                          Published Date:{" "}
                          {moment(article.publishedAt).format("DD MMMM, YYYY")}
                        </h6>
                        <p>
                          <strong>Description:</strong>
                          {article.description}
                        </p>
                        <p>{article.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {this.state.articleList.length === 0 &&
            !this.state.isSearchInProcess && (
              <div className="no-data-text">No search results found.</div>
            )}
        </div>
      </div>
    );
  }
}

export default App;
