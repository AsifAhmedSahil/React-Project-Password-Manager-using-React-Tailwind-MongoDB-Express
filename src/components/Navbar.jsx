import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 h-14  p-4 flex justify-between items-center text-white font-bold ">
      
        <div className="logo font-bold text-2xl">
          <span className="text-green-600">&lt;</span>
          passop
          <span className="text-green-600">/&gt;</span>
          </div>

        <div>
          <ul className="flex gap-6 ">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
