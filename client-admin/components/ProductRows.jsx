import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function rows({ product, index }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function editProduct() {
    navigate(`/edit/${product.id}`)
  }
  function deleteHandler() {
    dispatch(deleteProduct(product.id));
  }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.slug}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        <div style={{height: "150px", width: "169px"}}>
        <img src={product.mainImg} style={{width: "100%", height:"100%"}} alt="" />
        </div>
      </td>
      <td >
        {product.Images.map((e, i) => {
          return <img key={i} className="ms-2" src={e.imgUrl} style={{height: "50px"}} />
        })}
      </td>
      <td>{product.Category.name}</td>
      <td>{product.User.username}</td>
      <td>
        <button onClick={editProduct} className="btn btn-warning">EDIT</button>{" "}
        <button onClick={deleteHandler} className="btn btn-danger">
          DELETE
        </button>
      </td>
    </tr>
  );
}
