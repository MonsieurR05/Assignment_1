import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const SmallCarousel = ({ images }) => {
  return (
    <div className='carouselContainer'>
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SmallCarousel;
