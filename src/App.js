import './App.css';
import Home from "./pages/home/home.page.jsx"
import SeriesHome from "./pages/series/series.page.jsx"
import MoviesHome from "./pages/movies/movies.page.jsx"
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/movies" component={MoviesHome} />
        <Route exact path="/series" component={SeriesHome} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
