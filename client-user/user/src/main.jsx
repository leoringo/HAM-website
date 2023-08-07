import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import router from '../router'
import store from '../store/index.js'
import { Provider } from 'react-redux'


// import './index.css'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {

  RouterProvider,
} from "react-router-dom";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
