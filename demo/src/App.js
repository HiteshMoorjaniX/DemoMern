import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appbar from './Appbar';
import SignIn from './SignIn';


function App() {
  return (
    <div >
      <Router>
        <div className="App">
          <Appbar />
        {/* <Header name="Hitesh" age="3434" /> */}
          <Switch >
          
          <Route exact path='/' component={SignIn} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/footer' component={Footer} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
