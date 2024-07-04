import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AddUser from "./components/AddUser.jsx";
import AllUserData from "./components/AllUserData.jsx";
import ShowUserData from "./components/ShowUserData.jsx";
import UpdateUserData from "./components/UpdateUserData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllUserData />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/update-user/:id",
        element: <UpdateUserData />,
      },
      {
        path: "/Show-userData/:id",
        element: <ShowUserData />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
