import React from "react";
import ReactDOM from "react-dom";
import App from "./js/components/App";
import AppContext from "./js/components/Context/Contex";
import Provider from "./js/components/Context/Provider";

ReactDOM.render(
  <Provider>
    <AppContext.Consumer>{store => <App {...store} />}</AppContext.Consumer>
  </Provider>,

  document.getElementById("app")
);
