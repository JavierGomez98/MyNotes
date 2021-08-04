import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact parth='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
