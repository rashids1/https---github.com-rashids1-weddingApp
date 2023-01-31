import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SuccessSubmit from "./pages/SuccessSubmit";
import Form from "./pages/form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Thankyou/:answer",
    element: <SuccessSubmit />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
