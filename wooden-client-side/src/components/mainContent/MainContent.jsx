import PopularProducts from "./popularProducts/PopularProducts";

export default function MainContent() {
  return (
    <>
      <section className="flex flex-col lg:flex-row lg:py-3 mx-3 lg:mx-0  justify-between items-center gap-9">
        <div>
          <img src="https://i.ibb.co/3W7QPdW/h3-banner2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/cJLJMrf/h3-banner3.jpg" alt="" />
        </div>
      </section>
      <PopularProducts></PopularProducts>
    </>
  );
}
