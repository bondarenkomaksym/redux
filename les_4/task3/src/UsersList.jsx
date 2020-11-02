import React from 'react';
import Pagination from './Pagination';
import User from './User';



class UsersList extends React.Component {

  state = {
    currentPage: 0,
    itemsPerPage: 3
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {

    //принимаем список поль-лей
    const users = this.props.users;

    //высчитываем кол поль-лей
    const currentPage = this.state.currentPage;

    const startIndex = currentPage * this.state.itemsPerPage;
    const endIndex = startIndex + this.state.itemsPerPage;
    //через slice режем начальный массив поль-лей
    const usersToDisplay = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          itemsPerPage={this.state.itemsPerPage}
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

export default UsersList;