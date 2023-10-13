import { Slide } from "react-awesome-reveal";
import SingleCategory from "./SingleCategory";
import br from "../../../assets/categories/1.jpeg";
import us from "../../../assets/categories/2.jpeg";
import ar from "../../../assets/categories/3.png";
import fr from "../../../assets/categories/4.jpeg";
import tr from "../../../assets/categories/5.jpeg";
import it from "../../../assets/categories/6.png";

const categories = [
  { id: 1, name: "British English", image: br },
  { id: 2, name: "US English", image: us },
  { id: 3, name: "Arabic", image: ar },
  { id: 4, name: "French", image: fr },
  { id: 5, name: "Turkish", image: tr },
  { id: 6, name: "Italian", image: it },
];

const Categories = () => {
  return (
    <section className="py-8 lg:py-20">
      <Slide direction="up">
        <div className="section-header text-center">
          <p className="font-bold mb-3">See Best Categories</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#ff007a] mb-7">
            Our All Categories
          </h2>
        </div>
      </Slide>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 content-center">
        {categories.map((category) => (
          <SingleCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
