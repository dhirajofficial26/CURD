import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUserData = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    primary_phone: "",
    alternate_phone: "",
    email: "",
    date_registered: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`)
      .then((res) => {
        const data = res.data;
        setInputData({
          ...data,
          primary_phone: data.primary_phone.toString(),
          alternate_phone: data.alternate_phone.toString(),
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    axios.put(`http://localhost:3030/users/${id}`, inputData).then((res) => {
      navigate(`/Show-userData/${id}`);
    });
  }
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
        <span onClick={handleAllCustomer}>View All Customers</span>
        <FaLongArrowAltRight className="arrow" />
        <span style={{ fontSize: 30 }}>Edit Customer Details</span>
      </div>
      <div className="direction-2">
        <button onClick={handleAllCustomer}>View all Customers</button>
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>
      <div className="customerdata">
        <h3>Edit Customer Profile Information</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="adduser">
          <label>
            <span> First Name:</span>
            <input
              type="text"
              className="input"
              name="first_name"
              value={inputData.first_name}
              onChange={(e) =>
                setInputData({ ...inputData, first_name: e.target.value })
              }
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
              onChange={(e) =>
                setInputData({ ...inputData, last_name: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            <span>Primary Mobile No.</span>
            <input
              type="text"
              value={inputData.primary_phone}
              onChange={(e) =>
                setInputData({ ...inputData, primary_phone: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            <span>Alternate Mobile No.</span>
            <input
              type="text"
              value={inputData.alternate_phone}
              onChange={(e) =>
                setInputData({ ...inputData, alternate_phone: e.target.value })
              }
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
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </label>
        </div>
        <div className="adduserbutton">
          <button type="submit">Edit Infromation</button>
        </div>
      </form>
    </>
  );
};

export default UpdateUserData;
