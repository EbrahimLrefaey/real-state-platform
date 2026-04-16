import React from "react";
import AllCompo from "../components/AllCompo";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { apiValue } from "../Data/AllData";
import { Link } from "react-router-dom";
import { CartProvider } from "react-use-cart";

function AllSingleProduct() {
  const { id } = useParams();
  const data = useContext(apiValue);
  return (
    <CartProvider>
      <AllCompo />
      <div className="container mt-5 pt-5">
        {data.map((item) => {
          return item.id === id ? (
            <div className="row">
              <div className="col-md-6 ">
                <img src={item.images[0]} className="w-100" alt="product" />
              </div>
              <div className="col-md-6 text-center mt-2">
                <h4> Name: {item.title}</h4>
                <h4 className="mt-3"> brand :{item.brand}</h4>
                <h4 className="mt-3"> category :{item.category}</h4>
                <h4 className="mt-3"> stock :{item.stock}</h4>
                <h4 className="mt-3"> rating :{item.rating} of 5</h4>
                <h4 className="mt-3"> Price :${item.price.toFixed(2)}</h4>
                <Link
                  to="/products"
                  className="btn btn-dark d-block w-100 mt-3"
                >
                  Back{" "}
                </Link>
              </div>
            </div>
          ) : null;
        })}
      </div>
      <Footer />
    </CartProvider>
  );
}

export default AllSingleProduct;
