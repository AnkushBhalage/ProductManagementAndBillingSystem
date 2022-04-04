import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import service from "./service";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const validateUser = () => {
    if (email.length === 0) {
      alert("enter your email");
    } else if (password.length === 0) {
      alert("enter your password");
    }
    service.authenticate(email, password).then((response) => {
      if (response.status === 200) {
        const result = response.data;
        localStorage.setItem("Name", result.name);
        localStorage.setItem("Role", result.role);

        alert(localStorage.getItem("Role"));

        history.push("/Home");
      } else {
        console.log("Please Enter right Id and Password");
      }
    });
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
