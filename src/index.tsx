import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import { Views } from "./types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App view={Views.Home}></App>,
  },
  {
    path: "/podcast/:id",
    element: <App view={Views.Podcast}></App>,
  },
  {
    path: "/podcast/:podcastid/episode/:episodeid",
    element: <App view={Views.Episode}></App>,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
