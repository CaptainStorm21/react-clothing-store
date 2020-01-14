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
      {/* As long as a route gets rendered then it just renders 
          that route it renders nothing else.
          Now if we put the exact back then we will of course render 
          our hats page because this home page with */}
    </div>
  );
}

export default App;
