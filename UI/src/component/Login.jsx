import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import service from "./Service";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const validateUser = () => {
   const login={email,password};
   console.log(email,password);
   
    service.authenticate(email,password).then((response) => {
      
      localStorage.setItem("Name",response.data.name);
      localStorage.setItem("Role",response.data.role)
      history.push("/Home");
      // alert("hi");
      console.log(response.data);
      
        
        
      
    }).catch((error)=>{
      alert("email and password not matching",error);
    })
  };
  return (
    <div
      style={{ marginLeft: "460px", marginTop: "100px", marginBottom: "170px" }}
    >
      <div>
        <h2>Log In</h2>

      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button onClick={(e) => validateUser(e)}>Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
