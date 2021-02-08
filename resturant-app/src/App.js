import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './component/Home'
import RestaurentCreate from './component/RestaurentCreate'
import RestaurentDetail from './component/RestaurentDetail'
import RestaurentList from './component/RestaurentList'
import RestaurentSearch from './component/RestaurentSearch'
import RestaurentUpdate from './component/RestaurentUpdate'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/detail">Details</Link></li>
          <li><Link to="/update">Update</Link></li>
        </ul>
        <Route path='/list'><RestaurentList/></Route>
        <Route path='/create'><RestaurentCreate/></Route>
        <Route path='/search'><RestaurentSearch/></Route>
        <Route path='/detail'><RestaurentDetail/></Route>
        <Route path='/update'><RestaurentUpdate/></Route>
        <Route exact path='/'><Home/></Route>
      </Router>
    </div>
  );
}

export default App;
