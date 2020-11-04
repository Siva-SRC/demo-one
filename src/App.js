import './App.css';
import Demo from './Demo'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Love from './Love';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/love">
            <Love/>
          </Route>
          <Route path="/">
            <Demo/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
