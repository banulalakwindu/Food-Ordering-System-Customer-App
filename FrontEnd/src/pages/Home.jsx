import Sidebar from "../components/Sidebar";
import FoodCarousel from "../components/FoodCarousel";
import Logo from "../public/img/logo.png"
import SidebarSize from "../components/SidebarSize";

const Home = ({ isLoggedIn, userId }) => {
  console.log("Home", isLoggedIn, userId);
  return <div className="d-flex vh-100 home position-relative">
    <Sidebar isLoggedIn={isLoggedIn} />
    <SidebarSize isLoggedIn={isLoggedIn} />
    <div className="d-flex flex-column bg-dark w-100 right-side">
      <div className="d-flex flex-column  mb-2 align-items-center justify-content-around vh-100" >
        <div className="d-flex mt-sm-5 flex-sm-row flex-column align-items-center">
          <img src={Logo} width={100} height={100} alt="logo" />
          <div className="mt-sm-0 mt-3 d-flex flex-column ms-3 align-items-center align-items-sm-start text-center text-sm-start">
            <h3 className="text-warning mb-0">WELCOME TO</h3>
            <h1 className="text-warning mb-3 display-3">CROWN TEA LOUNGE</h1>
          </div>
        </div>
        <FoodCarousel />
      </div>

    </div>
  </div>;
};

export default Home;
