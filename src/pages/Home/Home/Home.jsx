import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";
import Categories from "../Categories/Categories";
import Programs from "../Programs/Programs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FLC | Home</title>
      </Helmet>
      <Slider />
      <Categories />
      <PopularClasses />
      <PopularInstructor />
      <Programs />
      <Testimonial />
    </div>
  );
};

export default Home;
