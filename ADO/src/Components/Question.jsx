import Container from "./Container";
import Header from "./Header";
import { Link } from "react-router-dom";

const Question = () => {
  return (
    <>
      <Container>
        <h1>What kind of Validation you want ?</h1>
        <div className="options">
          <button className="btn btn-success px-3 button" type="button">
            <Link to="/db-page" className="link">
              DB Validation
            </Link>
          </button>
          <button className="btn btn-success px-3 button" type="button">
            <Link to="/Homepage" className="link">
              File Validation
            </Link>
          </button>
        </div>
      </Container>
    </>
  );
};

export default Question;

// form-check-input
// form-check-label
