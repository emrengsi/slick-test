import React, {Component} from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: "photo 1",
    url: "https://images.unsplash.com/photo-1622495965794-16c9a3afef96?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80"
  },
  {
    name: "photo 2",
    url: "https://images.unsplash.com/photo-1627743914480-5c0a391767f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
  },
  {
    name: "photo 3",
    url: "https://images.unsplash.com/photo-1628022806798-11ffc4d2743c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
];

class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 1
    }
    return (
      <div className="App">
        <Slider className="the-slider" {...settings}>
          {photos.map( (photo) => {
            return (
              <div>
                <img src={photo.url} />
              </div>
            )
          })}
        </Slider>    
      </div>
    );
  }
};
export default App;