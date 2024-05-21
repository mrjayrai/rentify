/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
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
import api from '../apilink.mjs';

export default function Sign() {
    const navigate = useNavigate();
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpass] = useState('');
    const [usertype,setty] = useState('');

    const handleLoginClick = () => {
      navigate('/login'); // Adjust the path as needed
    };

    const handleSubmit = async(event) =>{
      event.preventDefault(); 
      // console.log(email);
      // console.log(name);
      // console.log(password);
      // console.log(usertype);
      if(email===''||name===''|| password===''|| usertype === ''){
        alert("Enter all Details");
      }else{
        const res = await fetch(api+'createuser',{
          method:"POST",
        crossDomain:true,
        headers:{              
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
      },
      body: JSON.stringify({
        email,
        password,
        name,
        usertype
    })
        });

        if(res.ok){
          const data = await res.json();
          console.log(data);
        }
      }

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
        <form className="mt-8 mb-2 space-y-6" onSubmit={handleSubmit}>
          <div>
            <Typography variant="h6" color="blue-gray" className='text-left'>
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your name"
              className="mt-1"
              value={name}
              onChange={(e) => setname(e.target.value)}
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
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
              value={password}
              onChange={(e) => setpass(e.target.value)}
            />
          </div>
          <div>
          <Typography variant="h6" color="blue-gray" className='text-left mb-2'>
              Choose Your Role
            </Typography>
          <select label="Select Role"
          className='w-[380px] h-[30px]'
          value={usertype}
          onChange={(e) => setty(e.target.value)}
          >
        <option value='0'>Buyer</option>
        <option value='1'>Seller</option>
      </select>
          </div>
          <Button color="blue" className="mt-6 w-full" type='submit'>
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
