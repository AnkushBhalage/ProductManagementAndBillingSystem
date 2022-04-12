import { React, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer } from "react-toastify";
import { Container, Col, Row } from "reactstrap";
import Navbarrr from "./Navbarrr";
import service from './Service';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PatchMinus,PatchPlus}from "react-bootstrap-icons";
 
import { useHistory } from "react-router-dom";
function Invoice() {
    const notify = ()=>{
        
        // inbuilt-notification
        //toast.warning('Danger')
        // inbuilt-notification
        //toast.success('')
        // inbuilt-notification
        //toast.info('GeeksForGeeks')
        // inbuilt-notification
        toast.error('Cancelled')
        // default notification
        //toast('Hello Geeks')
          
    }
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), productName: '', rate: '', quantity: '', price: '' },
    ]);
    const history = useHistory();
    const [date, setDate] = useState("");
    const [customers, setCustomers] = useState([]);
    const [singleCustomer, setSingleCustomer] = useState("");
    const [products, setProducts] = useState([]);
    const [totals, setTotals] = useState([]);
    var total=0;
    useEffect(() => {
        service
            .getAll()
            .then((response) => {
                console.log("Printing cust coomers data", response.data);
                setCustomers(response.data);
                console.log("Printing cust customers data", customers);
            })
            .catch((error) => {
                console.log("something went wrong", error);
                
            });

        service.getAllProducts()
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
    }, []);


    const handleSubmit = (e) => {
        
        
        for(let i=0;i<inputFields.length;i++){
            if(inputFields[i].productName.length==0)
             toast.error("PRODUCT NAME NOT SELECTED");
             if(inputFields[i].rate.length===0)
             toast.error("Rate is not entered");
             if(inputFields[i].quantity.length===0)
             toast.error(`Quabtity not Entered ${i} row`);
        }
        e.preventDefault();
        const custId = singleCustomer.id;
        const dc = { custId, date };
        
        console.log("InputFields and dc", inputFields, dc);
        
        service.addSellOrder(inputFields, singleCustomer.id, date)
            .then((response) => {
                console.log(response.data);
                history.push("/ProductList");
                history.push("/Invoice");
            }).catch((error) => {
                console.log("Error in submititng", error);
                toast.error('Fields are Empty ');
                
            });
         //   toast.error('Error Occured');
     //   history.push("/AddProduct");

    };
   const calculate=()=>{
       for(let i = 0; i < inputFields.length; i++){
           console.log("calculate",inputFields[i].price);
           let s=0;
           s=parseInt(inputFields[i].price);
           total=total+s;
       }
       console.log("Total",total);
       setTotals(total);
   }
    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }

            return i;
        })

        setInputFields(newInputFields);
    };
    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(), productName: '', rate: '', quantity: '', price: '' }])
    };
    const handleRemoveFields = id => {
        const values = [...inputFields];
        console.log("Values",values.id);
        let x=values.findIndex(value=>value.id===id);
        setTotals(totals-inputFields[x].price);
        console.log(totals);
        console.log(x);
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
        
        
    };
    const onddlchange = (e) => {
        service.getCustomerByName(e.target.value).then((response) => {
            setSingleCustomer(response.data);
        });

    };
    return (
        <div className="container">
            <ToastContainer />
            <Container>
                <Row>
                    <Col md={3}>
                        <Navbarrr />
                    </Col>
                    <Col md={9}>
                        <h3 className="text-center">Invoice</h3>
                        <hr />
                        <Row>
                            <Col md={8}>
                                <div className="form-group">
                                    <select className="form-control" onChange={onddlchange}>
                                        <option value="0">Select Customer</option>
                                        {customers.map((customer) => (
                                            <option key={customer.id}>{customer.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="form-group">
                                    <input type="date" value={date} className="form-control" onChange={(e) => setDate(e.target.value)} />
                                </div>
                                
                            </Col>
                        </Row>
                        <hr />

                        {
                            inputFields.map(inputfield => (
                                inputfield.price=inputfield.rate* inputfield.quantity,
                              
                                <div key={inputfield.id}>
                                    <Row>
                                        <Col md={3}>
                                         
                                            <div className="form-group">
                                                <select className=" form-control" name="productName" value={inputfield.productName} onChange={event => handleChangeInput(inputfield.id, event)}>
                                                    <option value="0">Select product</option>
                                                    {products.map((product) => (
                                                        <option key={product.id} value={product.name}>{product.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </Col>

                                        <Col md={2}>
                                            <div className="form-group">
                                                <input type="text" name="rate"
                                                    placeholder="Rate"
                                                    variant="filled" className="form-control" value={inputfield.rate} onChange={event => handleChangeInput(inputfield.id, event)} />
                                            </div>
                                        </Col>
                                        <Col md={2}>
                                            <div className="form-group">
                                                <input type="text" name="quantity"
                                                    placeholder="Quantity"
                                                    variant="filled" className="form-control" value={inputfield.quantity} onChange={event => handleChangeInput(inputfield.id, event)} />
                                            </div>
                                        </Col>
                                        <Col md={2}>
                                            <div className="form-group">
                                                <input type="text" name="price"
                                                    placeholder="Price"
                                                    variant="filled" className="form-control" value={inputfield.price} /*onChange={event => handleChangeInput(inputfield.id, event)}*/ />
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                        <button className="btn btn-danger" onClick={() => handleRemoveFields(inputfield.id)}><PatchMinus/></button>
                                     {" "}
                                     <button className="btn btn-primary" onClick={handleAddFields}><PatchPlus/></button>
                                        </Col>
                                    </Row>                              
                                </div>
                            ))
                        }
                        
                        <Row>
                            <Col md={3}>
                           
                        <button className="btn btn-primary" onClick={handleSubmit}>Save</button>{" "}
                        
                            </Col>
                            <Col md={3}>
                            
                        <button className="btn btn-danger" onClick={notify}>cancel</button>
                       
                            </Col>
                            <Col md={3}>
                           
                        <button className="btn btn-primary" onClick={calculate}>Calculate</button>
                            </Col>
                            <Col md={3}>
                            <input type="text" value={totals} className="form-control" label="Total" />
                        
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Invoice;