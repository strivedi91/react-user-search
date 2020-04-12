import React, { Component } from "react";
import "./app.css";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-box/searchbox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ users: json }));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    let filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="container mx-auto">
        <SearchBox
          handleChange={this.onSearchChange}
          placeholder="Search User"
          className="mt-10 mb-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        ></SearchBox>
        <CardList className="container" users={filteredUsers}></CardList>
      </div>
    );
  }
}

export default App;
