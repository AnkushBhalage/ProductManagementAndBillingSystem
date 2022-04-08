import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
function Navbarrr() {
  return (
    <div>
      
      <ListGroup>
        <ListGroupItem
          tag="a"
          href="/Home"
          className="bg-primary"
          action
          style={{ color: "white"}}
        >
          Home
        </ListGroupItem>
        <ListGroupItem
          tag="a"
          href="/AddNewCustomer"
          className="bg-primary"
          action
          style={{ color: "white"}}
        >
          Add Customer{" "}
        </ListGroupItem>
        <ListGroupItem
          tag="a"
          href="/AddNewVendor"
          className="bg-primary"
          action
          style={{ color: "white"}}
        >
          Add Vendor
        </ListGroupItem>
        <ListGroupItem
          tag="a"
          href="/AddProduct"
          className="bg-primary"
          action
          style={{ color: "white"}}
        >
          Add Product
        </ListGroupItem>
        <ListGroupItem
          tag="a"
          href="/Invoice"
          className="bg-primary"
          action
          style={{ color: "white"}}
        >
          Invoice
        </ListGroupItem>
        <ListGroupItem
          tag="a"
          href="/MoneyMadeOndate"
          className="bg-primary"
          action
          style={{ color: "white"}}
        >
          Money Made on Day
        </ListGroupItem>
        <ListGroupItem
          tag="a"
          href="/CustomerList"
         action
          className="bg-primary"
          
          style={{ color: "white"}}
        >
          Show All Customers
        </ListGroupItem>
        <ListGroupItem
          tag="a"
          href="/Purchaseorders"
          action
          className="bg-primary"
          // className="bg-primary"
          style={{ color: "white"}}
        >
          Available Products
        </ListGroupItem>
        <ListGroupItem
          tag="a"
          href="/VendorsList"
          action
          className="bg-primary"
          style={{ color: "white"}}
          >
          Show All Vendors
        </ListGroupItem>
        {/* <Link to={"#!"} className="nav-link">   Add Book</Link> */}
        {localStorage.getItem("Role") === "ADMIN" ? (
          <ListGroupItem
          tag="a"
          href="/AddNewUser"
          action
          className="bg-primary"
          style={{ color: "white"}}
          >
          Add New User
        </ListGroupItem>
      ) : ''}
        <ListGroupItem
          tag="a"
          href="/"
          action
          className="bg-danger"
          style={{ color: "white", backgroundColor: "rgb(121,203,223)" }}
          
        >{
          localStorage.setItem("Name","")
        }
          LogOut
        </ListGroupItem>
      </ListGroup>
      
    </div>
  );
}

export default Navbarrr;
