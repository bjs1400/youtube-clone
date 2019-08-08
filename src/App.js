import React from "react";
import SearchBar from "./containers/SearchBar";

const App = () => {
  return (
    <div
      style={{ padding: "5%", margin: "0 auto", overflowX: "hidden" }}
      className="container-main"
    >
      <SearchBar />
    </div>
  );
};

export default App;
