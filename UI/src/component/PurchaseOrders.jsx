import React, { useEffect, useState } from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Navbarrr from './Navbarrr';
import service from './service';

const PurchaseOrders=()=>{
    const [orders,setOrders]=useState([]);
        useEffect(()=>{
        service.getAllPurchaseOrders()
        .then((response)=>{
            console.log(response.data);
            setOrders(response.data);
            
            console.log("Orders",orders);
        })
    },[]);
return(
    <div className='container'>
        <ToastContainer/>
        <Container>
            <Row>
                <Col md={3}>
                    <Navbarrr/>
                </Col>
                <Col md={9}>
                    <Row>
                        <table className='table table-bordered table-striped'>
                            <thead className="thead-dark">
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Vendor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   orders.map((order)=>(
                                       <tr key={order.id}>
                                                 <td style={{ color: "white" }}>{order.product.name}</td>
                                                  <td style={{ color: "white" }}>{order.quantity}</td>
                                                  <td style={{ color: "white" }}>{order.vendor.name}</td>
                                       </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    </div>
)

}
export default PurchaseOrders;