import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosLogOut, IoIosNotifications } from "react-icons/io";

const Container = () => {
  return (
    <div>
      Hi , Dhiraj
      <div className="direction-2">
        <div className="searchBar">
          <input
            type="search"
            placeholder="Search by Name"
            className="search-input"
          />
          <CiSearch className="search-icon" />
        </div>

        <IoIosNotifications />
        <FaPeopleGroup />
        <IoIosLogOut />
      </div>
    </div>
  );
};

export default Container;
