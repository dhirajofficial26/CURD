import axios from "axios";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [inputData, setInputData] = useState({
    user_id: Math.random(), // assuming this is how you generate a random user ID
    first_name: "",
    last_name: "",
    primary_phone: "",
    alternate_phone: "",
    email: "",
    date_registered: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3030/users", inputData)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleAllCustomer = () => {
    navigate("/");
  };

  return (
    <>
      <div className="direction">
        <span>Customer</span>

        <FaLongArrowAltRight className="arrow" />

        <span onClick={handleAllCustomer}>View All Customer</span>
        <FaLongArrowAltRight className="arrow" />

        <span style={{ fontSize: 30 }}> Add new Customer </span>
      </div>
      <div className="direction-2">
        <button onClick={handleAllCustomer}>View all Customers</button>
      </div>
      <div className="customerdata">
        <h3> customer profile Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="adduser">
            <label>
              <span> First Name:</span>
              <input
                type="text"
                className="input"
                name="first_name"
                value={inputData.first_name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              <span> Last Name:</span>
              <input
                className="input"
                type="text"
                name="last_name"
                value={inputData.last_name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              <span> Primary Mobile no.:</span>
              <input
                className="input"
                type="number"
                name="primary_phone"
                value={inputData.primary_phone}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              <span> Alternate Mobile no.:</span>
              <input
                type="number"
                name="alternate_phone"
                value={inputData.alternate_phone}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              <span> Email Id:</span>
              <input
                type="email"
                className="input"
                name="email"
                value={inputData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              <span> Date:</span>
              <input
                type="date"
                className="input"
                name="date_registered"
                value={inputData.date_registered}
                onChange={handleInputChange}
              />
            </label>
            <br />
          </div>
          <div className="adduserbutton">
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
