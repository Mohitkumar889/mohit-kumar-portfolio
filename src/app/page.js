import AboutSection from "@/components/aboutSection/AboutSection";
import ContactSection from "@/components/contactSection/ContactSection";
import HomeSection from "@/components/homeSection/HomeSection";
import Navbar from "@/components/navbar/Navbar";
import ProjectSection from "@/components/projectSection/ProjectSection";
import QualificationSection from "@/components/qualificationSection/QualificationSection";
import ServiceSection from "@/components/serviceSection/ServiceSection";
import SkillSection from "@/components/skillSection/SkillSection";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar />

      {/* <!-- Home --> */}
      <HomeSection />

      {/* <!--  About  --> */}
      <AboutSection />

      {/* <!-- Services --> */}
      {/* <ServiceSection /> */}

      {/* <!-- qualification --> */}
      <QualificationSection />

      <SkillSection />

      <ProjectSection />

      <ContactSection />

      <footer>
        <span>
          <a href="https://www.linkedin.com/in/mohit-kumar-013740159">
            {" "}
            Mohit Kumar
          </a>{" "}
          | <span className="far fa-copyright"></span> {currentYear} All Rights
          Reserved. Privacy Policy
        </span>
      </footer>
    </>
  );
}
