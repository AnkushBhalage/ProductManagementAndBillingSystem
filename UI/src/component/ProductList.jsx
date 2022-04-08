import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import Navbarrr from "./Navbarrr";
import service from "./service";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const init = () => {
    service
      .getAllProducts()
      .then((response) => {
        console.log("Printing Products data", response.data);
        setProducts(response.data);
        console.log("product list",products);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);
  const handleDelete = (id) => {
    console.log("printing id", id);
    service
      .removeProduct(id)
      .then((response) => {
        console.log("Product deleted succeddfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };
  return (
    <div className="container">
      <ToastContainer />
      <Container>
        <Row>
          <Col md={3}>
            <Navbarrr />
          </Col>
          <Col md={9}>
            <h3 className="text-center">List of Products</h3>
            <hr />
            <div>
              <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>Product Name</th>
                    <th>Rate</th>
                    <th>Quantity</th>
                    <th>Vendor</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td style={{ color: "white" }}>{product.name}</td>
                      <td style={{ color: "white" }}>{product.rate}</td>
                      <td style={{ color: "white" }}>{product.quantity}</td>
                      <td style={{ color: "white" }}>{product.vendor.name}</td>
                      <td>
                        <Link
                          className="btn btn-info"
                          to={`/customers/edit/${product.id}`}
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-danger ml-2"
                          onClick={() => {
                            handleDelete(product.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
