import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";

import store from "./lib/redux";
import InboxScreen from './components/InboxScreen';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            React Story Book
          </div>
        </header>

        <div className="container">
          <InboxScreen />
        </div>
      </div>
    </Provider>
  );
}

export default App;
