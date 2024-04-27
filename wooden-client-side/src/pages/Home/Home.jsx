import Banner from "../../components/Banner/Banner";
import Aside from "../../components/aside/Aside";
import MainContent from "../../components/mainContent/MainContent";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-4 grid-cols-1 justify-items-center lg:justify-items-start mt-6">
        <div>
          <Aside></Aside>
        </div>
        <div className="col-span-3">
          <MainContent></MainContent>
        </div>
      </div>
    </>
  );
}
