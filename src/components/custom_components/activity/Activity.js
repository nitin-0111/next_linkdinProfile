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


const Activity = ({activity}) => {
    const {follower,timeby,desc,img}=activity;
    return (
        <>
            <div className="container">
                <Card>
                    <CardHeader> <CardTitle>Activity</CardTitle>
                        <CardDescription> {follower} </CardDescription>
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
                            <img src={img} alt="" className="post_img rounded-md overflow-auto" />
                            </div>
                            <div className="right mx-2">
                                <span className="text-gray-500"> {timeby}</span>
                                <div className="img_desc">
                                    <p className="post_desc "> {desc}
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