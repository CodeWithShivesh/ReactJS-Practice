import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {
  return (
    <>
      {/* <h1 className="text-center text-3xl m-5 bg-gray-700 p-10 font-extrabold text-amber-300 ">
        My app
      </h1> */}
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
