import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container,Col,Row } from "reactstrap";
import Navbarrr from "./Navbarrr";
import service from "./service";

const AddNewUser=()=>{
    const [name,Setname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[cpassword,setcpassword]=useState("");
    const[mobile,setMobile]=useState("");
    const [role,setRole]=useState("");
    const history = useHistory();

    const handleChange=(e)=>{
        const a=e.target.value;
        setRole(a);
        console.log("ROle",role);

    }
    const saveUser =(e)=>{
        e.preventDefault();
        if(password===cpassword){
            const data={name,email,password,mobile,role};
            console.log(data);
            service.addNewUser(data)
            .then((response)=>{
                console.log(response.data);
                history.push("/AddNewCustomer");
                history.push("/AddNewUser");
            }).catch((error)=>{
                console.log("Error occured",error);
            })
        }else{
            alert("Confirm Password and password are not same");

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
                   <div className="app-wrapper">
                       <div>
                           <h2 className="text-center">Add New User</h2>
                       </div>
                       <hr />
                       <Row>
                       <Col md={6}>
                           <div className="form-group">
                            <input type="text" className="form-control" value={name} placeholder="Enter Name" onChange={e=>Setname(e.target.value)}/>
                           </div>
                       </Col>
                       <Col md={6}>
                           <div className="form-group">
                            <input type="text" className="form-control" value={email} placeholder="Enter Email Id" onChange={e=>setEmail(e.target.value)}/>
                           </div>
                       </Col>
                       </Row>
                       <Row>
                           <hr />
                       <Col md={4}>
                               <div className="form-group">
                                 <input type="text" value={mobile} placeholder="Enter Mobile no." onChange={e=>setMobile(e.target.value)} className="form-control" />
                               </div>
                               </Col>
                           <Col md={4}>
                               <div className="form-group">
                                 <input type="text" value={password} pattern="[0-9]+" placeholder="Enter Password" onChange={e=>setPassword(e.target.value)} className="form-control" />
                               </div>
                           </Col>
                           <Col md={4}>
                               <div className="form-group">
                                 <input type="text" value={cpassword} placeholder="Enter Confirm Password" onChange={e=>setcpassword(e.target.value)} className="form-control" />
                               </div>
                           </Col>
                       </Row>
                       <Row>
                          <div>
                              <div>
                              Select Role: {" "}
                              </div>
                               <label> ADMIN  </label>
                              <input type="radio" name="role" value={0} onChange={handleChange} />
                              <div>
                              <label>User  </label>
                              <input type="radio" name="role" value={1} onChange={handleChange} />
                              </div>
                          </div>
                       </Row>
                       <Row>
                          <Col md={2}>
                          <button className="btn btn-primary" onClick={saveUser}>Save</button>
                          </Col>
                          <Col md={2}>
                          <button className="btn btn-danger" >Cancel</button>
                          </Col>

                       </Row>
                   </div>
                   </Col>
               </Row>
           </Container>

        </div>
    )

}
export default AddNewUser;