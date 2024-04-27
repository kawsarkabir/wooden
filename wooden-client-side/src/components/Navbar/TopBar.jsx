import "./TopBar.css";

export default function TopBar() {
  return (
    <>
      <div className="bg-[#373839]  hidden lg:block">
        <section className="flex justify-between p-3 text-[#ccc]  max-w-screen-xl mx-auto">
          <div>
            <ul className="right_border flex space-x-2">
              <li>
                <small className="">Hello! Welcome to our store</small>
              </li>
              <li>
                <small>info@abc.com</small>
              </li>
            </ul>
          </div>
          <div>
            <ul className="right_border flex items-center gap-x-4 text-sm topbarMenu">
              <li>
                <small>
                  <i className="fa-solid fa-lock mr-1  text-[#aaa]"></i>
                </small>
                <small>Sign in</small>{" "}
              </li>
              <li>
                <small>
                  <i className="mr-1 fa-solid fa-code-compare  text-[#aaa]"></i>
                </small>
                <small>Compare</small>
              </li>
              <li>
                <small>Currency</small>
                <small>
                  <i className="ml-1 fa-solid fa-chevron-down  text-[#aaa]"></i>
                </small>
              </li>
              <li>
                <small>English</small>
                <small>
                  <i className="ml-1 fa-solid fa-chevron-down text-[#aaa]"></i>
                </small>
              </li>
            </ul>
          </div>
        </section>
        {/* sub topbar */}
      </div>
      <section className="subTopbar flex justify-between items-center max-w-screen-xl mx-auto p-3">
        <div>
          <span className="text-2xl uppercase font-bold">Wooden</span>
        </div>
        <div className="flex items-center gap-x-1">
          <img src="https://i.ibb.co/VH724v1/download.png" alt="" />
          <div className="mt-2">
            <span className="cart-products-count font-bold">0</span>
            <span className="cart-products-text font-bold ml-1">item - </span>
            <span className="cart-products-total text-[#666]">$0.00</span>
          </div>
        </div>
      </section>
      {/* searbar input form */}
      <section className="max-w-screen-sm mx-auto searchBar p-3">
        <form className="form relative ">
          <input
            className="input rounded px-8 py-3 border-2  placeholder-gray-400 focus:outline-[#33c9db]  w-full"
            placeholder="Search Your Product..."
            required
            type="text"
          />
          <button className="absolute right-0 py-4 px-4 hover:bg-[#666] transition bg-[#33c9db] -translate-y-1/2 top-1/2 p-1">
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
      </section>
      <div className="border-b p-3 hidden lg:block max-w-screen-xl mx-auto mt-10"></div>
    </>
  );
}
