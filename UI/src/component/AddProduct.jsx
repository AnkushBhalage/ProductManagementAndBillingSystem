import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import service from "./service";
import Navbarrr from "./Navbarrr";
function AddProduct() {
  const [name, setName] = useState("");
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [vendors, setVendors] = useState([]);
  const [vendor,setVendor]=useState([]);
  const { id } = useParams();
  const history = useHistory();
  const cancelRequest = () => {
    history.push("/CustomerList");
  };
  const addNewProduct = (e) => {
    e.preventDefault();
    if (name.length == 0) {
      alert("Enter Product name");

      history.push("/AddProduct");
    } else if (rate.length == 0) { alert("Enter Rate of product"); history.push("/AddProduct"); }
    else if (quantity.length == 0) { alert("Enter quantity"); history.push("/AddProduct") }

    else {
      const product={name};
      const purchaseorder = { product, rate, quantity,vendor};
      console.log("purchaseorder",purchaseorder);
      if (id) {
        service
          .updateProduct(purchaseorder)
          .then((response) => {
            console.log(vendor);
            console.log("Product data updated successfully", response.data);
            history.push("/ProductList");

          })
          .catch((error) => {
            console.log("something went wrong", error);
          });
      } else {
        service
          .addPurchaseOrder(purchaseorder)
          .then((response) => {
            console.log("product data updated successfully", response.data);
            history.push("/Purchaseorders");
           // history.push("/AddProduct");
          })
          .catch((error) => {
            console.log("error occured", error);
          });
      }
    }
  };
  useEffect(() => {
    service
      .getAllVendors()
      .then((response) => {
        setVendors (response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
    if (id) {
      service
        .getProduct(id)
        .then((product) => {
          setName(product.data.name);
          setRate(product.data.address);
          setQuantity(product.data.quantity);
        })
        .catch((error) => {
          console.log("error occured in useEffect", error);
        });
    }
  }, []);
  const onddlchange = (e) => {
    
    service.getVendorByName(e.target.value).then((response) => {
      setVendor(response.data);
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
            <div className="app-wrapper">
              <div>
                <h2 className="text-center">Add New Product</h2>
              </div>
              <form
                style={{
                  width: "550px",
                  textAlign: "center",
                  marginLeft: "150px",
                }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control col-12"
                    placeholder="Enter Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control col-12"
                    placeholder="Enter Rate of Product"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control col-12"
                    placeholder="Enter Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <select className="form-control" onChange={onddlchange}>
                    <option value="0">Select Vendor</option>
                    {
                      vendors.map((vendor) => (
                        <option key={vendor.id} value={vendor.name}>{vendor.name}</option>
                      ))
                    }
                  </select>
                </div>
                
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => addNewProduct(e)}
                  >
                    Save
                  </button>{" "}
                  <button className="btn btn-danger" onClick={cancelRequest}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddProduct;
