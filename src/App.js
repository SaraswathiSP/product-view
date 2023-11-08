import "./styles.css";
import { useState } from "react";

import { BiSolidStar } from "react-icons/bi";
import { BsStarHalf, BsBasketFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
const images = [
  "https://m.media-amazon.com/images/I/715P9F1bo4L._SX679_.jpg",
  "https://m.media-amazon.com/images/I/71y0uinXMhL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/81JeIbN6XWL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/71HexeU7sML._SX679_.jpg",
  "https://m.media-amazon.com/images/I/81HfAbEJ1rL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/81MkDkYTDLL._SX679_.jpg"
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="App">
      <div className="product--section">
        <div className="thumbnails">
          {images.map((eachImg) => (
            <img
              className="thumbnail-img"
              src={eachImg}
              alt="small-img"
              onMouseEnter={() => setSelectedImage(eachImg)}
            />
          ))}
        </div>
        <div className="large--image--container">
          <img className="lg--img" src={selectedImage} alt="large-img" />
        </div>
        <div className="product-details">
          <h1 className="item--name">
            KIBO Casual Women's Floral Polyester V Neck Top Pink
          </h1>
          <div className="item--sub--info">
            <div className="rating">
              <BiSolidStar className="star" />
              <BiSolidStar className="star" />
              <BiSolidStar className="star" />
              <BiSolidStar className="star" />
              <BsStarHalf className="star" />
              <p className="star">4.5</p>
            </div>

            <p className="orders">
              <BsBasketFill /> 154 orders
            </p>
            <p
              style={{ color: "#14a44d", marginTop: 5, marginLeft: 10 }}
              className="star"
            >
              In stock
            </p>
          </div>
          <h4 className="price">
            $75.00 <span className="orders">/per box</span>
          </h4>
          <p className="info1">
            Modern look and quality demo item is a streetwear-inspired
            collection that continues to break away from the conventions of
            mainstream fashion. Made in Italy, these black and brown clothing
            low-top shirts for men.
          </p>
          <div className="row">
            <div className="cont__1">
              <dt style={{ width: 56, textAlign: "start" }}>Type:</dt>
              <dd className="">Regular</dd>
            </div>
            <div className="cont__1">
              <dt style={{ width: 56, textAlign: "start" }}>Color:</dt>
              <dd className="">Pink</dd>
            </div>
            <div className="cont__1">
              <dt style={{ width: 56, textAlign: "start" }}>Material:</dt>
              <dd className="">Polyester</dd>
            </div>
            <div className="cont__1">
              <dt style={{ width: 56, textAlign: "start" }}>Brand:</dt>
              <dd className="">Kibo</dd>
            </div>
          </div>
          <div className="size-quantity">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginRight: 20
              }}
            >
              <p className="info2">Size</p>
              <select className="select">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <p className="info2">Quantity</p>
              <div className="qnt-cont">
                <button
                  onClick={decreaseQuantity}
                  className="qnt--btn"
                  style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
                >
                  -
                </button>
                <input className="input" type="number" value={quantity} />
                <button
                  onClick={increaseQuantity}
                  className="qnt--btn"
                  style={{
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="button1">BUY NOW</button>
            <button className="button2">
              <BsBasketFill style={{ color: "#fff" }} /> ADD TO CART
            </button>
            <button className="button3">
              <AiFillHeart /> SAVE
            </button>
          </div>
          <div style={{ display: "flex", marginTop: 30 }}>
            <img
              className="img1"
              src="https://m.media-amazon.com/images/I/51GCNyD3W0L._SY879_.jpg"
              alt=""
            />
            <img
              className="img1"
              src="https://m.media-amazon.com/images/I/81iXPb4FHbL._SX679_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
