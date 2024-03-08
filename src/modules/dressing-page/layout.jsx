import React, { Component } from "react";
import Store from "./store";
import Header from "./header";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <Header />
          </div>
          <div className="row container m-auto">
            <Store />
          </div>
        </div>
      </div>
    );
  }
}
