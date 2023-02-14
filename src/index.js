import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingIn from "./routes/SingIn";
import ChatRoom from "./routes/ChatRoom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SingIn />,
    errorElement: <div>error!</div>,
  },
  {
    path: "/ChatRoom",
    element: <ChatRoom />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
