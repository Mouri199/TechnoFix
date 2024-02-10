import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Component/Home/Home';
import CardView from './Component/Home/CardView';
import MainBody from './Component/MAinBody/MainBody';
import CardDetails from './Component/Home/CardDetails';
import { base_URL } from './Component/URL/Base_URL.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody></MainBody>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/cardview',
        element: <CardView></CardView>
      },
      {
        path: '/cardDetails/:id',
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`${base_URL}/userDetail/${params?.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
