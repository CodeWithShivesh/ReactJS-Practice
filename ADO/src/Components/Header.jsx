import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-3 py-2 text-bg-dark border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            <h1>ADO Operation</h1>
          </a>
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" className="nav-link text-white">
                <svg
                  className="bi d-block mx-auto mb-1"
                  width="24"
                  height="24"
                ></svg>
                <Link to={"/"} className="header-link">
                  Home
                </Link>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg
                  className="bi d-block mx-auto mb-1"
                  width="24"
                  height="24"
                ></svg>
                <Link to={"/questions"} className="header-link">
                  Dashboard
                </Link>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlinkHref="#table"></use>
                </svg>
                Testcases
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlinkHref="#grid"></use>
                </svg>
                User
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlinkHref="#people-circle"></use>
                </svg>
                Features
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
