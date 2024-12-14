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
import Profile from "./Pages/Profile/Index";
import ForgetPassword from "./Pages/Forget Password";
import ResetPassowrd from "./Pages/Reset Passowrd";
import UserContextProvider from "./Store/UserStore";
import EditProfile from "./Features/Profile/EditProfile";
import { themeChange } from "theme-change";
import { jwtDecode } from "jwt-decode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Google_Auth from "./Features/Auth/Google_Auth";

export const router = createBrowserRouter([
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
    path: "auth/google",
    element: (
      <PublicRoute>
        <Google_Auth />
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
  {
    path: "*",
    element: (
      <div>
        <h1>404 Not Found</h1>
      </div>
    ),
  },
]);
function App() {
const queryClient = new QueryClient();

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
