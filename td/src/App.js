import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import {Store} from "./Store";
import MyRouter from "./components/MyRouter"

function App() {
  return (
    <Provider store={Store}>
        <MyRouter/>
    </Provider>
  );
}

export default App;
