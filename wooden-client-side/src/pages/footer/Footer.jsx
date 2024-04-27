import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[#373839] mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
            <div className=" mb-10 lg:col-span-2 lg:mb-0">
              <h2 className="flex text-white justify-center lg:justify-start font-bold text-2xl">
                KEEP IN TOUCH
              </h2>
              <p className="py-8 text-sm text-[#aaaaaa]  text-center lg:text-left">
                Claritas est etiam processus dynamicus, qui sequitur mutatio nem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam putamus
              </p>
              <div className="flex social_menu mt-4 space-x-2 justify-center lg:justify-start sm:mt-0 ">
                <span>
                  <i className="fa-brands fa-square-x-twitter"></i>
                </span>
                <span>
                  <i className="fa-brands fa-square-facebook"></i>
                </span>
                <span>
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span>
                  <i className="fa-brands fa-youtube"></i>
                </span>
                <span>
                  <i className="fa-brands fa-square-pinterest"></i>
                </span>
              </div>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-white font-medium mb-7">WOODEN.</h4>
              <ul className="text-sm  transition-all duration-500 text-[#aaa]">
                <li className="mb-6">
                  <a href="javascript:;" className=" hover:text-[#33c9db]">
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-[#aaa] hover:text-[#33c9db]"
                  >
                    All Art & craft Items
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-[#aaa] hover:text-[#33c9db]"
                  >
                    Add Art & Craft item
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-[#aaa] hover:text-[#33c9db]"
                  >
                    My Art & Craft List
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-white font-medium mb-7">Products</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-[#aaa] hover:text-[#33c9db]"
                  >
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-[#aaa] hover:text-[#33c9db]"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-[#aaa] hover:text-[#33c9db]"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-[#aaa] hover:text-[#33c9db]"
                  >
                    Components Library
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-white font-medium mb-7">
                NEWSLETTER
              </h4>
              <p className="w-full text-sm text-[#aaaaaa]  text-center lg:text-left">
                Signup to recieve our latest news and hotest promotions
              </p>
              <form className="form relative mt-3">
                <input
                  className="input rounded px-2 py-2 border-2  placeholder-gray-400 focus:outline-[#33c9db]  w-full"
                  placeholder="Search..."
                  required
                  type="text"
                />
                <button className="absolute right-0 py-3 px-4 hover:bg-[#666] transition bg-[#33c9db] -translate-y-1/2 top-1/2 p-1">
                  <svg
                    width="17"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="search"
                    className="w-5 h-5 text-[#fff]"
                  >
                    <path
                      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                      stroke="currentColor"
                      strokeWidth="1.333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
