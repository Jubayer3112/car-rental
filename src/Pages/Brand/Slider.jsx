import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
  return (
    <div>
      <Carousel>
        {/* <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}> */}
        <div>
          <img src="https://klbtheme.com/harrier/wp-content/uploads/2018/09/p1.jpg" />
          
        </div>
        <div>
          <img src="https://klbtheme.com/harrier/wp-content/uploads/2018/09/p21.jpg" />
          
        </div>
        <div>
          <img src="https://cardealer.webtemplatemasters.com/wp-content/uploads/thememakers/cardealer/2/431/main/5f0f7259ae732.jpg" />
          
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
