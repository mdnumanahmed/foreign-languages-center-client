import { Carousel } from "flowbite-react";
import slide1 from '../../../assets/slider/1.webp'
import slide2 from '../../../assets/slider/2.webp'
import slide3 from '../../../assets/slider/3.jpg'
import slide4 from '../../../assets/slider/4.jpg'
import FlcBtn from "../../../components/FlcBtn";

const Slider = () => {
  return (
    <div className="h-28 sm:h-64 md:h-80 lg:h-96">
      <Carousel>
        <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={slide1} alt="" />
          <div className="absolute left-1 md:left-6 lg:left-[10%] space-y-0 lg:space-y-4 bg-gray-600/10 backdrop-brightness-90 p-10">
            <h3 className="text-xl lg:text-5xl font-bold">Online Summer School</h3>
            <p>Access a variety of high school courses this summer for credit and enrichment.</p>
            <FlcBtn>Register Now</FlcBtn>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white ">
        <img src={slide2} alt="" />
        <div className="absolute left-1 md:left-6 lg:left-[10%] space-y-0 lg:space-y-4 bg-gray-600/10 backdrop-brightness-90 p-10 text-white">
            <h3 className="text-xl lg:text-5xl font-bold">Summer Camp in Canada</h3>
            <p>Check our summer camp courses and start dreaming with us</p>
            <FlcBtn>Register Now</FlcBtn>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={slide3} alt="" />
        <div className="absolute left-1 md:left-6 lg:left-[10%] space-y-0 lg:space-y-4 bg-gray-600/10 backdrop-brightness-90 p-10 text-white">
            <h3 className="text-xl lg:text-5xl font-bold">Award-Winning Course</h3>
            <p>Award-Winning SPANISH OR CHINESE LESSONS For kids</p>
            <FlcBtn>Register Now</FlcBtn>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={slide4} alt="" />
        <div className="absolute left-1 md:left-6 lg:left-[10%] space-y-0 lg:space-y-4 bg-gray-600/10 backdrop-brightness-90 p-10 text-white">
            <h3 className="text-xl lg:text-5xl font-bold">Online Summer School</h3>
            <p>Access a variety of high school courses this summer for credit and enrichment.</p>
            <FlcBtn>Register Now</FlcBtn>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
