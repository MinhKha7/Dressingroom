import React, { Component } from "react";
import Tab from "./tab";
import Model from "./model";

const tabName = [
  "Áo",
  "Quần",
  "Giày dép",
  "Túi xách",
  "Dây chuyền",
  "Kiểu tóc",
  "Nền",
];

export default class Store extends Component {
  constructor() {
    super();
    this.state = {
      initState: [true, false, false, false, false, false, false],
      typeActive: "topclothes",
      listType: [
        "topclothes",
        "botclothes",
        "shoes",
        "handbags",
        "necklaces",
        "hairstyle",
        "background",
      ],

      imgActive: [
        "./../images/allbody/bikini_branew.png",
        "./../images/allbody/bikini_pantsnew.png",
        "./../images/shoes/shoes1.png",
        "",
        "",
        "",
        "./../images/background/background1.jpg",
      ],
    };
  }

  // Đổi tab
  handleActive = (index) => {
    this.state.initState = [false, false, false, false, false, false, false];
    this.state.initState[index] = true;
    this.setState({
      initState: this.state.initState,
      typeActive: this.state.listType[index],
    });
  };
  // Thử đồ
  renderClothes = (pd) => {
    let indexType = this.state.listType.findIndex(
      (n) => n === this.state.typeActive
    );

    this.state.imgActive[indexType] = pd.imgSrc_png;
    this.setState({
      imgActive: this.state.imgActive,
    });
  };

  render() {
    return (
      <div>
        {/* Thanh Tab */}
        <div className="row">
          <div className="col-md-8 well">
            <ul className="nav nav-pills">
              {this.state.initState.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="nav-item col text-center border border-light-subtle rounded-0"
                  >
                    <a
                      onClick={() => {
                        this.handleActive(index);
                      }}
                      className={`nav-link ${item ? "active" : ""} rounded-0`}
                      href="#"
                    >
                      {tabName[index]}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Tab
              renderClothes={this.renderClothes}
              nameType={this.state.typeActive}
            />
          </div>
          <div className="col-md-4">
            <Model
              imgTop={this.state.imgActive[0]}
              imgBot={this.state.imgActive[1]}
              imgShoes={this.state.imgActive[2]}
              imgBag={this.state.imgActive[3]}
              imgNeck={this.state.imgActive[4]}
              imgHair={this.state.imgActive[5]}
              imgBg={this.state.imgActive[6]}
              width={this.state.width}
              height={this.state.height}
            />
          </div>
        </div>
      </div>
    );
  }
}
