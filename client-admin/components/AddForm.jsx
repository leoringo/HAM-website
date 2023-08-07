import { useEffect, useState } from "react";
import {
  addProduct,
  editProduct,
  fetchCategories,
  getProductById,
} from "../store/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function AddForm() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();

  // const { categories } = useSelector((state) => {
  //   return state.categories;
  // });

  const categories = useSelector((state) => state.categories.categories)

  const { productDetail } = useSelector((state) => {
    return state.products;
  });


  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    mainImg: "",
    categoryId: 0,
  });

  const [images, setImages] = useState([
    {
      imgUrl: "",
    },
  ]);

  const productHandler = (event) => {
    setProduct((product) => {
      return { ...product, [event.target.name]: event.target.value };
    });
  };

  function addImgHandler(e) {
    e.preventDefault();
    const newImg = {
      imgUrl: "",
    };
    setImages([...images, newImg]);
  }

  function imgHandler(index, event) {
    let newImage = [...images];
    newImage[index] = {
      ...newImage[index],
      [event.target.name]: event.target.value,
    };
    setImages(newImage);
  }

  function formHandler(e) {
    e.preventDefault();
    if (productId) {
      product.images = images;
      dispatch(editProduct(productId, product))
        .then(() => {
          navigate("/products");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      product.images = images;
      dispatch(addProduct(product))
        .then(() => {
          navigate("/products");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // useEffect(() => {
  //   if (isLoading) {
  //     dispatch(fetchCategories())
  //       .then(() => {
  //         if (productId) {
  //           dispatch(getProductById(productId))
  //             .then((result) => {
  //               setIsLoading(false);
  //             })
  //             .catch((err) => {
  //               console.log(err);
  //             });
  //         } else {
  //           setIsLoading(false);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(first);
  //       });
  //   } else {
  //     setProduct(productDetail);
  //     if (productId) {
  //       setImages(productDetail.Images);
  //       console.log(productDetail.Images);
  //     }
  //   }
  // }, [productDetail]);

  // function dispatchFetch() {
  //   dispatch(fetchCategories())
  //       .then((result) => {
  //         setIsLoading(false)
  //       }).catch((err) => {
  //         console.log(err);
  //       });
  // }

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchCategories())
      if (productId) {
        dispatch(getProductById(productId))
      }
    }
  }, [])

  useEffect(() => {
    if (isLoading) {
      if (categories.length !== 0 && !productId) {
        setProduct({ ...product, categoryId: categories[0].id })
      }
      // if (!productId) {
      //   setIsLoading(false)
      // }
    }
  }, [categories])


  useEffect(() => {
    if (isLoading) {
      if (productDetail) {
        setProduct({ ...product, ...productDetail })
        setIsLoading(false)
      }
    }
  }, [productDetail])

  if (isLoading) {
    return (
      <>
        <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="" />
      </>
    )
  }
  return (
    <div className="d-flex justify-content-center mt-3">
      <form onSubmit={formHandler}>
        <label htmlFor="">Name :</label> <br />
        <input
          type="text"
          onChange={productHandler}
          value={product.name}
          name="name"
        />{" "}
        <br /> <br />
        <label htmlFor="">Description :</label>
        <br />
        <input
          type="text"
          onChange={productHandler}
          value={product.description}
          name="description"
        />
        <br />
        <br />
        <label htmlFor="">Price :</label>
        <br />
        <input
          type="number"
          onChange={productHandler}
          value={product.price}
          name="price"
        />
        <br />
        <br />
        <label htmlFor="">MainImg :</label>
        <br />
        <input
          type="text"
          onChange={productHandler}
          value={product.mainImg}
          name="mainImg"
        />
        <br />
        <br />
        <label htmlFor="">Category :</label>
        <br />
        <select
          // defaultValue={categories[0].id}
          value={product.categoryId}
          onChange={productHandler}
          name="categoryId"
          id=""
        >
          {categories.map((e) => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
        {!productId && images.map((e, i) => (
          <div key={i} className="my-2">
            <label htmlFor="">Image {i + 1} </label>
            <br />
            <input
              type="text"
              onChange={(event) => imgHandler(i, event)}
              value={images[i].imgUrl}
              name="imgUrl"
            />
          </div>
        ))}
        {!productId && <button className="btn btn-outline-primary" onClick={addImgHandler}>add image</button>}
        <br />
        <br />
        <button type="submit" className="btn btn-primary">SUBMIT</button>
      </form>
    </div>
  );
}
