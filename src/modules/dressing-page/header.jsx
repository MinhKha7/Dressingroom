import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="text-center">
            <img src="./../images/cybersoft.png" alt="Card image" />
          </div>
          <div className="card-body">
            <h4 className="card-title text-center">
              CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến -
              Virtual Dressing Room
            </h4>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
