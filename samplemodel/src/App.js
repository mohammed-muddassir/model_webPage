import './App.css';
import NavBar from './NavBar';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
         <Router>
              <NavBar></NavBar>
              <Switch>
                <Route></Route>
              </Switch>
         </Router>
    </div>
  );
}

export default App;
