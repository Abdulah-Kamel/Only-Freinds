import { useEffect } from "react";
import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./Components/Layout/LayOut";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import Home from "./Pages/Home";
import Notifictions from "./Pages/Notifiction";
import MyProfile from "./Pages/MyProfile";
import Profile from "./Pages/Profile/Index";
import ForgetPassword from "./Pages/Forget Password";
import ResetPassowrd from "./Pages/Reset Passowrd";
import UserContextProvider from "./Store/UserStore";
import EditProfile from "./Components/Profile/EditProfile";
import { themeChange } from 'theme-change'

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
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/Explore",
          element: <section>Explore</section>,
        },
        {
          path: "/notifications",
          element: (
            <ProtectedRoute>
              <Notifictions />
            </ProtectedRoute>
          ),
        },
        {
          path: "/create",
          element: (
            <ProtectedRoute>
              <section>create</section>
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile/me",
          element: (
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile/:id",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile/edit",
          element: (
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          ),
        },
      ],
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
    {
      path: "/forget-password",
      element: (
        <PublicRoute>
          <ForgetPassword />
        </PublicRoute>
      ),
    },
    {
      path: "/reset-password",
      element: (
        <PublicRoute>
          <ResetPassowrd />
        </PublicRoute>
      ),
    },
  ]);
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
