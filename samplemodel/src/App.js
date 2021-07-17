import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import Main from './components/Main';
import Home from './components/pages/Home';
function App() {
  return (
    <div className="App">
         <Router>
              <NavBar></NavBar>
              <Switch>
                <Route path='/' exact component={Home}></Route>
              </Switch>
         </Router>
    </div>
  );
}

export default App;
