import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { browserHistory } from "./utils/history";
import LayoutWeb from "./pages/Layout";
import { WebRoutes } from "./Routes";
import Help from "./pages/Help";
import "./App.css";
import "./sass/app.scss";
class App extends Component {

  renderWebLayout = () => {
    let html = null;
    html = WebRoutes.map(route => {
      return (
        <LayoutWeb
          name={route.name}
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      );
    });
    return html;
  };
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Switch>
            {this.renderWebLayout()}
            <Route exact path="" component={Help} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;