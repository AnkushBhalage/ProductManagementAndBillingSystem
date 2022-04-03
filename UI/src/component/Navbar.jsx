import React from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';

function Navbar() {
  return (<div>
   <ListGroup >
   <ListGroupItem tag="a" href="/" action className='bg-primary'>Home</ListGroupItem>
       <ListGroupItem tag="a" href="#!" action className='bg-primary'>Add Customer </ListGroupItem>
       <ListGroupItem tag="a" href="#!" action className='bg-primary'>Add Vendor</ListGroupItem>
       <ListGroupItem tag="a" href="#!" action className='bg-primary'>Add Product</ListGroupItem>
       <ListGroupItem tag="a" href="#!" action className='bg-primary'>Generate Invoice</ListGroupItem>
       <ListGroupItem tag="a" href="#!" action className='bg-primary'>Show All customer</ListGroupItem>
       <ListGroupItem tag="a" href="#!" action className='bg-primary'>Show All Products</ListGroupItem>
       <ListGroupItem tag="a" href="#!" action className='bg-primary'>Show All Vendors</ListGroupItem>
       
       <ListGroupItem tag="a" href="#!" action className='bg-danger'>LogOut</ListGroupItem>
       


       </ListGroup> 
  </div>);
}

export default Navbar;
