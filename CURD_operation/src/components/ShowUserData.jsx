import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import "../CSS/ShowUserData.css";
const ShowUserData = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  const handleAllCustomer = () => {
    navigate("/");
  };
  const handleAddCustomer = () => {
    navigate("/add-user");
  };

  return (
    <>
      <div className="direction">
        <span>Customer</span>

        <FaLongArrowAltRight className="arrow" />

        <span onClick={handleAllCustomer}>View All Customer</span>
        <FaLongArrowAltRight className="arrow" />

        <span style={{ fontSize: 30 }}> Customer Details</span>
      </div>
      <div className="direction-2">
        <button onClick={handleAllCustomer}>View all Customers</button>
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>
      <div className="customerdata">
        <h3>Customer Profile Information</h3>
      </div>
      <div className="showuserData">
        <p>First Name: {inputData.first_name}</p>
        <p>Last Name: {inputData.last_name}</p>
        <p>Primary Mobile No.: {inputData.primary_phone}</p>
        <p>Alternate Mobile No.: {inputData.alternate_phone}</p>
        <p>Email Id: {inputData.email}</p>
        <p>Register Date: {inputData.date_registered}</p>
      </div>
    </>
  );
};

export default ShowUserData;
