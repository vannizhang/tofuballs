import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

const root = createRoot(document.getElementById('root'));

const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/blogs",
        element: <Blogs />,
    },
    {
        path: "/blog/:id",
        element: <Blog />,
    },
    {
        path: "/404",
        element: <NotFound />,
    },
]);

root.render(<RouterProvider router={router} />);