import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import "./experience.css"
import { Separator } from "@/components/ui/separator"


const Experience = () => {
    return (
        <>
            <div className="container">
                <Card>
                    <CardHeader> <CardTitle>Experience</CardTitle> </CardHeader>
                    <CardContent>
                        <div className="header">
                            <div className="company_logo">
                                <img src="https://media.licdn.com/dms/image/C560BAQHZ9xYomLW7zg/company-logo_100_100/0/1630658255326/salesforce_logo?e=1718236800&v=beta&t=VNct44isN9YH9I0t5272o5g6lHwrvP-zTOzVphiyKYE" alt="" className="company_logo" />
                            </div>
                            <div className="description">
                                <h4>Sales Forces</h4>
                                <span >SDE . Full-time</span><br />
                                <div className="location_details">
                                    <span> Dec 2023 - Present . 4 mos </span><br />
                                    <span> Hyderabad, Telegana, India . Hybrid </span>
                                </div>
                                <div className="descriptionProfile">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur ut perspiciatis voluptates fuga, deserunt quasi quia unde commodi, repellat necessitatibus, quos expedita eius fugit aut eligendi porro quibusdam itaque?
                                        Voluptatibus quos, maxime numquam odit, voluptate at libero id quas maiores deleniti tempora nostrum. Rem, commodi facere dicta facilis minima quo ducimus, et accusantium reiciendis pariatur quasi soluta eaque veniam!
                                        Repudiandae nobis perferendis deleniti aperiam reprehenderit esse nemo libero consequatur odio impedit, illum laudantium. Quasi, aliquam? Autem, placeat necessitatibus illo vero tempore ipsa amet eum excepturi dolor laudantium adipisci vitae. </p>
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

export default Experience