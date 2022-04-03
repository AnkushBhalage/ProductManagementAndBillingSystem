import {React,useState} from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import service from "./service";
const AddNewCustomer = () => {
    const[name,setName]=useState('');
    const[address,setAddress]=useState('');
    const[mobile,setMobile]=useState('');
    const history=useHistory();
    const {id}=useParams();
    const addNewCustomer=(e)=>{
        e.preventDefault();
        const customer={name,address,mobile};
        if(id){
            service.update(customer)
            .then(response => {
                console.log("cusomer data updated successfully",response.data);
                history.push('/AddNewCustomer');
            })
            .catch(error => {
                console.log('something went wrong',error);
            })
        } else{
            service.create(customer)
            .then(response => {
                console.log("employee addedd successfully",response.data);
                history.push('/');
            })
            .catch(error => {
                console.log('error occured',error);
            })
        }
    }
        useEffect(()=>{
            if(id){
                service.get(id)
                .then(customer =>{
                    setName(customer.data.name);
                    setAddress(customer.data.address);
                    setMobile(customer.data.mobile);
                })
                .catch(error =>{
                   console.log("error occured",error);
                })
            }
        },[])
    
  return (
    <div className='container'>
    <div className='app-wrapper'>
        <div>
            <h2 className='title'> Add new Customer</h2>

        </div>
        <form className='form-wrapper' >
                   <div className='name'>
                    <label className='label'>Enter Name</label>
                      <input 
                      type="text"
                       id="name" 
                       className='input'
                        name='name'
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}/>
                       </div>
                    <div className='name'>
                    <label className='label'>Enter Address</label>
                      <input 
                      type="text" 
                       id="address" 
                       className='input' 
                       name='address'
                        value={address} 
                        onChange={(e)=>setAddress(e.target.value)}/>
                       </div>
                    <div className='name'>
                    <label className='label'>Enter Mobile No</label>
                      <input
                       type="number" 
                        id="mobile" 
                        className='input'
                         name='mobile'
                          value={mobile}
                           onChange={(e)=>setMobile(e.target.value)}/>
                     
                    </div>
                    
                    <div>
                      <button type='submit' className='addCustomer' onClick={(e)=>addNewCustomer(e)}>Add Customer</button>
                    <button type='button' className='cancel'  >Cancel</button>
                    </div>
        </form>

    </div>
   
</div>
  );
};

export default AddNewCustomer;
