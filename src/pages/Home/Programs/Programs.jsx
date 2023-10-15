import { Slide } from "react-awesome-reveal";
import SingleProgram from "./SingleProgram";
import p1 from "../../../assets/programs/p1.jpeg";
import p2 from "../../../assets/programs/p2.jpeg";
import p3 from "../../../assets/programs/p3.png";
import p4 from "../../../assets/programs/p4.jpeg";
import p5 from "../../../assets/programs/p5.png";
import p6 from "../../../assets/programs/p6.png";

const programs = [
  {
    id: 1,
    name: "IELTS",
    image: p1,
    desc: "The International English Language Testing System is an international standardized test of English language proficiency for non-native English language speakers.",
  },
  {
    id: 2,
    name: "TOEFL",
    image: p2,
    desc: "Test of English as a Foreign Language is a standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities.",
  },
  {
    id: 3,
    name: "TOEIC",
    image: p3,
    desc: "The Test of English for International Communication is an international standardized test of English language proficiency for non-native speakers. ",
  },
  {
    id: 4,
    name: "Duolingo",
    image: p4,
    desc: "Duolingo is an American educational technology company that produces learning apps and provides certification. Duolingo offers courses on 40 languages, ",
  },
  {
    id: 5,
    name: "C1 Advanced",
    image: p5,
    desc: "C1 Advanced, previously known as Cambridge English: Advanced and the Certificate in Advanced English, is an English examination provided by Cambridge Assessment.",
  },
  {
    id: 6,
    name: "C2 Proficiency",
    image: p6,
    desc: "C2 Proficiency, previously known as Cambridge English: Proficiency and the Certificate of Proficiency in English, is provided by Cambridge Assessment English",
  },
];

const Programs = () => {
  return (
    <section className="py-8 lg:py-20 bg-stone-50">
      <Slide direction="up">
        <div className="section-header text-center">
          <p className="font-bold mb-3">See Best Programs</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#ff007a] mb-7">
            Our All Programs
          </h2>
        </div>
      </Slide>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 content-center">
        {programs.map((program) => (
          <SingleProgram key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
};

export default Programs;
