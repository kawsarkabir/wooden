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
      <section className="subTopbar flex justify-center lg:justify-between items-center max-w-screen-xl mx-auto p-3">
        <div>
          <span className="text-2xl uppercase font-bold">Wooden</span>
        </div>
        <div className="lg:flex items-center gap-x-1 hidden lg:block">
          <img src="https://i.ibb.co/VH724v1/download.png" alt="" />
          <div className="mt-2">
            <span className="cart-products-count font-bold">0</span>
            <span className="cart-products-text font-bold ml-1">item - </span>
            <span className="cart-products-total text-[#666]">$0.00</span>
          </div>
        </div>
      </section>
      {/* searbar input form */}
      <div className="container mx-auto flex p-3 items-center">
        <form className="rounded flex items-center border max-w-screen-md mx-auto w-full">
          <div className="relative">
            <div className="hover-trigger bg-transparent uppercase font-bold text-sm whitespace-nowrap  cursor-pointer px-4 hidden lg:block md:block">
              All Categories <i className="ml-1 fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <input
            className="border-l bg-transparent focus:outline-[#33c9db] font-semibold py-3 pl-4 w-full"
            type="text"
            placeholder="I'm searching for ..."
          />
          <button className="py-4 px-4 hover:bg-[#666] transition bg-[#33c9db] ml-auto">
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
      <div className="border-b max-w-screen-lg mx-auto lg:mt-5"></div>
    </>
  );
}
