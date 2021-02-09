import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import RestaurentCreate from './component/RestaurentCreate';
import RestaurentDetail from './component/RestaurentDetail';
import RestaurentList from './component/RestaurentList';
import RestaurentSearch from './component/RestaurentSearch';
import RestaurentUpdate from './component/RestaurentUpdate';
import Login from './component/Login';
import Logout from './component/Logout';
import Protected from './component/Protected';
import NavbarMenu from './component/NavbarMenu';


function App() {
  return (
    <div className="App">
      <Router>
        <Protected exact path="/list" component={RestaurentList}/>
        <Protected exact path="/create" component={RestaurentCreate}/>
        <Protected exact path="/search" component={RestaurentSearch}/>
        <Route path="/detail"><RestaurentDetail /></Route>
        <Route path="/update/:id" render={props=>(<RestaurentUpdate {...props}/>)}></Route>
        <Route path="/logout"><Logout /></Route>
        <Route path="/login" render={props=>(<Login {...props}/>)}></Route>
        <Protected exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
