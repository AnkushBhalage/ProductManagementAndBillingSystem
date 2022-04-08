import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Col,Row,Container } from "reactstrap";
import Navbarrr from "./Navbarrr";
import service from "./service";
function VendorsList() {
  const [vendors, setVendors] = useState([]);
  const init = () => {
    service
      .getAllVendors()
      .then((response) => {
        console.log("Printing vendors data", response.data);
        setVendors(response.data);
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
      .removeVendor(id)
      .then((response) => {
        console.log("vendor deleted succeddfully", response.data);
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
          <Navbarrr/>
          </Col>
          <Col md={9}>
            <div className="app-wrapper">
        <h3 className="text-center">List of Vendors</h3>
        </div>
        <hr />
        <div>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Firm Name</th>
                <th>Mobile No.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id}>
                  <td style={{ color: "white" }}>{vendor.name}</td>
                  <td style={{ color: "white" }}>{vendor.address}</td>
                  <td style={{ color: "white" }}>{vendor.firmName}</td>
                  <td style={{ color: "white" }}>{vendor.mobile}</td>
                  <td>
                    <Link
                      className="btn btn-info"
                      to={`/updateVendors/edit/${vendor.id}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => {
                        handleDelete(vendor.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></Col>
        </Row>
      </Container>
    </div>
  );
}

export default VendorsList;
