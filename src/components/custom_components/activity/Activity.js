import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import "./activity.css"
import { Separator } from "@/components/ui/separator"


const Activity = () => {
    return (
        <>
            <div className="container">
                <Card>
                    <CardHeader> <CardTitle>Activity</CardTitle>
                        <CardDescription> 2344 follower </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="btn_activity">
                            <Button variant='linkdin' > Posts</Button>
                            <Button variant='linkdin' > Comments</Button>
                            <Button variant='linkdin' > Videos</Button>
                            <Button variant='linkdin' > Documents</Button>
                        </div>
                        <div className="post_details mx-2 my-2">

                            <div className="left">
                            <img src="https://media.licdn.com/dms/image/D4D03AQGochTRMKHEag/profile-displayphoto-shrink_400_400/0/1693166156983?e=1715817600&v=beta&t=HGZ7zGJGNgNo9gegmIdC8CGY8glROJ5h4ipJFk6ou9E" alt="" className="post_img rounded-md overflow-auto" />
                            </div>
                            <div className="right mx-2">
                                <span className="text-gray-500"> Nitin Singh  12h</span>
                                <div className="img_desc">
                                    <p className="post_desc "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, hic possimus debitis omnis nulla, eum labore repellendus ratione fugiat incidunt voluptatem saepe accusamus quas facilis odit perferendis, necessitatibus praesentium eos.
                                        Praesentium fugiat fuga voluptatem earum optio a voluptatibus similique eligendi ab quia, qui sequi, voluptates quidem voluptatum distinctio aliquid libero magni et assumenda unde ipsum quod in dolorem esse! Laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Separator />
                    </CardContent>
                </Card>
            </div>
        </>

    )
}

export default Activity