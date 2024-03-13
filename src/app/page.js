import About from "@/components/custom_components/about/About";
import Activity from "@/components/custom_components/activity/Activity";
import Education from "@/components/custom_components/education/Education";
import Experience from "@/components/custom_components/experience/Experience";
import MainInfo from "@/components/custom_components/mainInfo/MainInfo";
import "./profile.css"
import Navbar from "@/components/custom_components/Navbar/Navbar";
export default function Home() {
  return (
    <>
    <div className="align-baseline">

      <Navbar/>
    </div>
        <div className="container ">
           
          <MainInfo />
          <About />
          <Experience />
          <Activity />
          <Education />
        </div>
      
    </>
  );
}
