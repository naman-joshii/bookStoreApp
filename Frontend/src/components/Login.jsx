
import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import toast from "react-hot-toast";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  handleOpen,
  Dialog,
} from "@material-tailwind/react";

export function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = async(data) => {
  try {
        const userInfo = {
          email: data.email,
          password: data.password,
        };
    
        const res = await axios.post("http://localhost:3000/user/login", userInfo);
        console.log(res.data);
        localStorage.setItem("Users", JSON.stringify(res.data))
        console.log("local storage",localStorage.getItem('Users'));
        window.location.reload();
        toast.success("login successfull cheeton")
      } catch (err) {
        console.error("Error:", err.response ? err.response.data : err.message);
        toast.error("Error: " + (err.response ? err.response.data.message : err.message));
      }
}

  return (
    <>
      <Button onClick={handleOpen}>Login</Button>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full flex items-center justify-center p-3" color="" shadow={false}>
        <Typography variant="h4" color="blue-gray">                 Login Now, <span className=" text-pink-500">Cheetey</span> 🐆
           </Typography>
          
          <form onSubmit={handleSubmit(onSubmit)}  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
             
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email:
              </Typography>
              <input type="email" name="email" placeholder="cheetah@gmail.com" className="border-[2px] rounded-md p-1 outline-none"  {...register("email", {required: true})}/>
              {<errors className="email"></errors> && <span className="-mt-4 text-sm text-red-500"> *This field is required</span>}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password:
              </Typography>
              <input
                type="password" name="password" className="border-[2px] rounded-md p-1 outline-none" placeholder="********" {...register("password", {required: true})}
            />
             {errors.password && <span className="-mt-4 text-sm text-red-500">*This field is required</span>}
            </div>
            
             
            <Button type="submit" className="mt-6 bg-pink-500" fullWidth>
              lOGIN
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Account nahi banaya hai?{" "}
              <Link to="/signup">
              <a href="#" className="font-medium text-blue-700 underline">
                SignUp
              </a>
              </Link>
            </Typography>
          </form>
        </Card>
      </Dialog>
    </>
  );
}
