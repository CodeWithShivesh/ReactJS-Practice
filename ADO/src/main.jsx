import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./Components/Homepage.jsx";
import DbPage from "./Components/DbPage.jsx";
import Question from "./Components/Question.jsx";
import Welcome from "./Components/Welcome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/questions", element: <Question /> },
      { path: "/Homepage", element: <Homepage /> },
      { path: "/db-page", element: <DbPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
