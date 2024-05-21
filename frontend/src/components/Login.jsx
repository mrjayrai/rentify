/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import api from '../apilink.mjs';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
      navigate('/signup'); 
    };

    const handleSubmit = async (event) => {
      event.preventDefault(); 
      const res = await fetch(api+'login',{
        method:"POST",
        crossDomain:true,
        headers:{              
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
      },
      body: JSON.stringify({
        email,
        password
    })
      });

      if(res.ok){
        const data = await res.json();
        console.log(data);
      }
     
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <form onSubmit={handleSubmit}>
      <div className=" max-w-sm">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4 cursor-pointer"
            // href="#"
            onClick={handleLoginClick}
          >
            Register
          </a>
        </div>
      </div>
      </form>
    </section>
  );
};

export default Login;