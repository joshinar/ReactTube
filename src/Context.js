import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        videos: action.payload,
        heading: "Search results"
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    videos: [],
    heading: "",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=success&key=AIzaSyBKcy6Ebq54pPL0jzB3viE5xz_r6wyeqmQ"
      )
      .then(res => this.setState({ videos: res.data.items }));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
