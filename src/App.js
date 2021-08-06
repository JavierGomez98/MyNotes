import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import EditForm from './components/notes/EditForm';
import Favorites from './components/notes/Favorites';
import NoteDetail from './components/notes/NoteDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/note/:id' component={NoteDetail} />
        <Route path='/edit/:id' component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
