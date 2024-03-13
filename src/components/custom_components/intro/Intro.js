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

import "./mainInfo.css"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import EditIcon from '@mui/icons-material/Edit';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


function Intro({ intro }) {
  const { coverImg, profileImg, fullName, Bio } = intro;
  return (
    <>
      <div className="container ">
        <Card>
          <CardHeader>
            <div className="header-img relative">

              <div className="cover-img max-h-[300px] relative">

                <img src={coverImg} />
              </div>
              <div className="profile-img  ">
                <img src={profileImg} />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative mt-[-100px]">
              <div className="user-info">
                <div className="left">
                  <div className="edit_button flex justify-between">
                    <h3 className="text-2xl font-extrabold">{fullName} </h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="linkdin"> <EditIcon /> </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[60vw]">
                        <DialogHeader>
                          <DialogTitle>Edit Intro</DialogTitle>
                          <DialogDescription> edit your profile intro </DialogDescription>
                        </DialogHeader>


                        <div className="edit_container flex gap-4 justify-between">
                          <div className="left_edit grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                Name
                              </Label>
                              <Input id="name" value={fullName}
                                className="col-span-3 input_username w-[60%]" />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="bio" className="text-right">
                                Bio*
                              </Label>
                              <Textarea id="bio" placeholder={Bio} className="w-[300%]" />
                            </div>
                          </div>
                          <div className="right_edit">
                            <img src={profileImg} alt="" className="post_img rounded-md overflow-auto" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="linkdin">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <span className="text-wrap"> {Bio}</span>
                </div>
                <div className="right">

                </div>
              </div>
              <div className="mutual-section">
                <div className="overlap-img mx-1 flex align-bottom">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>Img</AvatarFallback>
                  </Avatar>
                  <span className="mx-1 algin-baseline"> Durgesh and 19 other are mutual</span>
                </div>
                <div className="details"></div>
              </div>
              <div className="button-section my-2">
                <Button variant='linkdin_select' className="text-white"> Message</Button>
                <Button variant='linkdin'> Following</Button>
                <Button variant='linkdin'> More</Button>
                <div className="message-btn"></div>
                <div className="following-btn"></div>
                <div className="more-btn"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Intro;