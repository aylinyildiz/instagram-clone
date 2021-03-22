import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import ImageDetail from "./components/ImageDetail/ImageDetail";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/ImageDetail" component={ImageDetail}>
          </Route>

          <Route exact path="/">
          <Dashboard />
          </Route>

        </Switch>
      </Router>


    
    </div>
  );
}

export default App;
