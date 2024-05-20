/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option
} from "@material-tailwind/react";

export default function Sign() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login'); // Adjust the path as needed
    };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card color="transparent" shadow={false} className="w-full max-w-md p-4 md:p-8">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 text-sm font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 space-y-6">
          <div>
            <Typography variant="h6" color="blue-gray" className='text-left'>
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your name"
              className="mt-1"
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className='text-left'>
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="mt-1"
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className='text-left'>
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="mt-1"
            />
          </div>
          <div>
          <Typography variant="h6" color="blue-gray" className='text-left mb-2'>
              Choose Your Role
            </Typography>
          <Select label="Select Role">
        <Option value='0'>Buyer</Option>
        <Option value='1'>Seller</Option>
      </Select>
          </div>
          <Button color="blue" className="mt-6 w-full">
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center text-sm font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline" onClick={handleLoginClick}>
                {/* <Button onClick={handleLoginClick}> */}
              Sign In
              {/* </Button> */}
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
