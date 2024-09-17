import { FaCalculator } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <FaCalculator size="30px"></FaCalculator> <h3>Hisaab Kitaab</h3>
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="#" className="nav-link text-white">
                  Personal
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  Budget
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  Accounts
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  Cash Withdwrals
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form
            className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" className="nav-link text-secondary">
                <Date></Date>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-secondary">
                Friends
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-secondary">
                Add
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-secondary">
                Split
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-secondary">
                Note
              </a>
            </li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
