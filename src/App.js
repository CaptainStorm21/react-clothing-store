import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

//router
import { Switch, Route } from 'react-router-dom';

const HatsPage =  () => (
  <div>
    <h1>HATS</h1>
  </div>

)


function App() {
  return (
    <div className="App">
      {/* //exact will render only that component
       <Route exact path='/' component = { HomePage }/>
      //if you set exact = "false it will render homepage and 
      //the current component together" */}
      <Switch>
        <Route exact path='/' component = { HomePage }/>  
        <Route  path='/hats' component = { HatsPage }/>
      </Switch>

    </div>
  );
}

export default App;
