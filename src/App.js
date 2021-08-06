import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import Favorites from './components/notes/Favorites';
import NoteDetail from './components/notes/NoteDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/note/:id' component={NoteDetail} />
        <Route path='/favorites' component={Favorites} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
