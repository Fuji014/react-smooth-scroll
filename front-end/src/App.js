import "./App.css";

// components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
