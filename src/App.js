
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Routes
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
    <Navbar/>
    <Switch>
          <Route exact path="/home"><News key = "General" pagesize={15} country = "in" category="General"/></Route>
          <Route exact path="/"><News key = "General1" pagesize={15} country = "in" category="General"/></Route>
          <Route exact path="/sports"><News key = "Sports" pagesize={15} country = "in" category="Sports"/></Route>
          <Route exact path="/entertainment"><News key = "Entertainment" pagesize={15} country = "in" category="Entertainment"/></Route>
          <Route exact path="/science"><News key = "Science"  pagesize={15} country = "in" category="Science"/></Route>
          <Route exact path="/business"><News key = "Business" pagesize={15} country = "in" category="Business"/></Route>
          
        </Switch>
    </Router>
  </div>
  );
}

export default App;

<link to=""> </link>