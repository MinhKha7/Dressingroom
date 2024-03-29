import React, { Component } from "react";

const products = [
  {
    id: "topcloth_1",
    type: "topclothes",
    name: "Top Cloth 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/topcloth1_show.jpg",
    imgSrc_png: "../images/clothes/topcloth1.png",
  },
  {
    id: "topcloth_2",
    type: "topclothes",
    name: "Top Cloth 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/topcloth2_show.jpg",
    imgSrc_png: "../images/clothes/topcloth2.png",
  },
  {
    id: "topcloth_3",
    type: "topclothes",
    name: "Top Cloth 3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/topcloth3_show.jpg",
    imgSrc_png: "../images/clothes/topcloth3.png",
  },
  {
    id: "topcloth_4",
    type: "topclothes",
    name: "Top Cloth 4",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/topcloth4_show.jpg",
    imgSrc_png: "../images/clothes/topcloth4.png",
  },
  {
    id: "topcloth_5",
    type: "topclothes",
    name: "Top Cloth 5",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/topcloth5_show.jpg",
    imgSrc_png: "../images/clothes/topcloth5.png",
  },
  {
    id: "topcloth_6",
    type: "topclothes",
    name: "Top Cloth ",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/topcloth6_show.jpg",
    imgSrc_png: "../images/clothes/topcloth6.png",
  },
  {
    id: "botcloth_1",
    type: "botclothes",
    name: "Bot Cloth 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/botcloth1_show.jpg",
    imgSrc_png: "../images/clothes/botcloth1.png",
  },
  {
    id: "botcloth_2",
    type: "botclothes",
    name: "Bot Cloth 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/botcloth2_show.jpg",
    imgSrc_png: "../images/clothes/botcloth2.png",
  },
  {
    id: "botcloth_3",
    type: "botclothes",
    name: "Bot Cloth 3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/botcloth3_show.jpg",
    imgSrc_png: "../images/clothes/botcloth3.png",
  },
  {
    id: "botcloth_4",
    type: "botclothes",
    name: "Bot Cloth 4",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/botcloth4_show.jpg",
    imgSrc_png: "../images/clothes/botcloth4.png",
  },
  {
    id: "botcloth_5",
    type: "botclothes",
    name: "Bot Cloth 5",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/clothes/botcloth5_show.jpg",
    imgSrc_png: "../images/clothes/botcloth5.png",
  },
  {
    id: "shoes_1",
    type: "shoes",
    name: "Shoes 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/shoes/shoes1_show.jpg",
    imgSrc_png: "../images/shoes/shoes1.png",
  },
  {
    id: "shoes_2",
    type: "shoes",
    name: "Shoes 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/shoes/shoes2_show.jpg",
    imgSrc_png: "../images/shoes/shoes2.png",
  },
  {
    id: "shoes_3",
    type: "shoes",
    name: "Shoes 3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/shoes/shoes3_show.jpg",
    imgSrc_png: "../images/shoes/shoes3.png",
  },
  {
    id: "shoes_4",
    type: "shoes",
    name: "Shoes 4",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/shoes/shoes4_show.jpg",
    imgSrc_png: "../images/shoes/shoes4.png",
  },
  {
    id: "shoes_5",
    type: "shoes",
    name: "Shoes 5",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/shoes/shoes5_show.jpg",
    imgSrc_png: "../images/shoes/shoes5.png",
  },
  {
    id: "handbag_1",
    type: "handbags",
    name: "Handbag 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/handbags/handbag1_show.jpg",
    imgSrc_png: "../images/handbags/handbag1.png",
  },
  {
    id: "handbag_2",
    type: "handbags",
    name: "Handbag 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/handbags/handbag2_show.jpg",
    imgSrc_png: "../images/handbags/handbag2.png",
  },
  {
    id: "handbag_3",
    type: "handbags",
    name: "Handbag 3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/handbags/handbag3_show.jpg",
    imgSrc_png: "../images/handbags/handbag3.png",
  },
  {
    id: "necklace_1",
    type: "necklaces",
    name: "Necklace 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/necklaces/necklace1_show.jpg",
    imgSrc_png: "../images/necklaces/necklace1.png",
  },
  {
    id: "necklace_2",
    type: "necklaces",
    name: "Necklace 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/necklaces/necklace2_show.jpg",
    imgSrc_png: "../images/necklaces/necklace2.png",
  },
  {
    id: "necklace_3",
    type: "necklaces",
    name: "Necklace 3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/necklaces/necklace3_show.jpg",
    imgSrc_png: "../images/necklaces/necklace3.png",
  },
  {
    id: "hairstyle_1",
    type: "hairstyle",
    name: "Hairstyle 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/hairstyle/hairstyle1_show.jpg",
    imgSrc_png: "../images/hairstyle/hairstyle1.png",
  },
  {
    id: "hairstyle_2",
    type: "hairstyle",
    name: "Hairstyle 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/hairstyle/hairstyle2_show.jpg",
    imgSrc_png: "../images/hairstyle/hairstyle2.png",
  },
  {
    id: "hairstyle_3",
    type: "hairstyle",
    name: "Hairstyle 3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/hairstyle/hairstyle3_show.jpg",
    imgSrc_png: "../images/hairstyle/hairstyle3.png",
  },
  {
    id: "background_1",
    type: "background",
    name: "Background 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/background/background1_show.jpg",
    imgSrc_png: "../images/background/background1.jpg",
  },
  {
    id: "background_2",
    type: "background",
    name: "Background 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/background/background2_show.jpg",
    imgSrc_png: "../images/background/background2.jpg",
  },
  {
    id: "background_3",
    type: "background",
    name: "Background 3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/background/background3_show.jpg",
    imgSrc_png: "../images/background/background3.jpg",
  },
  {
    id: "background_4",
    type: "background",
    name: "Background 4",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
    imgSrc_jpg: "../images/background/background4_show.jpg",
    imgSrc_png: "../images/background/background4.jpg",
  },
];

export default class Modal extends Component {
  renderProducts = () => {
    const { renderClothes } = this.props;

    return products.map((product) => {
      // Lấy this.props.nameType từ thẻ cha là store qua
      if (product.type === this.props.nameType) {
        return (
          <div key={product.id} className="card col-3 text-center">
            <img
              style={{ width: "100%", height: "100%" }}
              src={product.imgSrc_jpg}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <button
                onClick={() => {
                  renderClothes(product);
                }}
                href="#"
                className="btn btn-primary"
              >
                Thử đồ
              </button>
            </div>
          </div>
        );
      }
    });
  };

  render() {
    return <div className="row d-flex flex-wrap">{this.renderProducts()}</div>;
  }
}
