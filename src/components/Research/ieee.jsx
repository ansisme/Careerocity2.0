import React, { useState } from "react";
import axios from "axios";

function ArticleSearch() {
  const [query, setQuery] = useState("");
  const [maxResults, setMaxResults] = useState(10);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/api/generateArticles", {
        query,
        maxResults,
      });
      setArticles(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="article-search">
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for articles on IEEE Xplore"
            className="text-black"
          />
          <button type="submit">Search</button>
        </div>
        <div className="input-group">
          <label htmlFor="maxResults">Max Results:</label>
          <input
            type="number"
            id="maxResults"
            value={maxResults}
            onChange={(e) => setMaxResults(e.target.value)}
            min={1}
            max={100}
            className="text-black"
          />
        </div>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.doi}>
              <h3>{article.title}</h3>
              <p>{article.abstract}</p>
              <p>
                Authors:{" "}
                {article.authors.map((author) => author.full_name).join(", ")}
              </p>
              <p>DOI: {article.doi}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArticleSearch;
