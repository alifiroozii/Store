import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteLayout from './components/SiteLayout';


function App() {
  return (
    <div class="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <SiteLayout Component={Main} />
          </Route>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
