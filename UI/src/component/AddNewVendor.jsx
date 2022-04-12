import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Col,Row,Container } from "reactstrap";
import Navbarrr from "./Navbarrr";
import service from "./Service";
function AddNewVendor() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [firmName, setFirmName] = useState("");
  const [mobile, setMobile] = useState("");

  const { id } = useParams();
  const history = useHistory();
  const cancelRequest = () => {
    history.push("/AddNewVendor");
  };
  const addNewVendor = (e) => {
    e.preventDefault();
    const vendor = { name, address, firmName, mobile ,id};
    if (id) {
      service
        .updateVendor(vendor)
        .then((response) => {
          console.log("vendor data updated successfully", response.data);
          history.push("/VendorsList");
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    } else {
      service
        .createVendor(vendor)
        .then((response) => {
          console.log("vendor data updated successfully", response.data);
           history.push("/Vendorlist");
          history.push("/AddNewVendor");
        })
        .catch((error) => {
          console.log("error occured", error);
        });
    }
  };
  useEffect(() => {
    if (id) {
      service
        .getVendor(id)
        .then((customer) => {
          setName(customer.data.name);
          setAddress(customer.data.address);
          setFirmName(customer.data.firmName);
          setMobile(customer.data.mobile);
        })
        .catch((error) => {
          console.log("error occured in useEffect", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <ToastContainer/>
      <Container>
        <Row>
          <Col md={3}>
          <Navbarrr/>
          </Col>
          <Col md={9}>
      <div className="app-wrapper">
        <div>
          <h2 className="text-center">Add New Vendor</h2>
        </div>
        <form
          style={{ width: "550px", textAlign: "center", marginLeft: "150px" }}
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
              type="text"
              className="form-control col-12"
              placeholder="Enter Firm Name"
              value={firmName}
              onChange={(e) => setFirmName(e.target.value)}
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
              onClick={(e) => addNewVendor(e)}
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

export default AddNewVendor;
