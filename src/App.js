import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import AdminLogin from './components/pages/AdminLogin';
import ViewPastData from './components/pages/ViewPastData';
import About from './components/pages/About';
import ViewUsers from './components/pages/ViewUsers';
import FAQ_1 from './components/pages/FAQ_1';
import FAQ_2 from './components/pages/FAQ_2';
import Answer from './components/pages/Answer';
import calc from './components/pages/calc';
function App() {
  localStorage.setItem("city","IIITA");
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={calc} />
          <Route path='/ViewPastData' component={ViewPastData} />
          <Route path='/FAQ_1' component={FAQ_1} />
          <Route path='/FAQ_2' component={FAQ_2} />
          <Route path='/AdminLogin' component={AdminLogin} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/About' component={About} />
          <Route path='/ViewUsers' component={ViewUsers} />
          <Route path='/Answer' component={Answer} />
          <Route path='/calc' component={calc} />
          

        </Switch>
      </Router>
    </>
  );
}

export default App;