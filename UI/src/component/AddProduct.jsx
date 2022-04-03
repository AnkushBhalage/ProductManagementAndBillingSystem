import React from "react";

function AddProduct() {
  return (<div className="container">
      <h1 className="text-center"> Add New Product</h1>
      <form style={{ width: "550px", textAlign: "center", marginLeft: "150px" }}>
      <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="pname"
            placeholder="Enter Product Name"
          />
          </div>
          <br />
          <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="companyname"
            placeholder="Enter Comany Name"
          />
          </div>
          <br />
          <div>
            <button className="btn btn-primary">Save</button>{' '}
            <button className="btn btn-danger">Cancel</button>
          </div>
      </form>
  </div>);
}

export default AddProduct;
