/* eslint-disable no-useless-constructor */
import { Component } from "react";
import { render } from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";

export class Hats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">Home </Link>
        <h1>IAM IN HATS praveen Page</h1>
      </div>
    );
  }
}

export const Praveen = () => {
  return <div>Iam in pravenns</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/shop/hats">
          <Hats />
        </Route>
        <Route exact path="/praveen">
          <Praveen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
