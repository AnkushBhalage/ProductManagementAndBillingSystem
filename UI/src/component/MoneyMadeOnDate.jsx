import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Container,Row,Col, Label } from "reactstrap";
import Navbarrr from "./Navbarrr";
import service from "./Service";

function MoneyMadeOndate(){
  const [date,setDate]=useState("");
  const [sellOrder,setSellOrder]=useState([]);
  const [total,SetTotal]=useState("");
  var t=0;
  const findBydate =(e)=>{
      SetTotal(0);
     
     service.findProductsByDate(date)
     .then((response)=>{
         setSellOrder(response.data);
         console.log("Sellorder",sellOrder);
         console.log(sellOrder[0]);
     })
   
  }

  const calculate=()=>{
    for(let i = 0; i < sellOrder.length; i++){
        console.log("calculate",sellOrder[i].price);
        let s=0;
        s=parseInt(sellOrder[i].price);
        t=t+s;
    }
    console.log("Total",t);
    SetTotal(t);
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
                 <Row>
                     <div className="form-group">
                       <input type="date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)} />
                        
                     </div>
                     <div>
                     <button className="btn btn-primary" onClick={findBydate}>find</button>
                     </div>

                 </Row>
                 
                 <Row>
                     <table className="table table-bordered table-striped">
                         <thead>
                             <tr>
                                 <th style={{ color: "white" }}>Product Name</th>
                                 <th style={{ color: "white" }}>Quantity</th>
                                 <th style={{ color: "white" }}>Price</th>
                                 <th style={{ color: "white" }}>Purchased By</th>
                                                            
                             </tr>
                         </thead>
                         <tbody>
                             {sellOrder.map((s)=>
                             <tr>
                             <td style={{ color: "white" }}>{s.product.name}</td>
                             <td style={{ color: "white" }}>{s.quantity}</td>
                             <td style={{ color: "white" }}>{s.price}</td>
                             <td style={{ color: "white" }}>{s.customer.name}</td>
                             </tr>
                             )}
                         </tbody>
                            
                     </table>
                 </Row>
                 <Row>
                    
                   Money Made on {date}:
                   <Col md={3}>
                     <input type="number" value={total} className="form-control"  />
                    </Col>
                    <Col md={3}>
                    <button className="btn btn-primary" onClick={calculate}>Calculate</button>
                    </Col>
                 </Row>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default MoneyMadeOndate;