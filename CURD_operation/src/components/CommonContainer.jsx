import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosLogOut, IoIosNotifications } from "react-icons/io";

const CommonContainer = () => {
  return (
    <div className="commonConatiner">
      <p className="username"> Hi Dhiraj</p>
      <div className="innercontnet">
        <div className="searchBar">
          <input
            type="search"
            placeholder="Search by Name"
            className="search-input"
          />
          <CiSearch className="search-icon" />
        </div>

        <span>
          <IoIosNotifications />
        </span>

        <span>
          <FaPeopleGroup />
        </span>

        <span className="logout">
          <IoIosLogOut />
        </span>
      </div>
    </div>
  );
};

export default CommonContainer;
