import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import router from '@/router/index'
import 'virtual:windi.css'
import store from '@/store/configStore'
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'
const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <PersistGate loading={null} persistor={persistor} />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
)
