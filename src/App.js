import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1>Star Wars Info - Re-deployment</h1>
      <Navbar onChangePage={setPage} />
      <div className="content">
        {page === "planets" ? (
          <>
            <Planets />
          </>
        ) : (
          <People />
        )}
      </div>
    </div>
  );
}

export default App;
