import React from "react";
import User from "./User";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { goNextPage, goPrevPage } from "./users.actions";
import { userListSelector, currentPageSelector } from "./users.selectors";


const itemsPerPage = 3;

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const start = currentPage * itemsPerPage;
  const usersToDisplay = users.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay
          .map((user) => (
            <User key={user.id} {...user} />
          ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: userListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goNext: goNextPage,
  goPrev: goPrevPage,
};

export default connect(mapState, mapDispatch)(UsersList);