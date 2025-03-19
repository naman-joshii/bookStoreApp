import React from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  handleOpen,
  Dialog,
} from "@material-tailwind/react";

export function Signup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);
  return (
    <div className='flex h-screen justify-center items-center'>
       <Card className="mx-auto w-full max-w-[29rem] flex items-center justify-center p-6 " color="" shadow={true}>
               <Typography variant="h4" color="blue-gray">                 SignUp Now, <span className="text-pink-500">Cheetey</span> 🐆
                  </Typography>
                 
                 <form onClick={handleSubmit(onSubmit)}  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                   <div className="mb-1 flex flex-col gap-6">

                   <Typography variant="h6" color="blue-gray" className="-mb-3">
                       Your Name:
                     </Typography>
                     <input type="name" name="name" placeholder="cheetah" className="border-[2px] rounded-md p-1 outline-none" required {...register("name", {required: true})}/>
                    
                     <Typography variant="h6" color="blue-gray" className="-mb-3">
                       Your Email:
                     </Typography>
                     <input type="email" name="email" placeholder="cheetah@gmail.com" className="border-[2px] rounded-md p-1 outline-none" required {...register("email", {required: true})}/>
                     <Typography variant="h6" color="blue-gray" className="-mb-3">
                       Password:
                     </Typography>
                     <input
                       type="password" name="password" required className="border-[2px] rounded-md p-1 outline-none" placeholder="********" {...register("password", {required: true})}
                   />
                   </div>
                   
                    
                   <Button className="mt-6 bg-pink-500" fullWidth>
                   Sign In
                   </Button>
                   <Typography color="gray" className="mt-4 text-center font-normal">
                     Account bana hua hai?{" "}
                     <Link to="/">
                     <a href="#" className="font-medium text-blue-700 underline">
                       login
                     </a>
                     </Link>
                   </Typography>
                 </form>
               </Card>
    </div>
  )
}

export default Signup
