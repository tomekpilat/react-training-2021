import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Assets from './pages/Assets/Assets';
import Details from './pages/Details/Details';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/assets">Assets</Link>
          <Link to="/details">Details</Link>
        </nav>
      </div>

      <Switch>
        <Route path="/details/:stock?"><Details /></Route>
        <Route path="/assets"><Assets /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
