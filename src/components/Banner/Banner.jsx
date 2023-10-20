import {
  BsFillArrowRightCircleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

const Banner = () => {
  return (
    <div className="container py-36 mx-auto">
      <div className="flex items-center justify-around">
        <div className="left lg:w-96 space-y-3">
          <h3 className="text-2xl text-[#010103] font-medium">
            Plan your trip now
          </h3>
          <h1 className="text-6xl font-bold text-[#010103] leading-[70px]">
            Save <span className="text-[#ff5030]">big</span> with our car rental
          </h1>
          <p
            className="text-[#817f91]"
          >
            To contribute to positive change and achieve our sustainability
            goals with many extraordinary
          </p>
          <div className="flex gap-5">
            <button className="bg-[#ff5030] text-white flex items-center gap-2 py-4 px-4 rounded ">
              Book Ride
              <BsFillCheckCircleFill />
            </button>
            <button className="bg-[#010103] text-white flex items-center gap-2 py-4 px-4 rounded ">
              Learn More
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/banner_car.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
