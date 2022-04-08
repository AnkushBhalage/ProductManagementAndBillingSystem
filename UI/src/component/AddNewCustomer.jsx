import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import service from "./service";
import Navbarrr from "./Navbarrr";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
const AddNewCustomer=()=>{
const [name,Setname]=useState('');
const[address,setAddress]=useState('');
const[mobile,setmobile]=useState('');
const {id} = useParams();
const history=useHistory();

  useEffect(()=>{
    if(id){
      service.get(id)
    .then((response)=>{
      console.log("id",response.data);
      setmobile(response.data.mobile);
      setAddress(response.data.address);
      Setname(response.data.name);
    })
    }
  },[]);

  const saveCustomer=(e)=>{
    e.preventDefault();
    const customer={name,address,mobile,id};
           if(id){
             service.update(customer)
             .then((response)=>{
               console.log(response.data);
               toast.success("Customer data updated suuccessfully");
               history.push("/CustomerList")
             }).catch((error)=>{
               console.log("Error occured",error);
             })
           }else{
            service.create(customer)
            .then((response)=>{
              console.log(response.data);
              history.push("/CustomerList");
            })
            .catch((error)=>{
              console.log("Error occured",error);
            })
           }
                       
  }

return(
  <div className="container">
    <ToastContainer/>
    <Container>
    <Row>
      <Col md={3}>
        <Navbarrr/>
      </Col>
      <Col md={9}>
        <h3 className="text-center">Add Customer{id}</h3>
        <hr />
        <Row>
          <Col md={4}>
            <div className="form-group" style={{ width: "550px", textAlign: "center", marginLeft: "150px" }}>
              <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={e=>Setname(e.target.value)}/>
            </div>
          </Col>
          </Row>
          <Row>
          <Col md={4}>
            <div className="form-group" style={{ width: "550px", textAlign: "center", marginLeft: "150px" }}>
              <input type="text" className="form-control" placeholder="Enter Address" value={address} onChange={e=>setAddress(e.target.value)}/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="form-group" style={{ width: "550px", textAlign: "center", marginLeft: "150px" }}>
              <input type="text" className="form-control" placeholder="Enter Mobile no" value={mobile} onChange={e=>setmobile(e.target.value)}/>
            </div>
            
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="form-group" style={{ width: "550px", textAlign: "center", marginLeft: "150px" }}>
            <button className="btn btn-primary" onClick={saveCustomer}>Save</button>{" "}
            <button className="btn btn-danger">Cancel</button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
    </Container>
   
  </div>
)

}
export default AddNewCustomer;