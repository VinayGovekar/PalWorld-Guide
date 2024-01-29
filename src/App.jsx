import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PalDex from './components/PalDex'
import Layout from './components/Shared/Layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PalBreed from './components/PalBreed'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "paldex",
          element: <PalDex />,
        },
        {
          path: "palbreed",
          element: <PalBreed />,
        },
      ],
    }
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
