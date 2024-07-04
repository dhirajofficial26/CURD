import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllUserData = () => {
  const [userData, setUserData] = useState([]);
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => {
        setUserData(res.data);
        setloader(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id) {
    const userchoice = window.confirm("Do ypou want o delete ");
    if (userchoice) {
      axios
        .delete(`http://localhost:3030/users/${id}`)
        .then((res) => {
          alert("record has deleted");
          window.location.href = "/";
        })
        .catch((err) => console.log(err));
    }
  }
  const handleClick = () => {
    navigate("/add-user");
  };

  return (
    <>
      <div className="direction">
        <span>Customer</span>

        <FaLongArrowAltRight className="arrow" />

        <span>View All Customer</span>
      </div>
      <div className="direction-2">
        <button>View all Customers</button>
        <button onClick={handleClick}>Add Customer</button>
      </div>

      <div className="searchBar">
        <button>
          Filters
          <CiFilter />
        </button>
        <input
          type="search"
          placeholder="Search by Name"
          className="search-input"
        />
        <CiSearch className="search-icon" />
        <input
          type="search"
          placeholder="Search by Mobile NO"
          className="search-input"
        />
        <CiSearch className="search-icon" />
        <input
          type="search"
          placeholder="Search by Eamil"
          className="search-input"
        />
        <CiSearch className="search-icon" />
        <input
          type="date"
          placeholder="Search by Date"
          className="search-input"
        />
      </div>

      <div className="center">
        <table className="table">
          <thead>
            <tr className="column">
              <th>sr.No</th>
              <th>Customer Name</th>
              <th>Contact Number</th>
              <th>alternate Number</th>
              <th>Email</th>
              <th>Registered On</th>
              <th>Status</th>
              <th>Booking History</th>
              <th>Action</th>
            </tr>
          </thead>
          {loader ? (
            <tbody>
              {userData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {`
                ${data.first_name}
                ${data.last_name}`}
                  </td>
                  <td>{data.primary_phone}</td>
                  <td>{data.alternate_phone}</td>
                  <td>{data.email}</td>
                  <td>{data.date_registered}</td>
                  <td>Active</td>
                  <td>
                    <button
                      onClick={() => navigate(`/Show-userData/${data.id}`)}
                    >
                      show
                    </button>
                  </td>
                  <td>
                    <button onClick={() => navigate(`/update-user/${data.id}`)}>
                      Edit
                    </button>

                    <button onClick={() => handleDelete(data.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          )}
        </table>
      </div>
    </>
  );
};

export default AllUserData;
