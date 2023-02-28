import React, { useState } from "react";
import Navbar from "./component/Navbar";
import "./App.css";
// import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import News from "./component/News";

function App() {
  const apiKey = "5ceb6a25735646f9a17a0c18a959f822";
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <Navbar />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              country="in"
              pageSize={18}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              country="in"
              pageSize={18}
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              country="in"
              pageSize={18}
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general1"
              country="in"
              pageSize={18}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              country="in"
              pageSize={18}
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              country="in"
              pageSize={18}
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              country="in"
              pageSize={18}
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              country="in"
              pageSize={18}
              category="technology"
            />
          }
        />
      </Routes>

      {/* <News setProgress={setProgress} apiKey={apiKey}   country="us" pageSize={6} category="general"/> */}
    </Router>
  );
}

export default App;
