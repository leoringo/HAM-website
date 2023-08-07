import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../src/App";
import HomePage from "../views/HomePage";
import ProductPage from "../views/ProductPage";
import ProductDetail from "../views/ProductDetail";


export default createBrowserRouter([
  {
    element: <App />,
    children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/products',
      element: <ProductPage />
    },
    {
      path: '/products/:productId',
      element: <ProductDetail />
    }
    ]
  }
]);