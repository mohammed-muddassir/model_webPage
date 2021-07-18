import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import Main from './components/Main';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';
import AboutUS from './components/pages/Aboutus';
function App() {
  return (
    <div className="App">
         <Router>
              <NavBar></NavBar>
              <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/products' exact component={Products}></Route>
                <Route path='/services' exact component={Services}></Route>
                <Route path='/sign-up' exact component={Signup}></Route>
                <Route path='/about-us' exact component={AboutUS}></Route>
              </Switch>
         </Router>
    </div>
  );
}

export default App;
