import './App.css';
import { Container } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { Col,Row } from 'reactstrap';
import Header from './component/Header';
import Navbar from './component/Navbar';
import AddNewCustomer from './component/AddNewCustomer';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <>
  <Router>
  <ToastContainer/>
    <Container>
      <Header/>
      <Row>
        <Col md={3}>
        <Navbar/>
        </Col>
       <Col md={9}>
             <AddNewCustomer/>      
       </Col>
      </Row>
    </Container>
  </Router>

  
</>

  );
}

export default App;
