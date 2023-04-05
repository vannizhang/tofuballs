import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";
import Posts from './pages/Posts';
import BlogPost from './pages/Post';
import NotFound from './pages/NotFound';

const root = createRoot(document.getElementById('root'));

const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/blog",
        element: <Posts />,
    },
    {
        path: "/blog/:id",
        element: <BlogPost />,
    },
    {
        path: "/404",
        element: <NotFound />,
    },
]);

root.render(<RouterProvider router={router} />);