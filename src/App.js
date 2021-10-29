import "./App.css";
import { Hallologo } from "./Components/Hallologo";
import { Chatapp } from "./Components/Chatapp";
import { Profile } from "./Components/Profile";
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
          <Route path="/home">
            <Mainpage />
          </Route>

          <Route path="/chat">
            <Chatapp />
          </Route>

          <Route path="/profile">
            <Profile/>
          </Route>


          <Route path="">
            <Hallologo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
