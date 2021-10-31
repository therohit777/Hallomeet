import "./App.css";
import { Chatapp } from "./Components/Chatapp";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Mainpage } from "./Components/Mainpage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        

          <Route path="/chat">
            <Chatapp />
          </Route>

          <Route path="">
            <Mainpage />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
