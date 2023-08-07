import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rows from "./ProductRows";
import { fetchCategories, fetchProducts } from "../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function TableProduct() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { products } = useSelector((state) => {
    return state.products;
  });
  
  const [isLoading, setIsLoading] = useState(true)

  function navigateAdd() {
    dispatch(fetchCategories())
      .then((result) => {
        navigate('/add')
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if(isLoading){
      if(!products.length){
        dispatch(fetchProducts())
              .then((result) => {
                setIsLoading(false)
              }).catch((err) => {
                console.log(err);
              });
      }
    }
  }, [products]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="" />
      </div>
    )
  }

  return (
    <div>
      <div className="d-flex justify-content-center mt-2">
        <h1>Product Table</h1>
      </div>

      <div className="mx-5">
        <div className="d-flex justify-content-end mb-3 me-3">
          <button className="btn btn-primary" onClick={navigateAdd}>+ Product</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Slug</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Detail</th>
              <th scope="col">Category</th>
              <th scope="col">Author</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e, i) => (
              <Rows key={e.id} product={e} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
