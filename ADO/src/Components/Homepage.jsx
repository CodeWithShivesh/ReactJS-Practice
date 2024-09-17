import FileMenu from "./Filemenu";
import Header from "./Header";
import Report from "./Report";
import SearchHistory from "./SearchHistory";
import SearchMenu from "./SearchMenu";

const Homepage = () => {
  return (
    <>
      {/*<Header></Header>
       <div className="Boxx">
        <div className="Box1">
          <SearchMenu></SearchMenu>
          <SearchHistory></SearchHistory>
        </div>
        <div className="Box2">
          <FileMenu></FileMenu>
          <Report></Report>
        </div>
      </div> */}
      <FileMenu></FileMenu>
    </>
  );
};

export default Homepage;
