import React from "react";
import "./CourseSearchBar.scss";

const CourseSearchBar = () => {
  return (
    <div className="courseSearchBarContainer">
      <div className="selectedFilters"></div>
      <div className="searchComponentsContainer">
        <div className="semesterFilterDropdown">
          <select>
            <option value="I"> I </option>
            <option value="II"> II </option>
            <option value="III"> III </option>
            <option value="IV"> IV </option>
            <option value="V"> V </option>
            <option value="VI"> VI </option>
            <option value="VII"> VII </option>
            <option value="VIII"> VIII </option>
          </select>
        </div>
        <div className="branchFilterDropdown">
          <select>
            <option value="CS"> CS </option>
            <option value="IT"> IT </option>
            <option value="ME"> ME </option>
            <option value="PIE"> PIE </option>
            <option value="CE"> CE </option>
            <option value="EE"> EE </option>
            <option value="ECE"> ECE </option>
          </select>
        </div>
        <div className="searchBar">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default CourseSearchBar;
