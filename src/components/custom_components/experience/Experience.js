import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import EditIcon from '@mui/icons-material/Edit';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import "./experience.css"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input";





const Experience = ({ experience }) => {
  return (
    <div className="container">
      <Card>
        <CardHeader>
          <div className="header_about flex justify-between">
            <CardTitle>Experience </CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="linkdin"> <EditIcon /> </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[60vw] max-h-[50vh]">
                <DialogHeader>
                  <DialogTitle>Add Experience</DialogTitle>
                  <DialogDescription> Add Experience: </DialogDescription>
                </DialogHeader>


                <div className="edit_container">


                  <div className="grid grid-cols-4 items-center gap-4 flex-col ">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="Company" className="text-right">
                        Company*
                      </Label>
                      <Input id="company" placeholder="Company Name... "
                        className="col-span-3 input_username " />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="role" className="text-right">
                        Role*
                      </Label>
                      <Input id="role" placeholder="your Role... "
                        className="col-span-3 input_username " />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="role" className="text-right">
                        Location
                      </Label>
                      <Input id="role" placeholder="Location "
                        className="col-span-3 input_username " />
                    </div>
                  </div>
                </div>
                <DialogFooter >
                  <Button variant="linkdin" className="my-3">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        {experience.resultArr.map(({ logo, companyName, Role, location, duration, description }, ind) => (
          <CardContent key={ind}>
            <div className="header_experience">
              <div className="company_logo">
                <img src={logo} alt="" className="company_logo" />
              </div>
              <div className="description">
                <h4>{companyName}</h4>
                <span>{Role}</span><br />
                <div className="location_details">
                  <span>{duration}</span><br />
                  <span>{location}</span>
                </div>
                <div className="descriptionProfile">
                  <p>{description}</p>
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




export default Experience