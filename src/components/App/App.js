// Importing modules
import React from 'react';
import { BrowserRouter } from "react-router-dom";

// Importing components
import routes from "../../routes";
import store from "../../store";

// App component
export default class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
          {routes}
        </BrowserRouter>
      )
  }
};
