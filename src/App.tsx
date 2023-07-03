import MichelleAvatar from './assets/avatar-michelle.jpg';
import FacebookIcon from './assets/icon-facebook.svg';
import PinterestIcon from './assets/icon-pinterest.svg';
import TwitterIcon from './assets/icon-twitter.svg';

import { useState } from 'react';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((current) => !current);
  };

  return (
    <>
      <main className="flex justify-center items-center absolute w-full h-full">
        <article className="bg-white rounded-lg shadow flex md:flex-row flex-col md:w-max max-md:max-w-[327px]">
          <div className="md:w-[285px] md:h-[280px] w-[327px] h-[200px] bg-[url('./assets/drawers.jpg')] bg-cover md:rounded-s-lg rounded-t-lg"></div>
          <div className="md:px-[40px] px-8 md:py-8 max-md:pt-8 max-md:pb-[12px] max-md:relative">
            <h1 className="max-w-[365px] text-slate-600 md:text-[20px] text-base max-md:leading-[1.4rem] font-bold leading-7 tracking-wide">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="max-w-[365px] text-slate-500 text-[13px] font-medium leading-tight tracking-wide pt-3 pb-[20px]">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full" src={MichelleAvatar} />
                <div className="ml-4">
                  <h2 className="text-slate-600 text-[13px] font-bold leading-tight tracking-wide">
                    Michelle Appleton
                  </h2>
                  <p className="text-slate-400 text-[13px] font-medium leading-tight tracking-wide">
                    28 Jun 2020
                  </p>
                </div>
              </div>

              <div className="rounded-full flex items-center justify-center md:relative">
                {open && (
                  <div className="bg-slate-600 md:rounded-lg rounded-b-lg px-9 py-4 shadow absolute md:top-[-76px] max-md:bottom-0 max-md:right-0 flex w-max max-md:w-full max-md:h-16 items-center md:justify-center justify-start before:bg-slate-600 before:h-6 before:w-6 before:rotate-45 before:absolute before:bottom-[-6px] before:md:flex before:hidden">
                    <p className="text-slate-400 text-[13px] uppercase font-medium leading-tight tracking-[4px]">
                      Share
                    </p>
                    <div className="flex gap-x-4 z-50 ml-[21px]">
                      <img src={FacebookIcon} height="20px" />
                      <img src={TwitterIcon} height="20px" />
                      <img src={PinterestIcon} height="20px" />
                    </div>
                  </div>
                )}
                <button
                  onClick={handleClick}
                  className={`w-8 h-8 rounded-full z-50 flex items-center justify-center md:relative ${
                    open ? 'bg-slate-500' : 'bg-slate-100'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                  >
                    <path
                      fill={open ? '#FFFFFF' : '#6E8098'}
                      d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default App;
