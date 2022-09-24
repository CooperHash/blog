import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from '@/router/index'
import 'virtual:windi.css'
import store from '@/store/configStore'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} store={store}/>
  </React.StrictMode>
)
