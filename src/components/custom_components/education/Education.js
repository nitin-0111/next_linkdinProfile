import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Separator } from "@/components/ui/separator"


const Education = ({ education }) => {
    return (
      <div className="container">
        <Card>
          <CardHeader><h2 className="font-bold">Education</h2></CardHeader>
          {education.result.map(({ logo, name, course, duration, location, skills }, ind) => (
            <CardContent key={ind}>
              <div className="header_education flex">
                <div className="company_logo">
                  <img src={logo} alt="" className="company_logo" />
                </div>
                <div className="description">
                  <h4>{name}</h4>
                  <span>{course}</span><br />
                  <div className="location_details">
                    <span>{duration}</span><br />
                    <span>{location}</span>
                  </div>
                  <div className="descriptionProfile  gap-4">
                    {/* Mapping over skills to display each skill */}
                    {skills.map((skill, index) => (
                      <Chip key={index} label={skill} variant="outlined" className="mx-1 px-1"/>
                    ))}
                  </div>
                </div>
              </div>
              <Separator />
            </CardContent>
          ))}
        </Card>
      </div>
    );
  }

export default Education