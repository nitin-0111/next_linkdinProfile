import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import "./mainInfo.css"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";


function MainInfo() {
  return (
    <>
      <div className="container">
        <Card>
          <CardHeader>
            <div className="header-img relative">

              <div className="cover-img">
                <img src="https://media.licdn.com/dms/image/D5616AQHS6LyrSU9Aqw/profile-displaybackgroundimage-shrink_350_1400/0/1703415969940?e=1715817600&v=beta&t=fZIaXtWSnSX-opby0Fgn4OoYNRnmaBresjNoLsFpvbQ" />
              </div>
              <div className="profile-img absolute">
                <img src="https://media.licdn.com/dms/image/D4D03AQGochTRMKHEag/profile-displayphoto-shrink_400_400/0/1693166156983?e=1715817600&v=beta&t=HGZ7zGJGNgNo9gegmIdC8CGY8glROJ5h4ipJFk6ou9E" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="user-info">
              <div className="left">
                <h3 className="text-2xl font-extrabold"> Nitin Singh </h3>
                <span className="text-wrap"> SDE 2 @Salesforce | Ex - Microsoft, Citrix |
                  Fullstack Developer | Leetcode 2000+ | NIT Allahabad | Mentor | Java | Javascript</span>
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
            <Button variant='linkdin'> Message</Button>
            <Button variant='linkdin'> Following</Button>
            <Button variant='linkdin'> More</Button>
              <div className="message-btn"></div>
              <div className="following-btn"></div>
              <div className="more-btn"></div>
            </div>



          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default MainInfo;