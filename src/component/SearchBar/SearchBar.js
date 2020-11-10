import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default SearchBar;

// import React from "react";
// import "./SearchBar.css";

// const SearchBar = () => {
//   return (
//     <div>
{
  /* <header className="Searchbar">
  <form className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>; */
}
//     </div>
//   );
// };

// export default SearchBar;
