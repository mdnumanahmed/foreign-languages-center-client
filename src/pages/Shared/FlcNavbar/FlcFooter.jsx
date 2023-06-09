import { Footer } from "flowbite-react";
import logo from "../../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const FlcFooter = () => {
  return (
    <div className="bg-slate-100  border-teal-200 border-t-2 mt-8">
      <div className="container mx-auto">
        <Footer
          container={true}
          className=""
          style={{ backgroundColor: "#f1f5f9" }}
        >
          <div className="w-full">
            <div className="grid w-full ">
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
                <div>
                  <Footer.Brand
                    name=""
                    href="#"
                    src={logo}
                    alt="Flowbite Logo"
                  />
                  <p className="mb-4">Foreign Languages Center</p>
                  <div className="mt-8 flex space-x-4 md:space-x-6 sm:mt-0 sm:justify-center md:justify-start">
                    <Footer.Icon href="#" icon={FaFacebook} />
                    <Footer.Icon href="#" icon={FaInstagram} />
                    <Footer.Icon href="#" icon={FaTwitter} />
                    <Footer.Icon href="#" icon={FaLinkedinIn} />
                    <Footer.Icon href="#" icon={FaGithub} />
                  </div>
                </div>
                <div>
                  <Footer.Title title="about" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">About Us</Footer.Link>
                    <Footer.Link href="#">Courses </Footer.Link>
                    <Footer.Link href="#">Instructors</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Follow us" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Discord</Footer.Link>
                    <Footer.Link href="#">LinkedIn</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Terms & Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-center">
              <Footer.Copyright href="#" by="Numan Ahmed™" year={2023} />
            </div>
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default FlcFooter;
