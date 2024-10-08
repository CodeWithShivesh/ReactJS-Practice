import { ImSpinner3 } from "react-icons/im";

const LodingSppiner = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LodingSppiner;
