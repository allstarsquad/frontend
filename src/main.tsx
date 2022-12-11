import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import ClientRegister from "./pages/Client/Register";
import Home from "./pages/Home";
import "./index.css";
import Grid from "@mui/material/Grid";
import Metamask from "./pages/Login";
import Ethers from "./components/Contract";
import Dashboard from "./pages/Dashboard";
import UnionProperty from "./pages/UnionProperty/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/client_register",
    element: <ClientRegister />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/union_property",
    element: <UnionProperty />
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLInputElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);


//empower humble wool nothing recall century gas noble person loud ensure action