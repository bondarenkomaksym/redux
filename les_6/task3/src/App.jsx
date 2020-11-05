import React from "react";
import { Provider } from "react-redux";
import Weather from "./Weather";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  )
}

export default App;