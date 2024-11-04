import { useState } from "react";
import "./App.css";
import SideBar from "./Pages/SideBar";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./Components/Layout/LayOut";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <div>hello world!</div>
            </ProtectedRoute>
          ),
        },
        {
          path: "/signup",
          element: (
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          ),
        },
        {
          path: "/login",
          element: (
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
