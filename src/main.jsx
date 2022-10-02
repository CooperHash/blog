import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from '@/router/index'
import 'virtual:windi.css'
import store from '@/store/configStore'
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'
import NavList from './components/layout/nav/NavList'
import Test from './views/test'
import Article from './views/article/Article'
import App from './App'
const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <RouterProvider router={router}>
        <PersistGate loading={null} persistor={persistor}>
        </PersistGate>
      </RouterProvider>
    </Provider> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>

  </React.StrictMode>
)
