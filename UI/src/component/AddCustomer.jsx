import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Service from "./Service";
function AddCustomer() {
  const [cname, setCname] = useState("");
  const [caddress, setCaddress] = useState("");
  const [cnumber, setCnumber] = useState("");
  const history = useNavigate();
  const { id } = useParams();
  const saveCustomer=(e)=>{
    e.preventDefault();
    const customer={cname,caddress,cnumber,id};
    if(id){
      Service.updateCustomer(customer).then(response =>{
        console.log('customer data updated successfully',response.data);
        history.push('/');
      })
      .catch(error =>{
        console.log('something  went wrong ',error);
      })
    }else{
      Service.createCustomer(customer).then(response =>{
        console.log('customer added succesdully',response.data);
        history.push("/");
      })
      .catch(error =>{
        console.log('something went worng',error);
      })
    }
  }
  useEffect(()=>{
    if(id){
      Service.get(id)
      .then(customer=>{
        setCname(customer.data.cname);
        setCaddress(customer.data.caddress);
        setCname(customer.data.setCnumber);
      }).catch(error=>{
        console.log("something went wrong",error);
      })
    }
  },[])
  return (
    <div className="container">
      <h2 className="text-center">Add New  Customer</h2>
      <form
        style={{ width: "550px", textAlign: "center", marginLeft: "150px" }}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="cname"
            placeholder="Enter Name"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
          />
          <br />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="caddress"
            placeholder="Enter Address"
            value={caddress}
            onChange={(e) => setCaddress(e.target.value)}
          />
          <br />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control col-4"
            id="cnumber"
            placeholder="Enter Mobile No"
            value={cnumber}
            onChange={(e) => setCnumber(e.target.value)}
          />
          <br />
          <div>
            <button
              className="btn btn-primary"
              onClick={(e) => saveCustomer(e)}
            >
              Save
            </button>{" "}
            <button className="btn btn-danger">Cancel</button>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;
