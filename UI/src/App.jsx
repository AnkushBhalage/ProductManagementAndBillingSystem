import { React } from "react";
import Header from "./component/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer";
import ProductList from "./component/ProductList";
import AddProduct from "./component/AddProduct";
import CustomerList from "./component/CustomerList";
import VendorsList from "./component/VendorsList";
import "./App.css";
import Invoice from "./component/Invoice";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddNewVendor from "./component/AddNewVendor";
import { Row } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import Login from "./component/Login";
import Home from "./component/Home";
import AddNewCustomer from './component/AddNewCustomer';
import MoneyMadeOnDate from './component/MoneyMadeOnDate';
import PurchaseOrders from "./component/PurchaseOrders";
import AddNewUser from "./component/AddNewUser";
export default function App() {
  return (
    <div className="App-header">
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Switch>
              <Route path="/" exact component={Login}></Route>
              <Route path="/Home" exact component={Home}></Route>
              <Route path="/AddProduct" component={AddProduct}></Route>
              <Route path="/AddNewCustomer" component={AddNewCustomer}></Route>
              <Route path="/updateCustomer/edit/:id" component={AddNewCustomer}></Route>
              <Route path="/updateVendors/edit/:id" component={AddNewVendor}></Route>
              <Route path="/AddNewVendor" component={AddNewVendor}></Route>
              <Route path="/CustomerList" component={CustomerList}></Route>
              <Route path="/ProductList" component={ProductList}></Route>
              <Route path="/VendorsList" component={VendorsList}></Route>
              <Route path="/Invoice" component={Invoice}></Route>
              <Route path="/MoneyMadeOnDate" component={MoneyMadeOnDate}></Route>
              <Route path="/PurchaseOrders" component={PurchaseOrders}></Route>
              <Route path="/AddNewUser" component={AddNewUser}></Route>

            </Switch>
          </Row>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}
