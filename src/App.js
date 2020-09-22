import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Router, Switch, Route } from "react-router-dom";
import { browserHistory } from "./utils/history";
import LayoutWeb from "./pages/Layout";
import { WebRoutes } from "./Routes";
import NotFound from "./pages/NotFound";
import "./App.css";
import "./sass/app.scss";
import { connect } from "react-redux";
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
    const { layout } = this.props;
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Switch>
            {this.renderWebLayout()}
            <Route exact path="" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;