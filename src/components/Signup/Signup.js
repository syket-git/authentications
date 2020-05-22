import React, { useRef, useState } from "react";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const cpassRef = useRef();
  const [submit, setSubmit] = useState({});
  const [errors, setError] = useState([]);
  const hanldeSubmit = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const cpass = cpassRef.current.value;
    if (name.length <= 2) {
      setError("Name should be greater then 3 characters");
    } else if (pass.length <= 4) {
      setError("Password should be greater then 4 cherecters");
    } else if (pass !== cpass) {
      setError("Confirm password is not match");
    } else {
      setSubmit({ name, email, pass, cpass });
      console.log(submit);
      setError("");
      nameRef.current.value = "";
      emailRef.current.value = "";
      passRef.current.value = "";
      cpassRef.current.value = "";
    }
  };
  return (
    <div className="container">
      {errors ? errors : "Form submit Success!"}
      <form onSubmit={hanldeSubmit}>
        <input
          ref={nameRef}
          required
          className="form-control"
          type="text"
          placeholder="Name"
        />
        <br />
        <br />
        <input
          ref={emailRef}
          required
          className="form-control"
          type="email"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          ref={passRef}
          required
          className="form-control"
          type="password"
          placeholder="Password"
        />
        <br />
        <br />
        <input
          ref={cpassRef}
          required
          className="form-control"
          type="password"
          placeholder="Confrim Password"
        />
        <br />
        <br />
        <input className="form-control" type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Signup;
