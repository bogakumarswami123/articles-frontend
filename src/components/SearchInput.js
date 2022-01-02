import React from "react";
import SearchIcon from "../Assets/search.svg";

export const SearchInput = props => {
  let { onChange } = props;
  return (
    <React.Fragment>
      <input placeholder="Search Articles" onChange={onChange} />
      <img src={SearchIcon} alt="" className="search-icon" />
    </React.Fragment>
  );
};
