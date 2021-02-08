import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import RestaurentCreate from './component/RestaurentCreate';
import RestaurentDetail from './component/RestaurentDetail';
import RestaurentList from './component/RestaurentList';
import RestaurentSearch from './component/RestaurentSearch';
import RestaurentUpdate from './component/RestaurentUpdate';
import {Navbar, Nav} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/detail">Details</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/list">
          <RestaurentList />
        </Route>
        <Route path="/create">
          <RestaurentCreate />
        </Route>
        <Route path="/search">
          <RestaurentSearch />
        </Route>
        <Route path="/detail">
          <RestaurentDetail />
        </Route>
        <Route path="/update">
          <RestaurentUpdate />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
