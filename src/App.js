import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
const url = "https://api.tvmaze.com/search/shows?q=all";

function App() {
  const [data, setData] = useState([]);
  // console.log(data);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const result = await resp.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home data={data} />
        </Route>
        <Route path='/movie/:id'>
          <MovieInfo data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
