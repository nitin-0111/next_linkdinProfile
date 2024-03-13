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
const About = ({ about }) => {
  const { desc } = about;
  return (
    <>
      <div className="container">

        <Card>
          <CardHeader>
            <div className="header_about flex justify-between">
              <CardTitle>About</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="linkdin"> <EditIcon /> </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[60vw] max-h-[50vh]">
                  <DialogHeader>
                    <DialogTitle>Edit About</DialogTitle>
                    <DialogDescription> edit your profile About section: </DialogDescription>
                  </DialogHeader>


                  <div className="edit_container">


                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="bio" className="text-right">
                        About*
                      </Label>
                      <Textarea id="bio" placeholder={desc} className="w-[300%] h-[160%]" />
                    </div>
                  </div>
                  <DialogFooter >
                    <Button variant="linkdin" className="my-3">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div> </CardHeader>
          <CardContent>
            <p> {desc}</p>
          </CardContent>
        </Card>
      </div>
    </>

  )
}
export default About;
