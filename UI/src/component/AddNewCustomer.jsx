import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import service from "./service";
import Navbarrr from "./Navbarrr";
function AddNewCustomer() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const { id } = useParams();
  const history = useHistory();
  const cancelRequest = () => {
    history.push("/CustomerList");
  };
  const addNewCustomer = (e) => {
    e.preventDefault();
    if (name.length == 0) {
      alert("Enter Customer name");
      history.push("/AddNewCustomer");
    } else if (address.length === 0) {alert("Enter customer address"); history.push("/AddNewCustomer");}
    else if (mobile.length === 0){ alert("Enter Customer mobile no");history.push("/AddNewCustomer")}
    else if (mobile.length !== 10) {alert("Mobile number is not valid");history.push("/AddNewCustomer")}
    else {
      const customer = { name, address, mobile };
      if (id) {
        service
          .update(customer)
          .then((response) => {
            console.log("cusomer data updated successfully", response.data);

            history.push("/CustomerList");
          })
          .catch((error) => {
            console.log("something went wrong", error);
          });
      } else {
        service
          .create(customer)
          .then((response) => {
            console.log("cusomer data updated successfully", response.data);
            alert("Customer Added Successfully")
            history.push("/CustomerList");
          })
          .catch((error) => {
            console.log("error occured", error);
          });
      }
    }
  };
  useEffect(() => {
    if (id) {
      service
        .get(id)
        .then((customer) => {
          setName(customer.data.name);
          setAddress(customer.data.address);
          setMobile(customer.data.mobile);
        })
        .catch((error) => {
          console.log("error occured in useEffect", error);
        });
    }
  }, []);

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
                <h2 className="text-center">Add New Customer</h2>
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
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control col-12"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control col-12"
                    placeholder="Enter Mobile no"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <br />
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => addNewCustomer(e)}
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

export default AddNewCustomer;
