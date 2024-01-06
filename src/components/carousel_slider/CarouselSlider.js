import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSlider = (props) => {
  return <Carousel responsive={props.responsive}>{props.slider}</Carousel>;
};

export default CarouselSlider;
