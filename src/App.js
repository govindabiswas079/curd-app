import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import NotFound from './pages/NotFound';
import Adduser from './pages/Adduser';
import Edituser from './pages/Edituser';
import Viewuser from './pages/Viewuser';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/users/add" component={Adduser} />
        <Route exact path="/users/edit/:id" component={Edituser} />
        <Route exact path="/users/:id" component={Viewuser} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;