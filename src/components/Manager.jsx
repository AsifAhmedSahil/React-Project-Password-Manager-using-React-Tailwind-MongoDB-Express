import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className=" mx-auto bg-slate-100 max-w-5xl mt-32">
        <h3 className="font-bold text-2xl text-center mb-4">
        <span className="text-green-600">&lt;</span>
          passop
          <span className="text-green-600">/&gt;</span>
        </h3>
        <p className="text-center text-green-700 text-lg">your own password manager</p>
        <div className="flex flex-col p-4 gap-6 text-black">
        <input className="rounded-full w-full border border-green-500 px-4 py-1" type="text" name="" id="" />
          <div className="flex gap-6 w-full justify-between ">
          <input className="rounded-full w-full border border-green-500 px-4 py-1" type="text" name="" id="" />
          <input className="rounded-full w-full border border-green-500 px-4 py-1" type="text" name="" id="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
