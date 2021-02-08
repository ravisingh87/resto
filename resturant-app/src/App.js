import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import RestaurentCreate from './component/RestaurentCreate';
import RestaurentDetail from './component/RestaurentDetail';
import RestaurentList from './component/RestaurentList';
import RestaurentSearch from './component/RestaurentSearch';
import RestaurentUpdate from './component/RestaurentUpdate';
import {Navbar, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faHome,faPlus,faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList}/>List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus}/>Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch}/>Search</Link></Nav.Link>
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
        <Route path="/update/:id" render={props=>(<RestaurentUpdate {...props}/>)}>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
