import React from "react";
import "./App.css";
import { Route, Switch, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";

function App() {
  return (
      <div className="App">
        <ul style={{listStyleType: "none", marginTop: "50px", fontSize: "32px"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={
              {
                pathname: "/about",
                state: {
                  from: "root"
                }
              }
              }>About</Link>
          </li>
          <li>
            <Link to="/user/Alexa/Slomski">User</Link>
          </li>
        </ul>
        <div>
         <Switch>
           <Route exact path="/">
             <Home />
           </Route>
           <Route exact path="/about">
             <About />
           </Route>  
           <Route exact path="/user/:firstname/:lastname">
             <User />
           </Route>  
         </Switch>
        </div>
      </div>

  );
}

export default App;