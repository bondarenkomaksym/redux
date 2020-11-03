import React from 'react';
import Pagination from './Pagination';
import User from './User';

import { page } from './pages.actions';
import { usersState, currentPageState } from './page.state';
import { connect } from "react-redux";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentPage: 0,
      itemsPerPage: 3
    };
  }

  goPrev = () => {
    const { page, currentPage } = this.props;
    page(currentPage - 1);
    // this.setState({
    //   currentPage: this.state.currentPage - 1,
    // });
  };

  goNext = () => {
    const { page, currentPage } = this.props;
    page(currentPage + 1);
    // this.setState({
    //   currentPage: this.state.currentPage + 1,
    // });
  };

  render() {

    //высчитываем кол поль-лей

    const { itemsPerPage } = this.state;
    const { currentPage } = this.props;

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    //через slice режем начальный массив поль-лей
    // const usersToDisplay = users.slice(startIndex, endIndex);
    const usersToDisplay = this.props.users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          // goPrev={this.goPrev}
          // goNext={this.goNext}
          // currentPage={this.state.currentPage}
          // itemsPerPage={this.state.itemsPerPage}
          // totalItems={this.props.users.length}
          {...this.props}
          itemsPerPage={itemsPerPage}
          goNext={this.goNext}
          goPrev={this.goPrev}
          totalItems={this.props.users.length}
        />
        <ul className="users">
          {usersToDisplay.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}


const mapDispatch = {
  page
}

const mapState = state => {
  return {
    users: usersState(state),
    currentPage: currentPageState(state),

  }
}


const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;


// export default UsersList;