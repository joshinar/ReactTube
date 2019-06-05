import React, { Component } from "react";
import { Consumer } from "../Context";
import axios from "axios";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${
          this.state.searchTerm
        }&key=AIzaSyBKcy6Ebq54pPL0jzB3viE5xz_r6wyeqmQ`
      )
      .then(res => {
        dispatch({
          type: "SEARCH",
          payload: res.data.items
        });
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container mt-4">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="search here..."
                        onChange={this.onChange}
                        name="searchTerm"
                        value={this.state.searchTerm}
                      />
                    </div>
                    <input
                      type="submit"
                      value="Search"
                      className="btn  btn-lg btn-block"
                      style={{ backgroundColor: "#FF0000", color: "#fff" }}
                    />
                  </form>
                  <h3 className="text-center text-white mt-4">
                    {value.heading}
                  </h3>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
