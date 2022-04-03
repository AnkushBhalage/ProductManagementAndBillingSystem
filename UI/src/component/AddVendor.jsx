import React from "react";

function AddVendor() {
  return (
    <div className="container">
      <h2 className="text-center">Add New Vendor</h2>
      <form
        style={{ width: "550px", textAlign: "center", marginLeft: "150px" }}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="vname"
            placeholder="Enter Name"
          />
        </div>{" "}
        <br />
        <div>
          <input
            type="text"
            className="form-control col-4"
            id="vaddress"
            placeholder="Enter Address"
          />
        </div>
        <br />
        <div>
          <input
            type="number"
            className="form-control col-4"
            id="vnumber"
            placeholder="Enter Mobile no:"
          />
        </div>
        <br />
        <div>
          <button className="btn btn-primary">Save</button>{" "}
          <button className="btn btn-danger">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddVendor;
