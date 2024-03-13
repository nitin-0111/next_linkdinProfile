import About from "@/components/custom_components/about/About";
import Activity from "@/components/custom_components/activity/Activity";
import Education from "@/components/custom_components/education/Education";
import Experience from "@/components/custom_components/experience/Experience";
import Intro from "@/components/custom_components/intro/Intro";
import "./profile.css"
import Navbar from "@/components/custom_components/Navbar/Navbar";
import { Data } from "@/temp_profileData";
export default function Home() {
  return (
    <>
    <div className="align-baseline">

      <Navbar/>
    </div>
        <div className="container ">
           
          <Intro intro={Data.intro}/>
          <About about={Data.about} />
          <Experience experience={Data.experience}/>
          <Activity activity={Data.activity} />
          <Education  education={Data.education}/>
        </div>
      
    </>
  );
}
