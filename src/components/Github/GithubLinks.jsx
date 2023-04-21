import React, { useState } from "react";
import axios from "axios";
import './styles.css';

function GithubSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [numResults, setNumResults] = useState(20); // default to 20 results

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchQuery}&per_page=${numResults}`,
        {
          headers: {
            Authorization: process.env.GITHUB_ACCESS_TOKEN,
          },
        }
      );
      setSearchResults(response.data.items.map((item) => item.html_url));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="github-search flex flex-col items-start">
      <form onSubmit={handleSearch} className="flex items-center mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for repositories on Github"
          className="text-white bg-transparent py-2 px-3 border w-3/4 shadow-gradient-blue rounded-md mr-2"
        />
        <label className="text-black w-1/4">
          
          <input
            type="number"
            min="1"
            max="500"
            value={numResults}
            placeholder="Number"
            onChange={(e) => setNumResults(e.target.value)}
            className="text-white bg-transparent py-2 px-3 border rounded-md ml-2 w-full shadow-gradient-blue"
          />
        </label>
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md ml-2">
          Search
        </button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ol className="list-disc pl-4">
          {searchResults.map((link) => (
            <li key={link}>
              <a href={link} target="_blank" rel="noreferrer" className="text-blue-500 text-left hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default GithubSearch;
