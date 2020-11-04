import React from "react";
import { connect } from 'react-redux';
import User from "./User";
import Filter from "./Filter.jsx";
import { filteredUsers, filterTextSelector } from "./users.selectors";
import * as usersActions from "./users.actions";

const UsersList = ({ usersList, filterText, textInputFromFilter }) => {

  return (
    <div>
      <Filter
        filterText={filterText}
        count={usersList.length}
        onChange={textInputFromFilter}
      />
      <ul className="users">
        {usersList.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
}


const mapState = state => {
  return {
    usersList: filteredUsers(state),
    filterText: filterTextSelector(state),
  }
}

const mapDispatch = {
  textInputFromFilter: usersActions.textInputFromFilter,
}

export default connect(mapState, mapDispatch)(UsersList);
