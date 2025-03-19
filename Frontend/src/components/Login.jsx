// import {
//   Button,
//   Dialog,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Input,
//   Checkbox,
// } from "@material-tailwind/react";
// import { Link } from "react-router-dom";
// import {useForm} from 'react-hook-form';

// export function Login() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
// const onSubmit = data => console.log(data);
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen((cur) => !cur);

//   return (
//     <>
//       <Button onClick={handleOpen}>Login</Button>
//       <Dialog
//         size="xs"
//         open={open}
//         handler={handleOpen}
//         className="bg-transparent shadow-none"
//       >
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Card className="mx-auto w-full max-w-[24rem]">
//           <CardBody className="flex flex-col gap-4">
//            
//             {/* <Typography
//               className="mb-3 font-normal"
//               variant="paragraph"
//               color="gray"
//             >
//               Enter your email and password to Sign In.
//             </Typography> */}
//             <Typography className="-mb-2" variant="h6">
//                 Email:
//             </Typography>
//             
//             <Typography className="-mb-2" variant="h6">
//               Your Password:
//             </Typography>
//             
//            

//           </CardBody>
//           <CardFooter className="pt-0">
//             <Button  className="bg-pink-500"  fullWidth>
//               Login
//             </Button>
//             <Typography variant="small" className="mt-4 flex justify-center">
//               Cheetah 🐆, account bna le..
//               <Link to="/signup">
//                 <Typography
//                     as="a"
//                     // href="/signup"
//                     variant="small"
//                     color="blue-gray"
//                     className="ml-1 font-bold underline text-blue-500"
//                     onClick={handleOpen}
//                 >
//                     Sign up
//                 </Typography>
//               </Link>
//             </Typography>
//           </CardFooter>
//         </Card>
//       </form>
//       </Dialog>
//     </>
//   );
// }

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

export function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);

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
          
          <form onClick={handleSubmit(onSubmit)}  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
            
             
            <Button className="mt-6 bg-pink-500" fullWidth>
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
