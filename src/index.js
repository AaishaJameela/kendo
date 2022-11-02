import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>
);
