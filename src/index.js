import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.scss';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/user",
    element: <User/>,
  },
]);
const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>);


