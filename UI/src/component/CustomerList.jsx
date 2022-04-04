import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import service from "./service";
import { Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import Navbarrr from "./Navbarrr";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const init = () => {
    service
      .getAll()
      .then((response) => {
        console.log("Printing customers data", response.data);
        setCustomers(response.data);
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
      .remove(id)
      .then((response) => {
        console.log("Customer deleted succeddfully", response.data);
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
            <div className="app-wrapper">
              <div>
                <h2 className="text-center">List Of Customer</h2>
                
              </div>
              <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Mobile No.</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td style={{ color: "white" }}>{customer.name}</td>
                      <td style={{ color: "white" }}>{customer.address}</td>
                      <td style={{ color: "white" }}>{customer.mobile}</td>
                      <td>
                        <Link
                          className="btn btn-info"
                          to={`/customer/edit/${customer.id}`}
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-danger ml-2"
                          onClick={() => {
                            handleDelete(customer.id);
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

export default CustomerList;
