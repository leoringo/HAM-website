import { createBrowserRouter, redirect } from "react-router-dom";
import TableProduct from "../components/TableProduct";
import AddForm from "../components/AddForm";
import App from "../src/App";
import HomePage from "../views/HomePage";
import TableCategory from "../components/TableCategories";
import LoginPage from "../views/LoginPage";
import AddCategory from "../components/AddCategory";
import RegisterAdmin from "../views/RegisterAdmin";


export default createBrowserRouter([
  {
    element: <App />,
    loader: async () => {
      let token = localStorage.access_token
      if(!token) {
        return redirect('/login')
      }
      return null
    },
    children: [{
      path: '/add',
      element: <AddForm />
    },
    {
      path: '/edit/:productId',
      element: <AddForm />
    },
    {
      path: '/products',
      element: <TableProduct />
    },
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/categories',
      element: <TableCategory />
    },
    {
      path: '/add/category',
      element: <AddCategory />
    },
    {
      path: '/categoryEdit/:catId',
      element: <AddCategory />
    },
    {
      path: '/register',
      element: <RegisterAdmin />
    }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: async () => {
      let token = localStorage.access_token
      if(token) {
        return redirect("/")
      }
      return null
    }
  }
]);