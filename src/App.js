import React from "react";
import SearchBar from "./containers/SearchBar";

const App = () => {
  return (
    <div
      style={{
        padding: "3%",
        margin: "0 auto",
        overflowX: "hidden",
        width: "85%"
      }}
      className="container-main"
    >
      <SearchBar />
    </div>
  );
};

export default App;
