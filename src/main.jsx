import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "./Books";
import Home from "./Home";
import Header from "./components/Header";
import About from "./components/About";
import BookDetails from "./components/BookDetails";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "books",
        element: <Books></Books>,
        loader:()=>fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: "book/:id",
        element: <BookDetails></BookDetails>,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: "header",
        element: <Header></Header>,
      },
      {
        path:'about',
        element:<About></About>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
