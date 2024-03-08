import React, { Component } from "react";
import S from "./model.module.css";

export default class Tab extends Component {
  render() {
    const { imgTop, imgBot, imgShoes, imgBag, imgNeck, imgHair, imgBg } =
      this.props;
    return (
      <div className={S["contain"]}>
        <div className={S["hairstyle"]}>
          <img src={imgHair} style={{ width: 1000, height: 1180 }} alt="" />
        </div>
        <div className={S["model"]}>
          <img src="" alt="" />
        </div>
        <div className={S["body"]}>
          <img src="" alt="" />
        </div>
        <div className={S["necklace"]}>
          <img src={imgNeck} alt="" />
        </div>
        <div className={S["bikinitop"]}>
          <img src={imgTop} style={{ width: 250, height: 500 }} alt="" />
        </div>
        <div className={S["bikinibottom"]}>
          <img src={imgBot} style={{ width: 250, height: 500 }} alt="" />
        </div>
        <div className={S["handbag"]}>
          <img src={imgBag} alt="" />
        </div>
        <div className={S["feet"]}>
          <img src={imgShoes} alt="" />
        </div>
        <div className={S["background"]}>
          <img src={imgBg} style={{ width: 900, height: 1500 }} alt="" />
        </div>
      </div>
    );
  }
}
