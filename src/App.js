import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import About from "./components/About/About";

function App() {
  const [user, setUser] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main user={user} setUser={setUser}></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login user={user} setUser={setUser}></Login>,
        },
        {
          path: "/registration",
          element: <Registration user={user} setUser={setUser}></Registration>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
