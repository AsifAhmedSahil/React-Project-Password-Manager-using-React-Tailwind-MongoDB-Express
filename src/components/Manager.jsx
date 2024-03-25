import React, { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Manager = () => {
  const ref = useRef()
  const [status,setStatus] = useState(true)
  const [form,setForm] = useState({site:'',username:'',password:''})

  const showPassword = () => {

  }

  const savePassword = () =>{
    console.log(form)

  }

  const handleChange = (e) =>{
    setForm({...form,[e.target.name]: e.target.value})

  }
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className=" mx-auto  max-w-5xl mt-32">
        <h3 className="font-bold text-2xl text-center mb-4">
          <span className="text-green-600">&lt;</span>
          passop
          <span className="text-green-600">/&gt;</span>
        </h3>
        <p className="text-center text-green-700 text-lg">
          your own password manager
        </p>
        <div className="flex flex-col p-4 gap-6 text-black items-center">
          <input
          value={form.site}
          onChange={handleChange}
          placeholder="Enter Wensite Url"
            className="rounded-full w-full border border-green-500 px-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex gap-6 w-full justify-between ">
            <input
            value={form.username}
            onChange={handleChange}
            placeholder="Enter Username"
              className="rounded-full w-full border border-green-500 px-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">

            <input
            value={form.password}
            onChange={handleChange}
            placeholder="Enter Password"
              className="rounded-full w-full border border-green-500 px-4 py-1"
              type="text"
              name="password"
              id=""
            />
            <span  onClick={() => setStatus(!status)} className="absolute right-[6px] top-[8px] cursor-pointer">{status? <FaEye width={20}/> : <FaEyeSlash/>}</span>

            </div>
            
          </div>
          <button onClick={savePassword} className="flex justify-center items-center gap-3 bg-green-400 w-fit px-5 py-2 rounded-full">
          <lord-icon
            src="https://cdn.lordicon.com/slmechys.json"
            trigger="hover"
            
          ></lord-icon>
           Add Password
        </button>
        </div>
        
      </div>
    </>
  );
};

export default Manager;
