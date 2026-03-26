import React from 'react';
import dollerImg from '../../assets/Currency.png'
const Navbar = ({coin}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-20 py-5">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {' '}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{' '}
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-info flex gap-3 items-center font-bold text-xl">
          ${coin} Coin
          <img src={dollerImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;