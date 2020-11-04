import React from "react";

const Filter = ({ filterText, count, onChange }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input type="text"
        className="filter__input"
        value={filterText}
        onChange={(event) => onChange(event.target.value)} />
    </div>
  )
}

export default Filter;