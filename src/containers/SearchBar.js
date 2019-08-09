import React, { useState, useEffect } from "react";
import { Input } from "semantic-ui-react";
import Videos from "../containers/Videos";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("potato");
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&key=${API_KEY}`
      )
      .then(res => {
        console.log(res.data.items);
        console.log(res.data);
        setSearchResults(res.data.items);
      })
      .catch(err => console.log(err));
  }, [searchTerm]);

  return (
    <>
      <Input
        className="search-bar"
        focus
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <Videos results={searchResults} />
    </>
  );
};

export default SearchBar;
