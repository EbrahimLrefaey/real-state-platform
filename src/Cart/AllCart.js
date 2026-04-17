import React from "react";
import AllCompo from "../components/AllCompo";
import Footer from "../components/Footer";
import { CartProvider } from "react-use-cart";
import { useCart } from "react-use-cart";

function Cart() {
  const {
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    totalitems,
    isEmpty,
  } = useCart();
  if (isEmpty) {
    return (
      <div className="text-center">
        <img
          src="/assets/images/Empty-cart.png"
          style={{ width: "350px" }}
          alt={items.title}
        />
        <h1 className="text-center mt-5">Your Cart is Empty . . .</h1>;
      </div>
    );
  }
  return (
    <div>
      <main className="page">
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading">
              <h2>Shopping Cart</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="items">
                    {items.map((item) => {
                      return (
                        <div className="product">
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                className="img-fluid mx-auto d-block image"
                                src={item.images?.[0]}
                                alt={item.title}
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="info">
                                <div className="row">
                                  <div className="col-md-5 product-name">
                                    <div className="product-name">
                                      <h6 href="#">{item.title}</h6>
                                    </div>
                                  </div>
                                  <div className="col-md-4 quantity">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <h6> {item.quantity} </h6>
                                    <button
                                      className="btn btn-warning"
                                      onClick={() =>
                                        updateItemQuantity(
                                          item.id,
                                          item.quantity - 1,
                                        )
                                      }
                                    >
                                      -
                                    </button>
                                    <button
                                      className="btn btn-success mx-2"
                                      onClick={() =>
                                        updateItemQuantity(
                                          item.id,
                                          item.quantity + 1,
                                        )
                                      }
                                    >
                                      +
                                    </button>
                                    <button
                                      className="btn btn-danger "
                                      onClick={() => removeItem(item.id)}
                                    >
                                      &times;
                                    </button>
                                  </div>
                                  <div className="col-md-3 price">
                                    <span>
                                      ${Math.ceil(item.price * item.quantity)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="col-md-12 col-lg-4">
                  <div className="summary">
                    <h3>Summary</h3>
                    <div className="summary-item">
                      <span className="text">Subtotal</span>
                      <span className="price">${Math.ceil(cartTotal)}</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Quantity</span>
                      <span className="price">{totalitems}</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Shipping</span>
                      <span className="price">$30</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Total</span>
                      <span className="price">
                        ${Math.ceil(cartTotal + 30)}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AllCart() {
  return (
    <CartProvider>
      <AllCompo />
      <Cart />
      <Footer />
    </CartProvider>
  );
}

export default AllCart;
