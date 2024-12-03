import React, { useEffect, useState } from "react";

function Registration() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
useEffect(()=>{
    console.log("Registered")
},[flag])

  function handlerData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    }
    else{
        setFlag(true)
    }
  }

  return (
    <>
    <pre>{(flag)?<h2 className="ui-define">Hello {inputData.name} You've Registered Successfully </h2>:""}</pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handlerData}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={inputData.email}
            onChange={handlerData}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handlerData}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Registration;
