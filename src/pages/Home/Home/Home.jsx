import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FLC | Home</title>
      </Helmet>
      <Slider />
      <PopularClasses />
      <PopularInstructor />
      <Testimonial />
    </div>
  );
};

export default Home;
